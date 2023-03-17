import {ManType} from "./Destructuring";

let props: ManType;

beforeEach(() => {
   props = {
      name: 'Petr',
      age: 32,
      lessons: [
         {title: "1"},
         {title: "2"},
         {title: "3", name: 'react'},
      ],
      address: {
         street: {
            title: "Dedala street"
         }
      }
   }
})

test('', () => {
   // const age = props.age;
   // const lessons = props.lessons;

   const {age, lessons} = props;
   const {title} = props.address.street;


   expect(age).toBe(32)
   expect(lessons.length).toBe(3)

   expect(title).toBe("Dedala street")
})

test(' ', () => {
   const l1 = props.lessons[0]
   const l2 = props.lessons[1]

   const [, ls2, ...restLessons] = props.lessons;

   expect(l1.title).toBe('1')
   expect(l2.title).toBe('2')

   expect(ls2.title).toBe('2')

   expect(restLessons.length).toBe(1)
   expect(restLessons[0].title).toBe("3")

   expect(restLessons[0].name).toBe('react')

   expect(restLessons[0]).toStrictEqual({title: "3", name: 'react'})
})