import { AppPage } from './app.po';

fdescribe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  fit('should display welcome message', () => {
    page.navigateTo();
    // expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
