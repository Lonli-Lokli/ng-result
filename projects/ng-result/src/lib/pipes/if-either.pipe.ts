import { Pipe, PipeTransform } from '@angular/core';
import { Either } from '@sweet-monads/either';


@Pipe({
  name: 'ifEither'
})
export class IfEitherPipe implements PipeTransform {
  transform<T>(input: Either<unknown, T> | null | undefined, defaultValue: any): T {
    return input && input.isRight() ? input.value : defaultValue;
  }
}
