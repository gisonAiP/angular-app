import { SearchComponent } from './search.component';
import { createRoutingFactory } from '@ngneat/spectator';
import { Spectator } from '@ngneat/spectator/jest';


describe('SearchComponent', () => {
  let spectator: Spectator<SearchComponent>;
  const createComponent = createRoutingFactory({
    component: SearchComponent,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should validate snapshot', () => {
    expect(spectator.fixture).toMatchSnapshot();
  });

  it('should display button', () => {
    expect(spectator.query('[data-test="search-button"]').textContent).toEqual('Search');
  });
});

