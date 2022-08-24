import React from 'react';

import {
    Card, CardText,
    CardTitle
} from 'reactstrap';

const Department = (props) => {
    if (props.departments != null) {
        return (
            <div className='container'>
                < RenderDepartment departments={props.departments} />
            </div>
        )
    }


}
export default Department;