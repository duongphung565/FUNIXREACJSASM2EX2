import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, CardHeader, Label, Input, Button, Alert } from 'reactstrap';
//Hàm tính lương 
function CountSalary({ staff }) {
    const salaryEmployee = staff.salaryScale * 3000000 + staff.overTime * 200000;
    return (
        <CardHeader>Lương: {Math.floor(salaryEmployee)}</CardHeader>
    )
}

const EmployeeSalarys = (props) => {
    const [sortValueID, setSortID] = useState(false);
    function sortID() {
        setSortID(!sortValueID);
    }
    if (props.staffs != null) {
        return (
            <div className='container employee_detail'>
                <div className='row'>
                    <div className='col-12'>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/staffs">Nhân Viên</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className='col-12'>
                        Sắp xếp:
                        <button onClick={sortID}>Mã nhân viên <span className="fa fa-sort ">
                        </span>
                        </button>
                    </div>
                </div>
                <div className='row'>
                    <RenderSalary staffs={props.staffs.sort((a, b) => sortValueID ? a.id - b.id : b.id - a.id)}

                    />
                </div>
            </div>
        );
    }
}
export default EmployeeSalarys;