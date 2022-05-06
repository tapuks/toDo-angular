import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.scss']
})
export class SumaComponent implements OnInit {
  @Input() num1: number;
  @Input() num2:number;
  resultado: number;

  constructor() {
    this.num1 = 15;
    this.num2 = 10;
    this.resultado= 0
   }

  ngOnInit(): void {
  }

  onClick(){
    this.resultado = this.num1 + this.num2
  }

}
