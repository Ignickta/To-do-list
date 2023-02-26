import todoLogo from "../../assets/Logo.svg"
import styles from "./header.module.css"
import plusHeader from "../../assets/plus.svg"
import { FormEvent, useState, ChangeEvent, InvalidEvent } from "react"

interface Props {
    onAddTask: (taskTitle: string) => void
}

export function Header({ onAddTask }: Props) {
    const [title, setTitle] = useState("")

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        onAddTask(title)
        setTitle("")
    }

    function onChangeTitle(event: ChangeEvent <HTMLInputElement>) {
        setTitle(event.target.value)
    }

    return (
        <header className={styles.header}>
            <img src={todoLogo}  />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input 
                    placeholder="Adicionar uma tarefa" 
                    onChange={onChangeTitle}
                    value={title}
                    required
                />
                <button>
                    Criar 
                    <img src={plusHeader}/>
                </button> 
            </form>
        </header>
    )
}