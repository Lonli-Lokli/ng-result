import { Component, TemplateRef, Input } from '@angular/core';
import { Maybe } from '@sweet-monads/maybe';

@Component({
  selector: 'll-maybe',
  styleUrls: ['./maybe.component.scss'],
  templateUrl: './maybe.component.html'
})
export class MaybeComponent<T> {
  @Input()
  maybe: Maybe<T> | null = null;

  @Input()
  someTemplate: TemplateRef<T> | null = null;

  @Input()
  noneText = 'There is no info to display.';

  noneRef: TemplateRef<any> | null = null;
}
