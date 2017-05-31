import { DataCampPage } from './app.po';

describe('data-camp App', () => {
  let page: DataCampPage;

  beforeEach(() => {
    page = new DataCampPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
