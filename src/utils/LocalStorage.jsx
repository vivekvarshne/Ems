// localStorage.clear();
const employees = [
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "e@e.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Complete the project report",
        "taskDescription": "Prepare and finalize the quarterly report.",
        "taskDate": "2024-12-07",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Client follow-up",
        "taskDescription": "Call the client to discuss project updates.",
        "taskDate": "2024-12-08",
        "category": "Communication",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team meeting preparation",
        "taskDescription": "Prepare agenda for the next team meeting.",
        "taskDate": "2024-12-06",
        "category": "Planning",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstname": "Ishita",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Fix UI bugs",
        "taskDescription": "Resolve navigation and button alignment issues.",
        "taskDate": "2024-12-06",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Optimize database",
        "taskDescription": "Improve query efficiency for the analytics module.",
        "taskDate": "2024-12-09",
        "category": "Database",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 2,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstname": "Vihaan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Write unit tests",
        "taskDescription": "Create test cases for the user authentication module.",
        "taskDate": "2024-12-05",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Create wireframes",
        "taskDescription": "Design wireframes for the new landing page.",
        "taskDate": "2024-12-08",
        "category": "Design",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstname": "Ananya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Prepare sales report",
        "taskDescription": "Analyze sales data for the last quarter.",
        "taskDate": "2024-12-04",
        "category": "Analysis",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Conduct code review",
        "taskDescription": "Review pull requests for the latest features.",
        "taskDate": "2024-12-05",
        "category": "Code Review",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Onboard new interns",
        "taskDescription": "Guide interns through the onboarding process.",
        "taskDate": "2024-12-10",
        "category": "Human Resources",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstname": "Kavya",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Update project documentation",
        "taskDescription": "Add details of recent changes to the project wiki.",
        "taskDate": "2024-12-07",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Implement feature X",
        "taskDescription": "Develop the feature requested by the client.",
        "taskDate": "2024-12-09",
        "category": "Development",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Prepare training materials",
        "taskDescription": "Create resources for the upcoming employee training.",
        "taskDate": "2024-12-06",
        "category": "Training",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    }
  }
];

const admin = [
  {
    "id": 1,
    "firstname": "Rajesh",
    "email": "admin@example.com",
    "password": "123"
  }
];

  
  export const setLocalStorage =  ()=>{
     localStorage.setItem('employees',JSON.stringify(employees))
     localStorage.setItem('admin',JSON.stringify(admin))
  }
  export const getLocalStorage =  ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
    
  }
  
  
