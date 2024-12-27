import React from "react";

const AcceptTask = ({ data, id }) => {
  console.log(data);
  const changeToComplete = (id) => {
    console.log(id);
    const LoggedData = JSON.parse(localStorage.getItem("loggedInUser"));
    const tasks = LoggedData.data.tasks;
    const task = {
      taskTitle: data.taskTitle,
      taskDescription: data.taskDescription,
      taskDate: data.taskDate,
      category: data.category,
      active: false,
      newTask: false,
      failed: false,
      completed: true,
    };

    tasks[id] = task;
    LoggedData.data.taskNumbers.completed += 1;
    LoggedData.data.taskNumbers.active -= 1;
    localStorage.setItem("loggedInUser", JSON.stringify(LoggedData));

    alert(task.taskTitle);
    console.log(tasks);
  };

  const changeToFaild = (id) => {
    console.log(id);
    const LoggedData = JSON.parse(localStorage.getItem("loggedInUser"));
    const tasks = LoggedData.data.tasks;
    const task = {
      taskTitle: data.taskTitle,
      taskDescription: data.taskDescription,
      taskDate: data.taskDate,
      category: data.category,
      active: false,
      newTask: false,
      failed: true,
      completed: false,
    };

    tasks[id] = task;
    LoggedData.data.taskNumbers.failed += 1;
    LoggedData.data.taskNumbers.active -= 1;
    localStorage.setItem("loggedInUser", JSON.stringify(LoggedData));

    alert(task.taskTitle);
    console.log(tasks);
  };
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl ">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 text-sm rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="flex justify-between items-center mt-5">
        <button
          className="bg-green-500 text-lg font-medium text-white px-5 py-2 rounded-sm"
          onClick={() => changeToComplete(id)}
        >
          Completed
        </button>
        <button
          className="bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm ml-3"
          onClick={() => changeToFaild(id)}
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
