export type StudentType = {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
    address: {
        streetTitle: string;
        city: {
            title: string;
            counrtyTitle: string;
        }
    }
    technologies: Array<TechType>
}

interface TechType {
    id: number;
    title: string;
}

export const student: StudentType = {
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