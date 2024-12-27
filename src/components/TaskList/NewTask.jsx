import React from "react";

const NewTask = ({ data, id }) => {
  const changeToAccept = (id) => {
    console.log(id);
    const LoggedData = JSON.parse(localStorage.getItem("loggedInUser"));
    const tasks = LoggedData.data.tasks;
    // const numbers = LoggedData.data.taskNumbers.active;
    console.log(LoggedData.data.taskNumbers.active)
    const task = {
      taskTitle: data.taskTitle,
      taskDescription: data.taskDescription,
      taskDate: data.taskDate,
      category: data.category,
      active: true,
      newTask: false,
      failed: false,
      completed: false,
    };

    tasks[id] = task;
    LoggedData.data.taskNumbers.active += 1;
    LoggedData.data.taskNumbers.newTask -= 1;
    localStorage.setItem("loggedInUser", JSON.stringify(LoggedData));
    

    alert(task.taskTitle);
    console.log(tasks);
  };
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl ">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 text-sm rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="mt-5">
        <button
          className="bg-blue-500 text-lg font-medium text-white px-5 py-2 rounded-sm"
          onClick={() => changeToAccept(id)}
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
