import React, {useState} from 'react';

export type ManType = {
   name: string,
   age: number,
   lessons: Array<{ title: string, name?: string }>,
   address: {
      street: {
         title: string
      }
   }
}

type PropsType = {
   title: string;
   man: ManType;
   food: Array<string>;
   car: { model: string }
}

export const Destructuring: React.FC<PropsType> = ({title, man, ...props}) => {

   const [message, setMessage] = useState('')

   return (
      <div>
         <h1>{title}</h1>
         <hr/>
         <div>
            {props.car.model}
         </div>
         <div>
            {man.name}
         </div>
      </div>
   );
};
