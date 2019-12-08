import {LoginPage} from './login.po';
import {browser} from 'protractor';

describe('workspace-project App', () => {
  const page: LoginPage = new LoginPage();

  beforeEach(() => {
  });

  it('login', async () => {
    page.login('example@com', 'xxxxx');
    browser.sleep(1000);
    browser.getCurrentUrl().then(url => expect(url).toEqual('http://localhost:4200/#/home'));
  });
});

