import { useState } from "react"

export function NewFormTask({onSubmit}: NewFormTaskProps ) {
    const[newItem, setNewItem] = useState<string>("")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if(newItem === "") return

        onSubmit(newItem)
        setNewItem("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="new-item-form">
                <div className="form-row">
                    <input type="text" 
                    value={newItem} 
                    placeholder="Task name"
                    onChange={e=> setNewItem(e.target.value) }/>
                </div>
                <button className="btn">Add</button>
            </form>
        </div>
    )

}

interface NewFormTaskProps {
    onSubmit: (newItem: string) => void;
  }
