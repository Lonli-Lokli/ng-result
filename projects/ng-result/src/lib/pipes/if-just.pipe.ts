import { Pipe, PipeTransform } from '@angular/core';
import { Maybe } from '@sweet-monads/maybe';

@Pipe({ name: 'ifJust' })
export class IfJustPipe implements PipeTransform {
  transform<T>(input: Maybe<T> | undefined, defaultValue: any = '') {
    return input && input.isJust() ? input.value : defaultValue;
  }
}
