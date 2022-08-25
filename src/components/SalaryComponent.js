import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, CardHeader, Label, Input, Button, Alert } from 'reactstrap';


const EmployeeSalarys = (props) => {
    const [sortValueID, setSortID] = useState(false);
    function sortID() {
        setSortID(!sortValueID);
    }
    if (props.staffs != null) {
        return (
            <div className='container employee_detail'>
                <div className='row'>

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