describe('pow', function() {
  describe('calculates power of 3 for x', function() {
    function makeTest(x) {
      const expected = x * x * x;
      it(`power of 3 for ${x} equals ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }
  
    for (let i = 0; i <= 5; i++) {
      makeTest(i);
    }
  })

  it('returns NaN for negative n', function() {
    assert.isNaN(pow(2, -1));
  })

  it('returns NaN for decimal n', function() {
    assert.isNaN(pow(2, 1.5));
  })
});