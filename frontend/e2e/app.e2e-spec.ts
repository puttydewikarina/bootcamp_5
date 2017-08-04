import { FEProject6Page } from './app.po';

describe('feproject6 App', () => {
  let page: FEProject6Page;

  beforeEach(() => {
    page = new FEProject6Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
