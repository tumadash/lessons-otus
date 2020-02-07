describe('RNDeviceFarm Device Test', () => {
    it('To Profile', () => {
        $('~titleText').waitForDisplayed(10000);
        $('~toProfile').touchAction('tap');
        $('~profileTitle').waitForDisplayed(5000);
    });
    it('Set name', () => {
        //добавили имя пользователя
        $(`~nameInput`).touchAction("tap");
        $(`~nameInput`).addValue('Username');
        //Назад
        $(`~backButton`).touchAction("tap");
        $(`~backButton`).touchAction("tap");
        //опять вернулись
        $(`~toProfile`).touchAction("tap");
        expect($('~nameInput').getText()).toBe(`Username`); //имя пользователя на месте
    });
});
