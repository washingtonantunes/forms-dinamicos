import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

@NgModule({
  declarations: [AppComponent, DynamicFormQuestionComponent],
  imports: [BrowserModule, ReactiveFormsModule, DynamicFormQuestionComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
