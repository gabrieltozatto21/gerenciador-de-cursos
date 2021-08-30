import { Component, OnInit } from '@angular/core';
import { curso } from './curso';
import { cursoService } from './curso.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
})
export class CursosComponent implements OnInit {
  cursos: curso[] = [];

  cursosFiltrados:curso[] = [];
  filtrar: string="";
  
  constructor(private cursoService: cursoService){}

  ngOnInit():void{
    this.cursos = this.cursoService.retriveAll();
    this.cursosFiltrados = this.cursos;
  }

  set filtro(valor:string){
    this.filtrar= valor;

    this.cursosFiltrados = this.cursos.filter((cursos: curso) => cursos.name.toLocaleLowerCase().indexOf(this.filtrar.toLocaleLowerCase()) > -1)
  }

  get filtro(){
    return this.filtrar;
  }

}
