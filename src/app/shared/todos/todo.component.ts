import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormControl } from '@angular/forms';
import { Todo } from './todo.model';

console.log('HERE');

@UntilDestroy()
@Component({
  selector: 'app-todo-component',
  template: `<div>
    <h1>Todo input</h1>
    <input [formControl]="inputControl" />
  </div>`,
})
export class TodoComponent implements OnInit {
  inputControl = new FormControl();
  todo: Todo;

  ngOnInit(): void {
    this.inputControl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(() => console.log('SUBSCRIBED'));
  }
}
