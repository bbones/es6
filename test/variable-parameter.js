var expect = require('chai').expect;

describe('let, const', ()=> {
  describe('let...', () => {

    function iterator(bool) {
      if (bool) {
        let name = 'Hackages';
      }
      return name;
    }



    it('what do you expect???', () => {
      expect(iterator.bind()).to.throw(ReferenceError);
    });

  });

  describe('const...', () => {
    function iterator(bool) {
      if (bool) {
        const name = 'we';
      }
      return name;
    }

    it('what do you expect???', () => {
      expect(iterator.bind()).to.throw(ReferenceError);
    });
  });
});
