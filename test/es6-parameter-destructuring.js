var expect = require('chai').expect;

describe('es6 parameter destructuring', function() {
  it("With ES6 & a function parameter's default value", () => {

    function drawES6Chart({size : size, cords : cords, radius: radius}
        = {size : 'big', cords : {x : 0, y : 0}, radius : 25 }
    /* // TODO: Provide the parameter desctructuring to satisfy all assertions below  */) {
      console.log(size, cords, radius);
      return [size, cords, radius];
    }
    let actual = drawES6Chart();
    expect(actual).deep.equal(['big', { x: 0, y: 0 }, 25]);

    actual = drawES6Chart({
      size: 'big',
      cords: { x: 18, y: 30 },
      radius: 30
    });
    expect(actual).deep.equal(['big', { x: 18, y: 30 }, 30]);

  });
});
