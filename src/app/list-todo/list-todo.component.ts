import { Tareas } from './../../modelos/tareas.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  @Input() listaTareasRecibida: Tareas[];


  constructor() {
    this.listaTareasRecibida=[];
   }

  ngOnInit(): void {
   
  }

  onClickCompletar(tarea: Tareas){
    
    // this.listaTareasRecibida[index].completada = !this.listaTareasRecibida[index].completada
    tarea.completada= !tarea.completada
  }

  onClickEliminar(index: number){
    this.listaTareasRecibida.splice(index,1)
  }



  

}
