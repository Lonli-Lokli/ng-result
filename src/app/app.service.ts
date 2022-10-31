import { Injectable } from '@angular/core';
import {
  failure,
  initial,
  pending,
  success,
} from '@lonli-lokli/ts-result';
import { BehaviorSubject, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable()
export class AppService {
  private dataSubject = new BehaviorSubject(initial<Error, string>());
  public data = this.dataSubject.asObservable();

  public ok() {
    of(success<Error, string>('OK'))
      .pipe(
        tap(() => this.dataSubject.next(pending())),
        delay(3_000)
      )
      .subscribe((data) => this.dataSubject.next(data));
  }

  public notOk() {
    of(failure<Error, string>(new Error('Fail to execute')))
      .pipe(
        tap(() => this.dataSubject.next(pending())),
        delay(3_000)
      )
      .subscribe((data) => this.dataSubject.next(data));
  }
}
