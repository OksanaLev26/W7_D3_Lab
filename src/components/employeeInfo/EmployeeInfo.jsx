import "./employeeInfo.css";

const EmployeeInfo = ({ employee }) => {
  return (
    <>
    {employee && (
      <div className="employeeInfo">
      <div className="employeeInfo-content">
        <div className="employeeInfo-img">
          <img className="employeeInfo-img" src={employee.img} alt="employee" />
        </div>
        <div className="employeeInfo-info">
          <div className="employeeInfo-name">{employee.name}</div>
          <div className="employeeInfo-jobTitle">{employee.jobTitle}</div>
        </div>
      </div>
      <div className="employeeInfo-divider" />
      {employee.contacts.map((contact, index) => {
        return (
          <div key={`${contact}-${index}`}>
            <div className="employeeInfo-contacts">
              <div className="employeeInfo-info">
                <div className="employeeInfo-contactType">{contact.type}</div>
                <div className="employeeInfo-contactValue">{contact.value}</div>
              </div>
              <img
                className="employeeInfo-arrow"
                src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                alt="arrow"
              />
            </div>
            {index !== employee.contacts.length - 1 && (
              <div className="employeeInfo-divider" />
            )}
          </div>
        );
      })}
    </div>
    )}
    </>
  );
};

export default EmployeeInfo;
