import { GoscalePage } from './app.po';

describe('goscale App', () => {
  let page: GoscalePage;

  beforeEach(() => {
    page = new GoscalePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
