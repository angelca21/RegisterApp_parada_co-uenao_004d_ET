import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }

  getButtonIniciarse() {
    return element(by.deepCss('app-root ion-button')).getTagName();
  }

  getMensajeInicioProfe(){
    return element(by.css('app-root ion-content')).getText();
  }

  getIntroducciontexto() {
    return element(by.css('app-root ion-content')).getText();
  }

  getIntroduccion(){
    return element(by.css('app-root ion-content')).getText();
  }

  getEscanear(){
    return element(by.css('app-root ion-content')).getText();
  }



}
