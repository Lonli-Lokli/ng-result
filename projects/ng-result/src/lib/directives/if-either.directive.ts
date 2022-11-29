import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { Either, isEither } from '@sweet-monads/either';
import { initialRefs, initialIfContext, IfContext, updateView, assertTemplate } from './common';

@Directive({ selector: '[ifRight]' })
export class IfRightDirective<TE = unknown, TD = unknown> {
  private _context: IfContext<TE | TD> = initialIfContext();

  private _refs = initialRefs();

  constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext<TE | TD>>) {
    this._refs.viewContainer = viewContainer;
    this._refs.thenTemplateRef = templateRef;
  }

  @Input()
  set ifRight(either: Either<TE, TD> | null) {
    testIsAnEither(either, 'ifRight');
    if (either) {
      either
        .mapLeft(l => {
          this._context.ifTrue = false;
          this._context.$implicit = l;
        })
        .mapRight(r => {
          this._context.ifTrue = true;
          this._context.$implicit = r;
        });
    }
    updateView(this._context, this._refs);
  }

  @Input()
  set ifRightThen(templateRef: TemplateRef<IfContext<TE | TD>> | null | undefined) {
    assertTemplate('ifRightThen', templateRef);
    this._refs.thenTemplateRef = templateRef ?? null;
    this._refs.thenViewRef = null;
    updateView(this._context, this._refs);
  }

  @Input()
  set ifRightElse(templateRef: TemplateRef<IfContext<TE | TD>> | null | undefined) {
    assertTemplate('ifRightElse', templateRef);
    this._refs.elseTemplateRef = templateRef ?? null;
    this._refs.elseViewRef = null;
    updateView(this._context, this._refs);
  }

  static ngTemplateGuard_ifRight: 'binding';

  static ngTemplateContextGuard<TE, TD>(
    _dir: IfRightDirective<TE, TD>,
    _ctx: any
  ): _ctx is IfContext<Exclude<TD, false | 0 | '' | null | undefined>> {
    return true;
  }
}

@Directive({ selector: '[ifLeft]' })
export class IfLeftDirective<TE = unknown, TD = unknown> {
  private context = initialIfContext();

  private refs = initialRefs();

  constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext<TE | TD>>) {
    this.refs.viewContainer = viewContainer;
    this.refs.thenTemplateRef = templateRef;
  }

  @Input()
  set ifLeft(either: Either<TE, TD> | null | undefined) {
    testIsAnEither(either, 'ifRight');
    if (either) {
      either
        .mapLeft(l => {
          this.context.ifTrue = true;
          this.context.$implicit = l;
        })
        .mapRight(r => {
          this.context.ifTrue = false;
          this.context.$implicit = r;
        });
    }
    updateView(this.context, this.refs);
  }

  @Input()
  set ifLeftThen(templateRef: TemplateRef<IfContext<TE | TD>> | null | undefined) {
    assertTemplate('ifLeftThen', templateRef);
    this.refs.thenTemplateRef = templateRef ?? null;
    this.refs.thenViewRef = null;
    updateView(this.context, this.refs);
  }

  @Input()
  set ifLeftElse(templateRef: TemplateRef<IfContext<TE | TD>> | null | undefined) {
    assertTemplate('ifLeftElse', templateRef);
    this.refs.elseTemplateRef = templateRef ?? null;
    this.refs.elseViewRef = null;
    updateView(this.context, this.refs);
  }

  static ngTemplateGuard_ifLeft: 'binding';

  static ngTemplateContextGuard<TE, TD>(_dir: IfLeftDirective<TE, TD>, _ctx: any): _ctx is IfContext<TE> {
    return true;
  }
}

function testIsAnEither(item: unknown, directiveName: string) {
  // null should be allowe as async pipe outputs first value as null
  const isAnEither = item === null || item === undefined || isEither(item);
  if (!isAnEither) {
      throw new Error(`Error in ${directiveName} directive. ${item} is not an Either!`);
  }
}
