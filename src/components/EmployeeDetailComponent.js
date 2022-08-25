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
                    <div className='col-lg-9 col-md-8 col-12 '>
                        <h2 key={props.staff.name}>Họ và tên: {props.staff.name}</h2>
                        <p key={props.staff.doB}>Ngày sinh: {new Intl.DateTimeFormat('vi-vn', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(Date.parse(props.staff.doB)))}</p>
                        <p key={props.staff.startDate}>Ngày vào công ty:  {new Intl.DateTimeFormat('vi-vn', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(Date.parse(props.staff.startDate)))}</p>
                        <p key={props.staff.department.name}>Phòng ban: {props.staff.department.name}</p>
                        <p key={props.staff.annualLeave}>Số ngày nghỉ còn lại: {props.staff.annualLeave}</p>
                        <p key={props.staff.overTime}>Số ngày đã làm thêm: {props.staff.overTime}</p>

                    </div>
                </div>
            </div>
        )

    }
}
export default EmployeeDetail;