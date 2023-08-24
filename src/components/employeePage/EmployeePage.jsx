import EmployeeInfo from '../employeeInfo/EmployeeInfo';
import Header from '../header/Header';
import './employeePage.css';

const EmployeePage = ({currentEmployee}) => {
    return <div className="employeePage">
        <Header title='Employee' />
        <EmployeeInfo employee={currentEmployee}/>
    </div>
}

export default EmployeePage;