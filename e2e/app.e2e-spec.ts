import { AppPage } from './app.po';
import { by, browser, element } from 'protractor';

describe('nbapp App', () => {

  let email = element(by.id('email'));
  let pass = element(by.id('password'));
  let submit = element(by.id('submit'));
  let loginLink = element(by.css('[routerLink = "/login"]'));
  let logoutButton = element(by.buttonText('Logout'));

  beforeEach(() => {
    browser.get('/');
  });
  
  it('should login directly by click on login link and logout', () => {
    element(by.css('[routerLink = "/login"]')).click();
    browser.sleep(3000);  
    email.sendKeys('me@example.com'); 
    pass.sendKeys('123');
    submit.click();
    browser.sleep(3000);   
    logoutButton.click();
    expect( loginLink.getText() ).toContain('Login');     
    browser.sleep(13000);          
  });

  it('should login by click on admin link and logout', () => { 
    element(by.css('[routerLink = "/admin"]')).click();
    browser.sleep(3000);    
    email.sendKeys('me@example.com');
    pass.sendKeys('123'); 
    submit.click();  
    browser.sleep(3000);   
    logoutButton.click();
    expect( loginLink.getText() ).toContain('Login');            
  });
});
