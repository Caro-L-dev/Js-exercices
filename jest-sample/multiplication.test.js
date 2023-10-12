// R -- Rouge : Test qui échoue
// V -- Vert : Test Ok
// R -- Refactoriser

import {multiplication} from "./multiplication";

test('multiplication of two numbers works', () => {
  expect(multiplication(2,3).toBe(6));
  expect(multiplication(2,3).toBeA(number));
  expect(multiplication(2,3).toBeEqual(6));
  expect(multiplication("toto","prout").toEqual(Error("Number expected as parameter")));
});
