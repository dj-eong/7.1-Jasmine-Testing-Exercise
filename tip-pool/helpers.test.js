describe('Helpers test', function () {
    beforeEach(function () {
        billAmtInput.value = '100';
        tipAmtInput.value = '20';
        allPayments.payment0 = createCurPayment();
    });

    it('should add up all of the payments of a specific type on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(100);
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
    });

    it('should convert bill and tip amount into tip percent on calculateTipPercent()', function () {
        expect(calculateTipPercent(100, 15)).toEqual(15);
        expect(calculateTipPercent(50, 20)).toEqual(40);
    });

    it('should add correct data to table row on appendTd()', function () {
        let newTr = document.createElement('tr');
        appendTd(newTr, allPayments.payment0.billAmt);
        appendTd(newTr, 'Alice');

        expect(newTr.children[0].innerText).toEqual('100');
        expect(newTr.children[1].innerText).toEqual('Alice');
        expect(newTr.children[0].tagName).toEqual('TD');
    });

    it('should add a td in the form of a delete button to table row', function () {
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);

        expect(newTr.lastElementChild.tagName).toEqual('TD');
        expect(newTr.lastElementChild.innerText).toEqual('X');
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
    });
})