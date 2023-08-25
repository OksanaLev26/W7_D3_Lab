import EmloyeeList from "../emloyeeList/EmloyeeList";
import Header from "../header/Header";
import "./homePage.css";

const HomePage = ({ employeeList, setCurrentImloyee }) => {
  return (
    <div className="homePage">
      <Header title="Employee Directory" />
      <div className="search">
        <input placeholder="Search" />
      </div>
      <EmloyeeList
        employeeList={employeeList}
        setCurrentImloyee={setCurrentImloyee}
      />
    </div>
  );
};

export default HomePage;
