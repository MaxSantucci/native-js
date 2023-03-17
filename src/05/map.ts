export type ManType = {
   name: string;
   age: number;
};

const people: Array<ManType> = [
   {name: 'Andrew Morecki', age: 33},
   {name: 'Lukash Farkovski', age: 24},
   {name: 'Ann Loren', age: 18},
];

const dimychTransformator = (man: ManType) => {
   return {
      stack: ['css, htnl', 'js', 'tdd', 'react'],
      firstName: man.name.split(' ')[0],
      lastName: man.name.split(' ')[1],
   };
};

const devs = [
   {
      stack: ['css, htnl', 'js', 'tdd', 'react'],
      firstName: 'Andrew',
      lastName: 'Morecki',
   },
   {
      stack: ['css, htnl', 'js', 'tdd', 'react'],
      firstName: 'Lukash',
      lastName: 'Farkovski',
   },
   {
      stack: ['css, htnl', 'js', 'tdd', 'react'],
      firstName: 'Ann',
      lastName: 'Loren',
   },
];

const dev2 = [
   dimychTransformator(people[0]),
   dimychTransformator(people[1]),
   dimychTransformator(people[2]),
];

const dev3 = people.map(dimychTransformator)
const dev4 = people.map(man => ({
   stack: ['css, htnl', 'js', 'tdd', 'react'],
   firstName: man.name.split(' ')[0],
   lastName: man.name.split(' ')[1],
}))

const messages = people.map(man => `hello, ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)