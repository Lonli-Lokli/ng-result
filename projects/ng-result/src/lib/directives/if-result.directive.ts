import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Result } from '@lonli-lokli/ts-result';

import { initialIfContext, initialRefs, IfContext, updateView } from './common';

@Directive({ selector: '[ifSuccess]' })
export class IfSuccessDirective<TE = unknown, TD = unknown> {
  private _context: IfContext<TE | TD> = initialIfContext();

  private _refs = initialRefs();

  constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext<TE | TD>>) {
    this._refs.viewContainer = viewContainer;
    this._refs.thenTemplateRef = templateRef;
  }

  @Input()
  set ifSuccess(data: Result<TE, TD> | null) {
    if (data && data.isSuccess()) {
      data
        .mapSuccess(s => {
          this._context.ifTrue = true;
          this._context.$implicit = s;
        })
        .mapFailure(f => {
          this._context.ifTrue = false;
          this._context.$implicit = f;
        });
    } else {
      this._context.ifTrue = false;
    }

    updateView(this._context, this._refs);
  }

  @Input()
  set ifSuccessThen(templateRef: TemplateRef<IfContext<TE | TD>> | null) {
    this._refs.thenTemplateRef = templateRef;
    this._refs.thenViewRef = null;
    updateView(this._context, this._refs);
  }

  @Input()
  set ifSuccessElse(templateRef: TemplateRef<IfContext<TE | TD>> | null) {
    this._refs.elseTemplateRef = templateRef;
    this._refs.elseViewRef = null;
    updateView(this._context, this._refs);
  }

  static ngTemplateGuard_ifSuccess: 'binding';

  static ngTemplateContextGuard<TE, TD>(
    _dir: IfSuccessDirective<TE, TD>,
    _ctx: any
  ): _ctx is IfContext<Exclude<TD, false | 0 | '' | null | undefined>> {
    return true;
  }
}

@Directive({ selector: '[ifFailure]' })
export class IfFailureDirective<TE = unknown, TD = unknown> {
  private _context: IfContext<TE | TD> = initialIfContext();

  private _refs = initialRefs();

  constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext<TE | TD>>) {
    this._refs.viewContainer = viewContainer;
    this._refs.thenTemplateRef = templateRef;
  }

  @Input()
  set ifFailure(data: Result<TE, TD> | null) {
    if (data) {
      data
        .mapFailure(l => {
          this._context.ifTrue = true;
          this._context.$implicit = l;
        })
        .mapSuccess(r => {
          this._context.ifTrue = false;
          this._context.$implicit = r;
        });
    }
    updateView(this._context, this._refs);
  }

  @Input()
  set ifFailureThen(templateRef: TemplateRef<IfContext<TE | TD>> | null) {
    this._refs.thenTemplateRef = templateRef;
    this._refs.thenViewRef = null;
    updateView(this._context, this._refs);
  }

  @Input()
  set ifFailureElse(templateRef: TemplateRef<IfContext<TE | TD>> | null) {
    this._refs.elseTemplateRef = templateRef;
    this._refs.elseViewRef = null;
    updateView(this._context, this._refs);
  }

  static ngTemplateGuard_ifFailure: 'binding';

  static ngTemplateContextGuard<TE, TD>(
    _dir: IfFailureDirective<TE, TD>,
    _ctx: any
  ): _ctx is IfContext<Exclude<TE, false | 0 | '' | null | undefined>> {
    return true;
  }
}

@Directive({ selector: '[ifInitial]' })
export class IfInitialDirective<TE = unknown, TD = unknown> {
  private _context: IfContext<TE | TD> = initialIfContext();

  private _refs = initialRefs();

  constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext<TE | TD>>) {
    this._refs.viewContainer = viewContainer;
    this._refs.thenTemplateRef = templateRef;
  }

  @Input()
  set ifInitial(data: Result<TE, TD> | null) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this._context.$implicit = null!;
    if (data === null || data.isInitial()) {
      this._context.ifTrue = true;
    } else {
      this._context.ifTrue = false;
    }
    updateView(this._context, this._refs);
  }

  @Input()
  set ifInitialThen(templateRef: TemplateRef<IfContext<TE | TD>> | null) {
    this._refs.thenTemplateRef = templateRef;
    this._refs.thenViewRef = null;
    updateView(this._context, this._refs);
  }

  @Input()
  set ifInitialElse(templateRef: TemplateRef<IfContext<TE | TD>> | null) {
    this._refs.elseTemplateRef = templateRef;
    this._refs.elseViewRef = null;
    updateView(this._context, this._refs);
  }

  static ngTemplateGuard_ifInitial: 'binding';

  static ngTemplateContextGuard<TE, TD>(
    _dir: IfInitialDirective<TE, TD>,
    _ctx: any
  ): _ctx is IfContext<Exclude<TD, false | 0 | '' | null | undefined>> {
    return true;
  }
}

@Directive({ selector: '[ifPending]' })
export class IfPendingDirective<TE = unknown, TD = unknown> {
  private _context: IfContext<TE | TD> = initialIfContext();

  private _refs = initialRefs();

  constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<IfContext<TE | TD>>) {
    this._refs.viewContainer = viewContainer;
    this._refs.thenTemplateRef = templateRef;
  }

  @Input()
  set ifPending(data: Result<TE, TD> | null) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this._context.$implicit = null!;
    if (data !== null && data.isPending()) {
      this._context.ifTrue = true;
    } else {
      this._context.ifTrue = false;
    }
    updateView(this._context, this._refs);
  }

  @Input()
  set ifPendingThen(templateRef: TemplateRef<IfContext<TE | TD>> | null) {
    this._refs.thenTemplateRef = templateRef;
    this._refs.thenViewRef = null;
    updateView(this._context, this._refs);
  }

  @Input()
  set ifPendingElse(templateRef: TemplateRef<IfContext<TE | TD>> | null) {
    this._refs.elseTemplateRef = templateRef;
    this._refs.elseViewRef = null;
    updateView(this._context, this._refs);
  }

  static ngTemplateGuard_ifPending: 'binding';

  static ngTemplateContextGuard<TE, TD>(
    _dir: IfPendingDirective<TE, TD>,
    _ctx: any
  ): _ctx is IfContext<Exclude<TD, false | 0 | '' | null | undefined>> {
    return true;
  }
}
