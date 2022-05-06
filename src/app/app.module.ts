import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SumaComponent } from './suma/suma.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { FormsModule } from '@angular/forms';
import { FormTodoComponent } from './form-todo/form-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    SumaComponent,
    CronometroComponent,
    FormTodoComponent,
    ListTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
