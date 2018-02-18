import { AppPage } from './app.po';
import { by, browser, element } from 'protractor';

describe('nbapp App', () => {
  let page: AppPage;
  let email = element(by.id('email'));
  let pass = element(by.id('password'));
  let submit = element(by.id('submit'));
  let loginLink = element(by.css('[routerLink = "/login"]'));
  let logoutButton = element(by.css('button#logout'));

  beforeEach(() => {
    page = new AppPage();
  });

  it('should login by click on admin link and logout', () => {
    page.navigateTo();
    element(by.css('[routerLink = "/admin"]')).click();  
    email.sendKeys('me@example.com');
    pass.sendKeys('123');  
    submit.click();
    expect( logoutButton.getText() ).toContain('Logout');
    logoutButton.click();
    expect( loginLink.getText() ).toContain('Login');            
  });

  it('should login directly by click on login link and logout', () => {
    page.navigateTo();
    element(by.css('[routerLink = "/login"]')).click();
    email.sendKeys('me@example.com');
    pass.sendKeys('123');  
    submit.click();
    expect( logoutButton.getText() ).toContain('Logout');
    logoutButton.click();
    expect( loginLink.getText() ).toContain('Login');              
  });
});
