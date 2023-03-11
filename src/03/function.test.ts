import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./function";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: 'Maksym',
        age: 32,
        isActive: false,
        address: {
            streetTitle: 'Gwareska 2',
            city: {
                title: "Wroclaw",
                counrtyTitle: "Poland"
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTMl'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'React'
            }
        ]
    }
})

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, "JS");

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.technologies.length).toBe(true);
})

test('does student live in city?', () => {
    expect(student.isActive).toBe(false);

     let cityLive = doesStudentLiveIn(student, "Lviv");
     let cityLive2 = doesStudentLiveIn(student, "Rovno");

    expect(cityLive).toBe(false);
    expect(cityLive2).toBe(false);
})