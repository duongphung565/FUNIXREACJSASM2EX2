import React, { Component } from 'react';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Employee from './EmployeeComponent.js';
import EmployeeDetail from './EmployeeDetailComponent.js';
import SalaryEmployee from './SalaryComponent.js'
import Department from './DepartmentComponent.js'
import { STAFFS, DEPARTMENTS } from '../shared/staffs';

import { Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS,

        };
    }

    render() {
        const EmployeePage = () => {
            return (
                <Employee staffs={this.state.staffs} />
            );

        }
        const DepartmentsPage = () => {
            return (
                <Department departments={this.state.departments} />
            );
        }
        const StaffWithId = ({ match }) => {
            return (


                <EmployeeDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]} />
            )
        }
        const SalaryPage = () => {
            return (
                <SalaryEmployee staffs={this.state.staffs} />
            );

        }
        return (
            <div>
                <Header />
                <Switch>

                    <Route path="/staffs/:staffId" component={StaffWithId} />
                    <Route path="/staffs" component={EmployeePage} />
                    <Route
                        exact path="/department" component={DepartmentsPage}
                    />
                    <Route path="/salary" component={SalaryPage} />
                    <Redirect to="/staffs" />

                </Switch >

                <Footer />


            </div >
        );
    }
}


export default Main;
