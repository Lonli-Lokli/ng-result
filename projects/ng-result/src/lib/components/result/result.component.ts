import { Component, Input, TemplateRef } from '@angular/core';
import { Result } from '@lonli-lokli/ts-result';


@Component({
  selector: 'll-result',
  styleUrls: ['./result.component.scss'],
  templateUrl: './result.component.html'
})
export class ResultComponent<D> {

  @Input() data: Result<unknown, D> | null = null;

  @Input()
  initialText = 'There is no info to display.';

  public initialRef: TemplateRef<any> | null = null;
  public pendingRef: TemplateRef<any> | null = null;
  public failureRef: TemplateRef<any> | null = null;
}
