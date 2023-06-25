import { useState, useEffect } from "react"
import "./App.css"
import { NewFormTask } from "./components/TasksForm";
import { TaskList } from "./components/TaskList";


const App = () => {
    const[tasks, setTasks] = useState<Array<Todo>>(() => {
        const localValue = localStorage.getItem("TASKS")
        if(localValue == null) return []

        return JSON.parse(localValue)
    })

    useEffect(() => { 
        localStorage.setItem("TASKS", JSON.stringify(tasks))
    }, [tasks])

    function addTask(title: string) {
        setTasks(currentTasks => {
            return [
                ...currentTasks,
                {
                    id: crypto.randomUUID(),
                    text: title,
                    isCompleted: false
                }
            ]
        })
    }

    function setCompleted(id: string, isChecked: boolean){
        setTasks(currentTasks => {
            return currentTasks.map(task => {
              if (task.id === id) {
                return {
                  ...task,
                  isCompleted: isChecked
                };
              }
            
              return task;
            });
          });
    }

    function deleteTask(id: string) {
        setTasks(currentTasks => {
            return currentTasks.filter(todo => todo.id != id)
        })
    }


    return (
        <div>
            <NewFormTask onSubmit={addTask}/>
            <h1 className="header">Task list</h1>
            <TaskList 
                tasks={tasks} 
                setCompleted={setCompleted} 
                deleteTask={deleteTask}
            />
        </div>
        
    )

}

export default App