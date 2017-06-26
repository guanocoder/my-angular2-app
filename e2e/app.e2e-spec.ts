import { MyAngular2AppPage } from './app.po';

describe('my-angular2-app App', () => {
  let page: MyAngular2AppPage;

  beforeEach(() => {
    page = new MyAngular2AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
