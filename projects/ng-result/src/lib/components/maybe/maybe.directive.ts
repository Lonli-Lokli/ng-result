import { Directive, TemplateRef } from '@angular/core';
import { MaybeComponent } from './maybe.component';

@Directive({ selector: '[ll-none]' })
export class MaybeNoneDirective<D> {
  public constructor(public templateRef: TemplateRef<any>, maybe: MaybeComponent<D>) {
    maybe.noneRef = templateRef;
  }
}
