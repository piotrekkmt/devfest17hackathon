import { Devfest17hackathonPage } from './app.po';

describe('devfest17hackathon App', () => {
  let page: Devfest17hackathonPage;

  beforeEach(() => {
    page = new Devfest17hackathonPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
