import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperDemo2Component } from './stepper-demo2/stepper-demo2.component';
import { ListDemoComponent } from './list-demo/list-demo.component';

import { MatStepperModule } from "@angular/material/stepper";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    StepperDemo2Component,
    ListDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'list', component: ListDemoComponent },
      { path: 'stepper', component:StepperDemo2Component }
    ]),
    MatListModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
