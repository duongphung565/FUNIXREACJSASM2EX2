import React, { useState } from 'react'

import {
    Card, CardImg, CardBody,
    CardTitle, Input
} from 'reactstrap';
import { Link } from 'react-router-dom';
function RenderCard({ staffs, onClick }) {
    return (
        staffs.map((staff) => {
            return (
                <div key={staff.id} className='col-lg-2 col-md-4 col-6'>
                    <Card className={'p-2 m-2'}>
                        <Link to={`/staffs/${staff.id}`}>
                            <CardBody>
                                <CardImg src={staff.image} alt={staff.name} />
                                <CardTitle>{staff.name}</CardTitle>
                            </CardBody>
                        </Link>
                    </Card>
                </div >
            )
        })
    );
}


function Employee(props) {
    const [searchInput, setSearchInput] = useState('');
    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
    }
    //Lấy danh sách tìm được
    const listSearch = props.staffs.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()));
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h3>Nhân viên</h3>
                    <Input icon='search' placeholder='Search...' onChange={(e) => searchItems(e.target.value)}
                    />
                    <hr />
                </div>
            </div>
            <div className='row'>
                <RenderCard staffs={listSearch} />


            </div>
        </div>
    );
}
export default Employee;
