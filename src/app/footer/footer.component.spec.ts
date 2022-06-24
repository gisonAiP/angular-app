import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let spectator: Spectator<FooterComponent>;
  const createComponent = createRoutingFactory({
    component: FooterComponent,
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
