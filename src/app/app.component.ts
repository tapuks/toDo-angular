import { Tareas } from './../modelos/tareas.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appAngular';
  textoInput='texto inicial';
  propiedadesParrafo: any;
  selectColor: any;
  colorInMoment: string;
  muestraTexto: boolean;
  listaTareasRecibida: Tareas[]
 

  constructor(){
    this.propiedadesParrafo ={
      color:''
    }

    this.selectColor = {
      color: ''
    }

    this.colorInMoment='b';

    this.muestraTexto= false;

    this.listaTareasRecibida = []

   
   
  }
  

  ngOnInit(): void{
    setInterval(()=>{
      
      if (this.colorInMoment=='r'){        
        this.colorInMoment='b'
      }
      else if (this.colorInMoment=='b'){
        this.colorInMoment='r'
      }

    },1000)
  }

  mensajeRecibido($event: string){
    console.log($event)
  }

  onInput($event: any){
    this.textoInput= $event.target.value;
  }

  onClick(){
    this.muestraTexto = !this.muestraTexto;
  }

  arrayRecibido($event: Tareas[]){
    this.listaTareasRecibida = $event
  }
 
}
