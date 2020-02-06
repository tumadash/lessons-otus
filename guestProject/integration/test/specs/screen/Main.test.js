const text1 = 'guest1';
const text2 = 'guest2';
let guestName = text1;
describe('RNDeviceFarm Device Test', () => {
    it('Title text', () => {
        $('~titleText').waitForDisplayed(10000);
        const title = $("~titleText");
        expect(title.getText()).toBe('Гости')
    });

    it('Add guest', () => {
        const inputGuest = $("~inputText");
        const addGuest = $("~addGuest");

        inputGuest.click();
        inputGuest.addValue('guest1');
        addGuest.click();
        addGuest.click();
        expect($('~' + guestName).getText()).toBe(text1)
    });

    it('Edit guest', () => {
        const guestElement = $("~guest1");
        guestElement.touchAction("longPress");
        const guestInputElement = $("~guest1Input");
        guestInputElement.click();
        guestInputElement.addValue('guest2');
        guestName = 'guest2';
        const title = $("~titleText");
        title.touchAction("tap");
        title.touchAction("tap");
        expect($('~' + guestName).getText()).toBe(text2)
    });

    it('Check guest', () => {
        //проверим, что сейчас один гость
        expect($("~countGuest").getText()).toBe("Количество гостей: 1");

        // //перейдем на вкладку "С парой"
        // $('~titleText').touchAction("tap");
        // $('~guest1').waitForExist(undefined, true); //элемента нет
        //
        // //перейдем на вкладку "Без пары"
        // $('~titleText').touchAction("tap");
        // $('~guest1').waitForExist(); //элемент есть

        $(`~${guestName}Check`).touchAction("tap");
        $(`~${guestName}Check`).waitForClickable({ timeout: 3000 });


        expect($("~countGuest").getText()).toBe("Количество гостей: 2");

        // //перейдем на вкладку "Без пары"
        // $('~').touchAction("tap");
        // $('~guest1').waitForExist(undefined, true); //элемента нет
        //
        // //перейдем на вкладку "С парой"
        // $('~').touchAction("tap");
        // $('~guest1').waitForExist(); //элемент есть
    });

    it('Delete guest', () => {
        //проверим, что сейчас один гость
        expect($("~countGuest").getText()).toBe("Количество гостей: 2");
        $(`~${guestName}`).waitForExist(); //элемент есть
        $(`~${guestName}Delete`).touchAction("tap");
        $(`~${guestName}`).waitForExist(undefined, true); //элемента нет
        //проверим, что сейчас нет гостей
        expect($("~countGuest").getText()).toBe("Количество гостей: 0");
    });
});
