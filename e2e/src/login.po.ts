import { browser, by, element } from 'protractor';


export class LoginPage {
  private IDS = {
    EMAIL: 'email',
    PASSWORD: 'password',
    BUTTON: 'login-button',
  };

  private xpathLocator(id: string) {
    return `//*[contains(@data-test, "${id}")]`;
  }

  login(mail: string, password: string): LoginPage {
    browser.get('http://localhost:4200/#/login');
    element(by.xpath(this.xpathLocator(this.IDS.EMAIL))).sendKeys(mail);
    element(by.xpath(this.xpathLocator(this.IDS.PASSWORD))).sendKeys(password);
    element(by.xpath(this.xpathLocator(this.IDS.BUTTON))).click();
    return this;
  }
}
