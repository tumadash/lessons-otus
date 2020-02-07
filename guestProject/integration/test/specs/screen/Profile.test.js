describe('RNDeviceFarm Device Test', () => {
    it('ToProfile', () => {
        $('~titleText').waitForDisplayed(10000);
        $('~toProfile').touchAction('tap');
        $('~profileTitle').waitForDisplayed(5000);
    });
});
