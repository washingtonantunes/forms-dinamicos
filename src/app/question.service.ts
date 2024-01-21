import { Injectable } from '@angular/core';

import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { Observable, of } from 'rxjs';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions(): Observable<QuestionBase<any>[]> {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'name',
        label: 'Nome Completo',
        value: '',
        required: true,
        order: 1,
        validator: [Validators.required, Validators.minLength(10)],
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
