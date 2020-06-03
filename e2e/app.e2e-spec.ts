import { InterceptorDemoPage } from './app.po';

describe('interceptor-demo App', () => {
  let page: InterceptorDemoPage;

  beforeEach(() => {
    page = new InterceptorDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
