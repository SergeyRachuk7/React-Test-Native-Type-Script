import React, { useState } from "react"

export type ManType = {
  name: "Serega",
  age: number,
  lessons: Array<{ title: string }>
  address: {
    street: {
      title: "Independence street"
    }
  }
}


type PropsType = {
  title: string
  man: ManType
  food: Array<string>
  car: { model: string }

}

export const ManComponent: React.FC<PropsType> = ({ title, man, ...props }) => {
  // const { title, man, ...restProps } = props;

  const [massege, setMassege] = useState<string>("hello")



  return <div>
    <h1>{title}</h1>
    <hr />
    <div>
      {props.car.model}
    </div>
    <div>
      {man.name}
    </div>

  </div>
}