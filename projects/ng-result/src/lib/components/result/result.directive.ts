import { Directive, TemplateRef } from '@angular/core';
import { ResultComponent } from './result.component';

@Directive({ selector: '[llInitial]' })
export class ResultInitialDirective<E, D> {
  public constructor(public templateRef: TemplateRef<any>, result: ResultComponent<D>) {
    result.initialRef = templateRef;
  }
}

@Directive({ selector: '[llPending]' })
export class ResultPendingDirective<E, D> {
  public constructor(public templateRef: TemplateRef<any>, result: ResultComponent<D>) {
    result.pendingRef = templateRef;
  }
}

@Directive({ selector: '[llFailure]' })
export class ResultFailureDirective<E, D> {
  public constructor(public templateRef: TemplateRef<any>, result: ResultComponent<D>) {
    result.failureRef = templateRef;
  }
}
