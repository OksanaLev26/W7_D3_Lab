import HomePage from "./components/homePage/HomePage";
import EmployeePage from "./components/employeePage/EmployeePage";
import { useState } from "react";
import "./app.css";

function App() {
  const employeeList = [
    {
      img:
        "https://img.freepik.com/premium-photo/3d-user-illustration_541443-3647.jpg",
      name: "James King",
      jobTitle: "President and CEO",
      contacts: [
        { type: "Office Phone", value: "781-000-0001" },
        { type: "Mobile Phone", value: "611-000-0001" },
        { type: "sms", value: "611-000-0001" },
        { type: "email", value: "james@fakemail.com" },
      ],
    },
    {
      img:
        "https://img.freepik.com/premium-photo/3d-user-illustration_541443-3647.jpg",
      name: "Julie Taylor",
      jobTitle: "VP of Marketing",
      contacts: [
        { type: "Office Phone", value: "782-000-0002" },
        { type: "Mobile Phone", value: "612-000-0002" },
        { type: "sms", value: "612-000-0002" },
        { type: "email", value: "julie@fakemail.com" },
      ],
    },
    {
      img:
        "https://img.freepik.com/premium-photo/3d-user-illustration_541443-3647.jpg",
      name: "Eugene Lee",
      jobTitle: "CFO",
      contacts: [
        { type: "Office Phone", value: "783-000-0003" },
        { type: "Mobile Phone", value: "613-000-0003" },
        { type: "sms", value: "613-000-0003" },
        { type: "email", value: "eugene@fakemail.com" },
      ],
    },
    {
      img:
        "https://img.freepik.com/premium-photo/3d-user-illustration_541443-3647.jpg",
      name: "John Williams",
      jobTitle: "VP of Engineering",
      contacts: [
        { type: "Office Phone", value: "784-000-0004" },
        { type: "Mobile Phone", value: "614-000-0004" },
        { type: "sms", value: "614-000-0004" },
        { type: "email", value: "john@fakemail.com" },
      ],
    },
    {
      img:
        "https://img.freepik.com/premium-photo/3d-user-illustration_541443-3647.jpg",
      name: "Ray Moore",
      jobTitle: "VP of Sales",
      contacts: [
        { type: "Office Phone", value: "785-000-0005" },
        { type: "Mobile Phone", value: "615-000-0005" },
        { type: "sms", value: "615-000-0005" },
        { type: "email", value: "ray@fakemail.com" },
      ],
    },
    {
      img:
        "https://img.freepik.com/premium-photo/3d-user-illustration_541443-3647.jpg",
      name: "QA Manager",
      jobTitle: "VP of Marketing",
      contacts: [
        { type: "Office Phone", value: "786-000-0006" },
        { type: "Mobile Phone", value: "616-000-0006" },
        { type: "sms", value: "616-000-0006" },
        { type: "email", value: "paul@fakemail.com" },
      ],
    },
  ];
  const [currentEmployee, setCurrentImloyee] = useState(employeeList[0]);

  const handleSetCurrentEmployee = (item) => {
    console.log("item", item);
    setCurrentImloyee(item);
  };

  return (
    <div className="app">
      <HomePage
        employeeList={employeeList}
        setCurrentImloyee={handleSetCurrentEmployee}
      />
      <EmployeePage currentEmployee={currentEmployee} />
    </div>
  );
}

export default App;
