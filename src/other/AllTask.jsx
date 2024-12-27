import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    // Function to update taskNumbers for a specific employee
    const updateTaskNumbers = (employeeId, updatedTaskNumbers) => {
        const updatedUserData = userData.map((employee) =>
            employee.id === employeeId
                ? { ...employee, taskNumbers: { ...employee.taskNumbers, ...updatedTaskNumbers } }
                : employee
        );
        setUserData(updatedUserData); // Update state
    };

    // Function to mark a task as completed   
    return (
        <div className="bg-[#1c1c1c] p-5 rounded mt-5">
            <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
                <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
                <h3 className="text-lg font-medium w-1/5">New Task</h3>
                <h5 className="text-lg font-medium w-1/5">Active Task</h5>
                <h5 className="text-lg font-medium w-1/5">Completed</h5>
                <h5 className="text-lg font-medium w-1/5">Failed</h5>
            </div>

            <div>
                {userData.map((elem, id) => (
                    <div key={id} className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
                        <h2 className="text-lg font-medium w-1/5 ">{elem.firstname}</h2>
                        <h3 className="text-lg font-medium w-1/5 text-blue-600 ml-11">{elem.taskNumbers.newTask}</h3>
                        <h5 className="text-lg font-medium w-1/5 text-yellow-400">{elem.taskNumbers.active}</h5>
                        <h5 className="text-lg font-medium w-1/5 text-white-600">{elem.taskNumbers.completed}</h5>
                        <h5 className="text-lg font-medium w-1/5 text-red-600">{elem.taskNumbers.failed}</h5>
                        {/* <button
                            onClick={() => updateTaskNumbers(elem.id, { newTask: elem.taskNumbers.newTask + 1 })}
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                        >
                            Add New Task
                        </button> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTask;
