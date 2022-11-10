import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
@Component({
  selector: 'app-stepper-demo2',
  templateUrl: './stepper-demo2.component.html',
  styleUrls: ['./stepper-demo2.component.css']
})
export class StepperDemo2Component {

  title = "AngularApp";
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  firstFormGroup1!: FormGroup;
  secondFormGroup1!: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
    this.firstFormGroup1 = this._formBuilder.group({
      firstCtrl1: ["", Validators.required]
    });
    this.secondFormGroup1 = this._formBuilder.group({
      secondCtrl1: ["", Validators.required]
    });
  }
}
