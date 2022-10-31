import { Component, TemplateRef, Input } from '@angular/core';
import { Either } from '@sweet-monads/either';

@Component({
  selector: 'll-either',
  styleUrls: ['./either.component.scss'],
  templateUrl: './either.component.html',
})
export class EitherComponent<E, D> {
  @Input()
  either: Either<E, D> | null = null;

  @Input()
  dataTemplate: TemplateRef<D> | null = null;

  leftRef: TemplateRef<E> | null = null;
}
