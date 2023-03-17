// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
import {ManType} from "./map";

let people: Array<ManType>;

beforeEach(() => {
   people = [
      {name: 'Andrew Morecki', age: 33},
      {name: 'Lukash Farkovski', age: 24},
      {name: 'Ann Loren', age: 18},
   ];
})

test('should get array of greeteng message', () => {
   const messages = people.map(man => `hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`);

   expect(messages.length).toBe(3);
   expect(messages[0]).toBe('hello Andrew. Welcome to IT-Incubator')
   expect(messages[1]).toBe('hello Lukash. Welcome to IT-Incubator')
   expect(messages[2]).toBe('hello Ann. Welcome to IT-Incubator')
})

