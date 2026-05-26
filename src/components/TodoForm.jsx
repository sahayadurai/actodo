import { useState } from "react";
function TodoForm({ activityArr = [], setActivityArr }) {

    const [newActivity, setNewActivity] = useState("");
    
    function handleChange(e) {
        setNewActivity(e.target.value);
    }
    
    function addActivity() {
        if (!newActivity.trim()) return;
        
        if (typeof setActivityArr !== 'function') {
            console.error('setActivityArr is not a function:', setActivityArr);
            return;
        }
        
        setActivityArr([...activityArr, { id: activityArr.length + 1, activity: newActivity }]);
        setNewActivity("");
    }
    
    return (
        <div className="flex flex-col gap-5 ">

            <h1 className="text-2xl font-bold">Manage Activities</h1>
            <div className="flex mt-5">
                <input value={newActivity} onChange={handleChange} type="text" placeholder="What's your next Activity?" className="border border-gray-300 p-2 gap-4focus:outline-none focus:ring-2" ></input>
                <button onClick={addActivity} className="bg-black text-white px-4 py-2">Add</button>
            </div>
        </div>


    );
}

export default TodoForm