import React from 'react'
import { Link } from 'react-router-dom';
import { CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';


const EmployeeDetail = (props) => {
    if (props.staff != null) {
        return (
            <div className='container employee_detail'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/staffs">Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-3 col-md-4 col-12'>
                        <CardImg src={props.staff.image} alt={props.staff.name} />
                    </div>

                </div>
            </div>
        )

    }
}
export default EmployeeDetail;