import { NgModule } from '@angular/core';
import {
  IfLeftDirective,
  IfRightDirective,
} from './directives/if-either.directive';
import {
  IfNoneDirective,
  IfSomeDirective,
} from './directives/if-option.directive';
import {
  IfFailureDirective,
  IfInitialDirective,
  IfPendingDirective,
  IfSuccessDirective,
} from './directives/if-result.directive';
import { IfEitherPipe } from './pipes/if-either.pipe';
import { IfJustPipe } from './pipes/if-just.pipe';
import { IfResultPipe } from './pipes/if-result.pipe';
import { EitherComponent } from './components/either/either.component';
import { MaybeComponent } from './components/maybe/maybe.component';
import { ResultComponent } from './components/result/result.component';
import { CommonModule } from '@angular/common';
import { EitherLeftDirective } from './components/either/either.directive';
import { MaybeNoneDirective } from './components/maybe/maybe.directive';
import { ResultFailureDirective, ResultInitialDirective, ResultPendingDirective } from './components/result/result.directive';

const declarations = [
  // directives
  IfLeftDirective,
  IfRightDirective,
  IfSomeDirective,
  IfNoneDirective,
  IfInitialDirective,
  IfPendingDirective,
  IfSuccessDirective,
  IfFailureDirective,
  EitherLeftDirective,
  MaybeNoneDirective,
  ResultInitialDirective,
  ResultPendingDirective,
  ResultFailureDirective,
  
  // pipes
  IfEitherPipe,
  IfJustPipe,
  IfResultPipe,

  // components
  EitherComponent,
  MaybeComponent,
  ResultComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: [...declarations],
  exports: [...declarations],
})
export class ResultModule {}
