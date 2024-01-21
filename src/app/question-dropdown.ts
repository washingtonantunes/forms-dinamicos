import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'dropdown';
  override options: { key: string; value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.type = options['options'] || [];
  }
}
