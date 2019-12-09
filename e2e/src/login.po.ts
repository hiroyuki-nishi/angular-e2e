import { browser, by, element } from 'protractor';


export class LoginPage {
  private TEST_IDS = {
    EMAIL: 'email',
    PASSWORD: 'password',
    BUTTON: 'login-button',
  };

  private xpathLocator(id: string) {
    return `//*[contains(@data-test, "${id}")]`;
  }

  login(mail: string, password: string): LoginPage {
    browser.get('http://localhost:4200/#/login');
    element(by.xpath(this.xpathLocator(this.TEST_IDS.EMAIL))).sendKeys(mail);
    element(by.xpath(this.xpathLocator(this.TEST_IDS.PASSWORD))).sendKeys(password);
    element(by.xpath(this.xpathLocator(this.TEST_IDS.BUTTON))).click();
    return this;
  }
}
