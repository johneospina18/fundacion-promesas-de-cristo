import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fundacion-promesas-de-cristo';


  datosMenu = [
  {
    'titulo':'¿QUIÉNES SOMOS?',
    'url':''
  },
  {
    'titulo':'PROYECTOS',
    'url':''
  },
  {
    'titulo':'HAZTE VOLUNTARIO',
    'url':''
  },
  {
    'titulo':'DONACIONES',
    'url':''
  }
];
}
