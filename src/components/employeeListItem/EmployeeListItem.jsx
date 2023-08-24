import "./employeeListItem.css";

const EmloyeeListItem = ({ employeeList, setCurrentImloyee }) => {
  console.log("employeeList", employeeList);
  return (
    <>
      {employeeList.map((employee, index) => {
        const handleEmployeeClick = () => {
          setCurrentImloyee(employee);
        };

        return (
          <>
            <div className="emloyeeListItem" onClick={handleEmployeeClick}>
              <div className="emloyeeListItem-img">
                <img
                  className="emloyeeListItem-img"
                  src={employee.img}
                  alt="employee"
                />
              </div>
              <div className="emloyeeListItem-info">
                <div className="emloyeeListItem-name">{employee.name}</div>
                <div className="emloyeeListItem-jobTitle">
                  {employee.jobTitle}
                </div>
              </div>
            </div>
            {index !== employeeList.length - 1 && (
              <div className="emloyeeListItem-divider" />
            )}
          </>
        );
      })}
    </>
  );
};

export default EmloyeeListItem;
