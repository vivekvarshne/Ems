import React, { useState } from "react";

const CreateEmployee = ({ onEmployeeCreate }) => {
  const [employee, setEmployee] = useState({
    firstname: "",
    email: "",
    password: "",
    tasks: [],
    taskNumbers: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 0,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleCreateEmployee = () => {
    if (!employee.firstname || !employee.email || !employee.password) {
      alert("Please fill out all fields.");
      return;
    }
    onEmployeeCreate(employee);
    setEmployee({
      firstname: "",
      email: "",
      password: "",
      tasks: [],
      taskNumbers: {
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
    });
    alert("Employee created successfully!");
  };

  return (
    <div className="flex flex-col items-center p-5 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create Employee</h2>
      <div className="flex flex-col gap-4 w-full max-w-md text-black">
        <input
          type="text"
          name="firstname"
          value={employee.firstname}
          onChange={handleInputChange}
          placeholder="Enter First Name"
          className="p-3 border rounded"
        />
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleInputChange}
          placeholder="Enter Email"
          className="p-3 border rounded"
        />
        <input
          type="password"
          name="password"
          value={employee.password}
          onChange={handleInputChange}
          placeholder="Enter Password"
          className="p-3 border rounded"
        />
        <button
          onClick={handleCreateEmployee}
          className="p-3 bg-blue-500 text-white rounded"
        >
          Create Employee
        </button>
      </div>
    </div>
  );
};

export default CreateEmployee;
