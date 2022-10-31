import { Directive, TemplateRef } from '@angular/core';
import { ResultComponent } from './result.component';

@Directive({ selector: '[ll-initial]' })
export class ResultInitialDirective<E, D> {
  public constructor(public templateRef: TemplateRef<any>, result: ResultComponent<D>) {
    result.initialRef = templateRef;
  }
}

@Directive({ selector: '[ll-pending]' })
export class ResultPendingDirective<E, D> {
  public constructor(public templateRef: TemplateRef<any>, result: ResultComponent<D>) {
    result.pendingRef = templateRef;
  }
}

@Directive({ selector: '[ll-failure]' })
export class ResultFailureDirective<E, D> {
  public constructor(public templateRef: TemplateRef<any>, result: ResultComponent<D>) {
    result.failureRef = templateRef;
  }
}
