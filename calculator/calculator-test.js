describe('calculateMonthlyPayment tests', function () {
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({ amount: 10000, years: 3, rate: 15 })).toBe('346.65');
    expect(calculateMonthlyPayment({ amount: 5000, years: 10, rate: 10 })).toBe('66.08');
  });

  it("should return a result with 2 decimal places", function () {
    expect(calculateMonthlyPayment({ amount: 1000, years: 40, rate: 99 })).toBe('82.50');
  });
});

