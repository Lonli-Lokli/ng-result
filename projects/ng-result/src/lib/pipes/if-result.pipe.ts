import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '@lonli-lokli/ts-result';

@Pipe({
  name: 'ifResult',
})
export class IfResultPipe implements PipeTransform {
  transform<T>(input: Result<unknown, T> | null | undefined): T | undefined {
    return input && input.isSuccess() ? input.value : undefined;
  }
}
