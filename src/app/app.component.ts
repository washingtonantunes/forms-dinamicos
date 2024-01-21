import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from './question-control.service';

import { QuestionService } from './question.service';
import { QuestionBase } from './question-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /*questions$: Observable<QuestionBase<any>[]>;
  form: FormGroup;
  payLoad = '';

  constructor(
    private questionService: QuestionService,
    private questionControlService: QuestionControlService
  ) {}

  ngOnInit() {
    this.questionService.getQuestions().subscribe(
      (questions: QuestionBase<any>[]) => {
        this.questions = questions;
      },
      (error) => {
        console.error('Erro ao obter perguntas', error);
      }
    );
    this.questions$ = this.questionService.getQuestions();
    this.form = this.questionControlService.toFormGroup(
      this.questions$ as QuestionBase<string>[]
    );
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }*/

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
