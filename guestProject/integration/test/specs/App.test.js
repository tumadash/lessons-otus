/**
 * Our tests use Jasmine.
 */

describe('RNDeviceFarm Device Test', () => {
  it('Should have welcome text', () => {
    // We need to wait for the component to be visible.
    // The ~ is how we select on testId
    $('~titleText').waitForDisplayed(10000);
    const element = $("~titleText");
    expect(element.getText()).toBe('Гости')
  });

  it('Should be possible to enter login', () => {
    // We need to wait for the component to be visible.
    // The ~ is how we select on testId
    $('~welcomeText').waitForDisplayed(10000);
    const loginElement = $("~login");
    const enterElement = $("~enter");
    const text = 'my_name'
    loginElement.click()
    loginElement.addValue('my_name')
    enterElement.click();
    expect($("~enteredText").getText()).toBe(text)

  });
});
