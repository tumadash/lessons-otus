const text1 = 'guest1';
let guestName = text1;
describe('Run About Test', () => {
    beforeAll(() => {
        $('~titleText').waitForDisplayed(10000);
        const inputGuest = $("~inputText");
        const addGuest = $("~addGuest");

        inputGuest.click();
        inputGuest.addValue(text1);
        addGuest.click();
        addGuest.click();
    });
    it('About guest ', () => {
        $('~titleText').waitForDisplayed(10000);
        $(`~${guestName}Edit`).touchAction("tap");
        expect($('~aboutGuest').getText()).toBe(`Гость: ${text1}`)
    });
    it('Set comment', () => {
        //добавили комментарий
        $(`~commentField`).touchAction("tap");
        $(`~commentField`).addValue('comment');
        //Назад
        $(`~backButton`).touchAction("tap");
        $(`~backButton`).touchAction("tap");
        //опять вернулись
        $(`~${guestName}Edit`).touchAction("tap");
        expect($('~commentField').getText()).toBe(`comment`); //коммент на месте
    });

});
