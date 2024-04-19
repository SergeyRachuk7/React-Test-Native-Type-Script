import React, { ChangeEvent, MouseEvent } from "react";


export const User = () => {

  const search = (event: MouseEvent<HTMLButtonElement>) => {
    alert(event.currentTarget.name);
  }

  const onNameChanged = () => {
    console.log("name changed");
  }

  const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("age changed" + event.target.value);
  }


  const focusLostHandler = () => {
    console.log("focus lost");
  }


  return <div>
    <textarea onChange={onNameChanged} onBlur={focusLostHandler}>
      Roma
    </textarea>
    <input onChange={onAgeChanged} />
    <button name="delete" onClick={search} >search</button>
  </div>
}



