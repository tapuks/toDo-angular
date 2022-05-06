import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.scss']
})
export class CronometroComponent implements OnInit {
  @Input() num : number;
  inicio: number;
  @Output() mensaje: EventEmitter<string>
  constructor() { 
    this.num = 10;
    this.mensaje = new EventEmitter()

    this.inicio = 0;


  }

  ngOnInit(): void {
    this.inicio = this.num;
  }

  onClick(){
    if (this.num >1){
      let interval =setInterval(()=> {
        this.num  -= 1
        if (this.num < 0){
          clearInterval(interval)
          this.num= this.inicio
          this.mensaje.emit(`El contador ${this.inicio} ha terminado`)
        }
      },1000)

    }
    

   

  }

}
