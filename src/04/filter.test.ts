import {coursesType} from "./filter";


test('should take courses chipper 160', () => {
   const courses = [
      {title: 'css', price: 140},
      {title: 'react', price: 250},
      {title: 'js', price: 150},
   ]

   const chipCourses = courses.filter(course => course.price < 160);

   expect(chipCourses.length).toBe(2)
   expect(chipCourses[0].title).toBe("css")
   expect(chipCourses[1].title).toBe("js")
})

test('get only completed tasks', () => {
   const tasks = [
      {id: 1, title: 'bread', isDone: false},
      {id: 2, title: 'milk', isDone: true},
      {id: 3, title: 'salt', isDone: false},
      {id: 4, title: 'sugar', isDone: true},
   ]

   const complitedTask = tasks.filter(function (task) {
      return task.isDone
   })

   expect(complitedTask.length).toBe(2)
   expect(complitedTask[0].id).toBe(2)
   expect(complitedTask[1].id).toBe(4)
})
