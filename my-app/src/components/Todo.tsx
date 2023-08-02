import React, { useState } from "react";

const Todo = () => {
    interface todo{
        id:number,
        text:string,
        completed:boolean
    }
	const [todos, setTodos] = useState<todo[]>([]);
	const [value, setValue]=useState<string>("")
    function handleClick(e:any){
        e.preventDefault()
        const newTodo:todo={id:Date.now(),text:value,completed:false}
        setTodos([...todos,newTodo])
    }
	return (
		<div>
			<h1>Todo List</h1>
			{/* <form> */}
				<input type="text" onChange={(e)=>setValue(e.target.value)}/>
				<button onClick={(e)=>handleClick(e)}>Add</button>
			{/* </form> */}
			<ul>
                {todos.map((item)=>(
                    <li>{item.text}</li>
                ))}
            </ul>
		</div>
	);
};

export default Todo;
