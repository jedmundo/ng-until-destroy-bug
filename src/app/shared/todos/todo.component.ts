import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormControl } from '@angular/forms';

@UntilDestroy()
@Component({
  selector: 'app-todo-component',
  template: `<div>
    <h1>Hi</h1>
    <input [formControl]="inputControl" />
  </div>`,
})
export class TodoComponent implements OnInit {
  inputControl = new FormControl();

  ngOnInit(): void {
    this.inputControl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(() => console.log('SUBSCRIBED'));
  }
}