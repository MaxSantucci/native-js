import React, {ChangeEvent, MouseEvent} from 'react'

// export const callback = (): number => {
//    // alert('hey')
//    return 12
// }
// window.setTimeout(callback, 1000)

export const User = () => {

   const deleteUserHandler = (event: MouseEvent<HTMLButtonElement>) => {
      alert(event.currentTarget.name);
   }

   const onNameChangeHandler = () => {
      console.log('name change')
   }

   const onAgeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      console.log('age changed: ' + event.currentTarget.value)
   }

   const focusLostHandler = () => {
      console.log('focus lost')
   }

   return (
      <div>
         <textarea
            onChange={onNameChangeHandler}
            onBlur={focusLostHandler}
         >
            Georgiy
         </textarea>
         <input onChange={onAgeChangeHandler}/>
         <button name="delete" onClick={deleteUserHandler}>Delete</button>
         <button name="save" onClick={deleteUserHandler}>Change</button>
      </div>
   )
}