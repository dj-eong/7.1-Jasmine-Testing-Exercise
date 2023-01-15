describe('payments test', function () {

    beforeEach(function () {
        billAmtInput.value = '100';
        tipAmtInput.value = '20';
        allPayments.payment0 = createCurPayment();
    });

    it('should add created payment object to allPayments object', function () {
        allPayments = {};
        submitPaymentInfo();
        billAmtInput.value = '100';
        tipAmtInput.value = '20';
        let curPayment = createCurPayment();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments.payment1).toEqual(curPayment);
    });

    it('should return an object with key-value pairs of billAmt, tipAmt, and tipPercent on createCurPayment()', function () {
        expect(createCurPayment()).toEqual({ billAmt: '100', tipAmt: '20', tipPercent: 20 });
    });

    it('should return undefined with negative or empty inputs on createCurPayment()', function () {
        billAmtInput.value = '';
        expect(createCurPayment()).toBeUndefined();
        billAmtInput.value = '-1';
        expect(createCurPayment()).toBeUndefined();
    });

    it('should create a new payment table row and append inputs to table on appendPaymentTable()', function () {
        appendPaymentTable(allPayments.payment0);

        expect(paymentTbody.children[0].children[0].innerText).toEqual('$100');
        expect(paymentTbody.children[0].children[1].innerText).toEqual('$20');
        expect(paymentTbody.children[0].children[2].innerText).toEqual('20%');
    });

    it('should update summary table with calculated sum of all payment types', function () {
        updateSummary();

        expect(summaryTds[0].innerText).toEqual('$100');
        expect(summaryTds[1].innerText).toEqual('$20');
        expect(summaryTds[2].innerText).toEqual('20%');
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentTbody.innerHTML = '';
        for (let td of summaryTds) td.innerHTML = '';
    });
});