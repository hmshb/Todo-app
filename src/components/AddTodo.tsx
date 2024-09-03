import React from "react"
import uuid from "react-uuid"

export default function AddTodo(props: any): JSX.Element {
  const [task, setTask] = React.useState({
    id: "",
    text: "",
  })

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    setTask((prevValue) => {
      return {
        ...prevValue,
        text: value,
      }
    })
  }

  function handleClick(e: React.FormEvent<HTMLFormElement>) {
    setTask((prevValue) => {
      return {
        ...prevValue,
        id: uuid(),
      }
    })
    e.preventDefault()
  }

  React.useEffect(() => {
    props.onAdd(task)
    return () => {
      setTask({
        id: "",
        text: "",
      })
    }
  }, [task.id])

  return (
    <div className="max-w-[500px] mx-auto">
      <form
        className="py-8 flex items-center justify-center"
        onSubmit={(e) => handleClick(e)}
      >
        <input
          value={task.text}
          onChange={(e) => handleChange(e)}
          placeholder="Add a task"
          className="p-1 pl-2 border-[#FFFEF2] border border-b-2 border-b-black w-full text-xl bg-[#FFFEF2] focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-[#D6E4E5] py-2 px-4 rounded text-lg ml-4"
        >
          Add
        </button>
      </form>
    </div>
  )
}
