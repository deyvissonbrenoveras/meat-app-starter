import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {NgModel, FormControlName} from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit, AfterContentInit {
  @Input() label: any;
  @Input() errorMessage: any;

  input: any;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control : FormControlName;

  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit(){
    this.input = this.model || this.control;
    if(this.input === undefined){
      throw new Error('Esse component precisa ser usado com uma diretinva NgModel ou form control name');
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }
  hasError(): boolean{
    return !this.input.valid && (this.input.dirty || this.input.touched);
  }
}
