import { Directive, TemplateRef } from '@angular/core';
import { EitherComponent } from './either.component';

@Directive({ selector: '[ll-left]' })
export class EitherLeftDirective<E, D> {
  public constructor(public templateRef: TemplateRef<E>, either: EitherComponent<E, D>) {
    either.leftRef = templateRef;
  }
}
