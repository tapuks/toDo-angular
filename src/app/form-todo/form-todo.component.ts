import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tareas } from 'src/modelos/tareas.model';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.scss']
})
export class FormTodoComponent implements OnInit {

  nuevaTarea: Tareas;
  arrayTareas: Tareas[]
  @Output() arrayEmitido: EventEmitter<Tareas[]>

  constructor() {
    this.nuevaTarea= new Tareas()
    this.arrayTareas = [];
    this.arrayEmitido = new EventEmitter()
   }

  ngOnInit(): void {
  }

  guardarTarea() {
    if (this.nuevaTarea.titulo && this.nuevaTarea.descripcion) {
      this.arrayTareas.push(this.nuevaTarea);
      this.nuevaTarea = new Tareas();
      this.arrayEmitido.emit(this.arrayTareas)
    }
    
    
  }

}
