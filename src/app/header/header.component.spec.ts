import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let spectator: Spectator<HeaderComponent>;
  const createComponent = createRoutingFactory({
    component: HeaderComponent,
    shallow: true,
    providers: [],
    declarations: []
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.detectChanges();
  });

  it('should validate snapshot', () => {
    expect(spectator.fixture).toMatchSnapshot();
  });
});

