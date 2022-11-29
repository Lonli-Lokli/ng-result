import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { isMaybe, Maybe } from '@sweet-monads/maybe';

import { initialIfContext, initialRefs, IfContext, updateView, assertTemplate } from './common';

@Directive({ selector: '[ifSome]' })
export class IfSomeDirective<T = unknown> {
  private context: IfContext<T> = initialIfContext();

  private refs = initialRefs();

  constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext<T>>) {
    this.refs.viewContainer = viewContainer;
    this.refs.thenTemplateRef = templateRef;
  }

  @Input()
  set ifSome(option: Maybe<T> | null | undefined) {
    testIsAMaybe(option, 'ifSome');
    if (option && option.isJust()) {
      this.context.ifTrue = true;
      this.context.$implicit = option.value;
    } else {
      this.context.ifTrue = false;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.context.$implicit = null!;
    }
    updateView(this.context, this.refs);
  }

  @Input()
  set ifSomeThen(templateRef: TemplateRef<IfContext<T>> | null | undefined) {
    assertTemplate('ifSomeThen', templateRef);
    this.refs.thenTemplateRef = templateRef ?? null;
    this.refs.thenViewRef = null;
    updateView(this.context, this.refs);
  }

  @Input()
  set ifSomeElse(templateRef: TemplateRef<IfContext<T>> | null | undefined) {
    assertTemplate('ifSomeElse', templateRef);
    this.refs.elseTemplateRef = templateRef ?? null;
    this.refs.elseViewRef = null;
    updateView(this.context, this.refs);
  }

  static ngTemplateGuard_ifSome: 'binding';

  static ngTemplateContextGuard<T>(
    _dir: IfSomeDirective<T>,
    _ctx: any
  ): _ctx is IfContext<Exclude<T, false | 0 | '' | null | undefined>> {
    return true;
  }
}

@Directive({ selector: '[ifNone]' })
export class IfNoneDirective<T = unknown> {
  private context: IfContext<T> = initialIfContext();

  private refs = initialRefs();

  constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext<T>>) {
    this.refs.viewContainer = viewContainer;
    this.refs.thenTemplateRef = templateRef;
  }

  @Input()
  set ifNone(option: Maybe<T> | null | undefined) {
    testIsAMaybe(option, 'ifNone');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.context.$implicit = null!;
    if (option === null || option === undefined || option.isNone()) {
      this.context.ifTrue = true;
    } else {
      this.context.ifTrue = false;
    }
    updateView(this.context, this.refs);
  }

  @Input()
  set ifNoneThen(templateRef: TemplateRef<IfContext<T>> | null | undefined) {
    assertTemplate('ifNoneThen', templateRef);
    this.refs.thenTemplateRef = templateRef ?? null;
    this.refs.thenViewRef = null;
    updateView(this.context, this.refs);
  }

  @Input()
  set ifNoneElse(templateRef: TemplateRef<IfContext<T>> | null | undefined) {
    assertTemplate('ifNoneElse', templateRef);
    this.refs.elseTemplateRef = templateRef ?? null;
    this.refs.elseViewRef = null;
    updateView(this.context, this.refs);
  }

  static ngTemplateGuard_ifNone: 'binding';

  static ngTemplateContextGuard<T>(
    _dir: IfNoneDirective<T>,
    _ctx: any
  ): _ctx is IfContext<Exclude<T, false | 0 | '' | null | undefined>> {
    return true;
  }
}

function testIsAMaybe(item: unknown, directiveName: string) {
  // null should be allowe as async pipe outputs first value as null
  const isAMaybe = item === null || item === undefined || isMaybe(item);
  if (!isAMaybe) {
      throw new Error(`Error in ${directiveName} directive. ${item} is not a Maybe!`);
  }
}
