import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { starComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    starComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
