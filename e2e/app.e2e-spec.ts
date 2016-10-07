import { Ng2SimpleGlobalExamplePage } from './app.po';

describe('ng2-simple-global-example App', function() {
  let page: Ng2SimpleGlobalExamplePage;

  beforeEach(() => {
    page = new Ng2SimpleGlobalExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
