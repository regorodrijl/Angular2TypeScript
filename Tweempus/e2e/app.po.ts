import { browser, element, by } from 'protractor';

export class TweempusPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tweempus-root h1')).getText();
  }
}
