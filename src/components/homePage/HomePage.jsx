import { useState } from "react";
import EmloyeeList from "../emloyeeList/EmloyeeList";
import Header from "../header/Header";
import "./homePage.css";
import { useEffect } from "react";

const HomePage = ({ employeeList, setCurrentImloyee }) => {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState(''); 

  useEffect(() => {
    if (filteredResults.length === 1) {
      setCurrentImloyee(filteredResults[0]);
    } 
  }, [filteredResults])

  const searchItems = (e) => {
    setSearchInput(e.target.value)
    if (searchInput !== '') {
        const filteredData = employeeList.filter((item) => {
            return Object.values(item.name).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else {
        setFilteredResults(employeeList);
    }
}

const handelCancelClick = () => {
  setSearchInput('');
  setFilteredResults([]);
}

  return (
    <div className="homePage">
      <Header title="Employee Directory" />
      <div className="search">
        <div onClick={handelCancelClick}>
        <img className='cancelCross' src='https://cdn-icons-png.flaticon.com/512/5720/5720524.png'/>
        </div>
        <input placeholder="Search" value={searchInput} onChange={searchItems} />
      </div>
      <EmloyeeList
        employeeList={employeeList}
        setCurrentImloyee={setCurrentImloyee}
      />
    </div>
  );
};

export default HomePage;
