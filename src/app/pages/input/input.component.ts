import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {
  @Input() inputId = '';
  @Input() control!: FormControl;
  @Input() label:string = '';
  @Input() type:string = 'text';
  @Input() required: boolean = false;
  @Input() placeholder : string = '';

  constructor() {}

  ngOnInit(): void {
  }

}
