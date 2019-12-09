import { LoginPage } from './login.po';
import { browser } from 'protractor';


describe('ログインできること', () => {
  const page: LoginPage = new LoginPage();

  it('login', async () => {
    page.login('example@com', 'xxxxx');
    browser.getCurrentUrl().then(url => expect(url).toEqual('http://localhost:4200/#/home'));
  });
});

