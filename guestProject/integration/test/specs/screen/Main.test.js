const text1 = 'guest1';
const text2 = 'guest2';

describe('RNDeviceFarm Device Test', () => {
    it('Title text', () => {
        $('~titleText').waitForDisplayed(10000);
        const title = $("~titleText");
        expect(title.getText()).toBe('Гости')
    });

    it('Add guest', () => {
        $('~titleText').waitForDisplayed(10000);
        const inputGuest = $("~inputText");
        const addGuest = $("~addGuest");

        inputGuest.click();
        inputGuest.addValue('guest1');
        addGuest.click();
        addGuest.click();
        expect($("~guest1").getText()).toBe(text1)
    });

    it('Edit guest', () => {
        $('~titleText').waitForDisplayed(10000);
        const guestElement = $("~guest1");
        guestElement.touchAction("longPress");
        const guestInputElement = $("~guest1Input");
        guestInputElement.addValue('guest2');
        const title = $("~titleText");
        title.touchAction("tap");
        title.touchAction("tap");
        expect($("~guest1").getText()).toBe(text2)
    });

    it('Check guest', () => {
        $('~titleText').waitForDisplayed(10000);
        //проверим, что сейчас один гость
        expect($("~countGuest").getText()).toBe("Количество гостей: 1");
        const countGuest = $("~countGuest");

        // //перейдем на вкладку "С парой"
        // $('~titleText').touchAction("tap");
        // $('~guest1').waitForExist(undefined, true); //элемента нет
        //
        // //перейдем на вкладку "Без пары"
        // $('~titleText').touchAction("tap");
        // $('~guest1').waitForExist(); //элемент есть


        const guestCheckElement = $("~guest1Check");
        guestCheckElement.touchAction("tap");

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
        $('~titleText').waitForDisplayed(10000);
        //проверим, что сейчас один гость
        expect($("~countGuest").getText()).toBe("Количество гостей: 1");
        $('~guest1').waitForExist(); //элемент есть
        $('~guest1Delete').touchAction("tap");
        $('~guest1').waitForExist(undefined, true); //элемента нет
        //проверим, что сейчас нет гостей
        expect($("~countGuest").getText()).toBe("Количество гостей: 0");
    });
});
