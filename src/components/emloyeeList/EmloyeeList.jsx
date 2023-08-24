import EmloyeeListItem from '../employeeListItem/EmployeeListItem';
import './emloyeeList.css';

const EmloyeeList = ({employeeList, setCurrentImloyee}) => {
    
    return <div className="emloyeeList">
        <EmloyeeListItem employeeList={employeeList} setCurrentImloyee={setCurrentImloyee} />
        </div>
}

export default EmloyeeList;