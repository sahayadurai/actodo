import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";
function TodoContainer() {
    const[activityArr, setActivityArr] = useState([
        {
            id: 1,
            activity: "Go to Gym",
            

        },
        {
            id: 2,
            activity: "Go to Market",
        },
        {
            id: 3,
            activity: "Call Mom",
        }
    ])
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <TodoForm  activityArr={activityArr} setActivityArr={setActivityArr}/>

                <TodoList activityArr={activityArr} setActivityArr={setActivityArr} />
            </div>
        </div>
    );
}

export default TodoContainer;