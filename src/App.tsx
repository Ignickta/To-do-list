import { useState } from "react"
import { Header } from "./componentes/Header"
import { Tasks } from "./componentes/Tasks/Index"

export interface ITask {
    id: string;
    title: string;
    isCompleted: boolean;
}

function App() {
  
  const [tasks, setTasks] = useState<ITask[]>([])
  
  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function deleteTaskById(taskId: string) {
    const newTask = tasks.filter(task => task.id != taskId)
    setTasks(newTask)
  }
  

  function toggleTaskCompletedById(taskId: string) {
    const newTask = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task, 
          isCompleted: !task.isCompleted
        }
      }
      return task
    })
    setTasks(newTask)
  }

  return (
    <>
    <Header onAddTask={addTask} />
    <Tasks 
      tasks={tasks} 
      onDelete={deleteTaskById}
      onComplete={toggleTaskCompletedById}
    />
    </>
     
  )
}

export default App
