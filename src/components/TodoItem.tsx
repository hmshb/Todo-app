import React from "react"
import CheckBoxIcon from "@mui/icons-material/CheckBox"
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"

type TodoItemProps = {
  Id: string
  text: string
  Delete: any
}

export function TodoItem({ text, Delete, Id }: TodoItemProps): JSX.Element {
  const [completed, setCompleted] = React.useState(false)
  return (
    <div className="bg-white max-w-[520px] mx-auto my-3 py-2 rounded flex justify-between px-2">
      <div className="flex items-center gap-2">
        <button onClick={() => setCompleted((prevValue) => !prevValue)}>
          {completed ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        </button>
        <p
          className={`text-xl ${
            completed
              ? "line-through decoration-black decoration-2 text-[rgb(201,190,180)]"
              : ""
          }`}
        >
          {text}
        </p>
      </div>
      <button onClick={() => Delete(Id)}>
        <DeleteOutlineIcon className="text-3xl hover:text-red-400" />
      </button>
    </div>
  )
}
