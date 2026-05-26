import TodoItem from "./TodoItem";
import { useState } from "react";


function TodoList(props) {
    
    const activityArr = props.activityArr;  
    const setActivityArr = props.setActivityArr;


    
    return (
    
            <div className=" bg-purple-300 rounded-md mt-10 gap-5 p-5 flex-grow">
                <h1 className="text-2xl font-bold">Today's Activities</h1>
                {activityArr.length==0?<p>Add your activities</p>:""}
                {
                     activityArr.map(function(item, index){
                        return <TodoItem id={item.id} activity={item.activity} activityArr={activityArr } setActivityArr={setActivityArr} index={index} />

                })
            } 
               
                    
                
            </div>
        
    );
}

export default TodoList;