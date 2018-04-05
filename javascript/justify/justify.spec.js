const Text = require('./justify')

describe('text justification', function () {
    it('1st test', function () {
      let t1 = new Text("This is an example of text justification.")
      expect(t1.justify(16)).toMatch("This    is    an\nexample  of text\njustification.");
    });
})