import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [AppModule]
  });

  beforeEach(() => spectator = createComponent());

  it('should have a success class by default', () => {
    expect(spectator.query('button')).toHaveExactText('Start Successfull loading');
  });
});