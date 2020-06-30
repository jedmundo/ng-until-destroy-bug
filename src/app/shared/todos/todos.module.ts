import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [TodoComponent],
  exports: [TodoComponent],
})
export class TodosModule {}
