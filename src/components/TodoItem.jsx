function TodoItem(props) {

    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;
    function handleDelete(ideleteid) {

        var tempArr = activityArr.filter(function (item) {
            if (item.id == ideleteid) {
                return false;
            }
            else {
                return true;
            }
        })
        setActivityArr(tempArr);
    }


    return (

        <div className=" flex justify-between items-center">
            <p>{props.index+1}.{props.activity}</p>
            <button className="text-red-500" onClick={() => handleDelete(props.id)}>Delete</button>

        </div>
    );
}

export default TodoItem;