import { browser, element, by } from 'protractor';

export class Ng2SimpleGlobalExamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
