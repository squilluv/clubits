import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getVisitedstudents, addVisitedstudents, putVisitedstudents, deleteVisitedstudents } from '../../../actions/visitedstudents'
import { getStudents } from '../../../actions/students'

import { MDBDataTable } from 'mdbreact'

export class VisitedStudentsPut extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: "",
            visited: "",
            student: "",
            have: "",
            showRes: "0",
            checkOper: "0",
            checkFuckingClick: ""
        }
    }

    static propTypes = {
        students: PropTypes.array.isRequired,
        getStudents: PropTypes.func.isRequired,
        visitedstudents: PropTypes.array.isRequired,
        getVisitedstudents: PropTypes.func.isRequired,
        addVisitedstudents: PropTypes.func.isRequired,
        putVisitedstudents: PropTypes.func.isRequired,
        deleteVisitedstudents: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getVisitedstudents()
        this.props.getStudents()
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        if (this.state.checkOper == "1") {
            const { visited, student, have, id } = this.state
            const visitedStudents = { visited, student, have, id }
            this.props.putVisitedstudents(visitedStudents)
            this.setState({
                student: '',
                have: '',
                id: '',
                showRes: "0"
            });
            setTimeout(() => {
                this.props.getVisitedstudents()
            }, 400)
        } else {
            const { visited, student, have } = this.state
            const visitedStudents = { visited, student, have }
            this.props.addVisitedstudents(visitedStudents)
            this.setState({
                student: '',
                have: '',
                showRes: "0"
            });
        }
    };

    toggleChange = (e) => {
        if (this.state.have == '1') {
            this.setState({
                have: '0',
            });
        } else {
            this.setState({
                have: '1',
            });
        }
    }

    onClick = e => {
        if (this.state.showRes == "0") {
            this.setState({ showRes: "1", checkOper: "0" })
        } else {
            this.setState({ showRes: "0" })
        }
        this.setState({ visited: this.props.newId })
    }

    render() {
        const { visited, student, have, id } = this.state
        return (
            <Fragment>
                {this.state.showRes == "1" ? <div className="text-left">
                    <h3><a className="primary-color" onClick={() => { this.setState({ showRes: "0" }); this.onClick }}>Cкрыть</a></h3>
                </div> : <div className="text-left">
                        <h3><a className="primary-color" onClick={() => { this.setState({ showRes: "1", checkOper: "0", student: "", have: "0", visited: this.props.newId }); this.onClick }}>Добавить</a></h3>
                    </div>
                }
                {
                    this.state.showRes == "1" ? <form onSubmit={this.onSubmit}>
                        <table className="table table-sm">
                            <tbody>
                                <tr>
                                    <td>
                                        <select name="student" className="browser-default custom-select lis" searchable="Search here.."
                                            onChange={this.onChange}
                                            value={student} >
                                            <option value="" disabled>Выберите студента</option>
                                            {this.props.students.map(u => (
                                                <option key={u.id} value={u.id}>{u.second_name + " " + u.name + " " + u.last_name}</option>
                                            ))}

                                        </select>

                                        <input
                                            className="form-control validate name"
                                            type="text"
                                            name="id"
                                            onChange={this.onChange}
                                            value={id}
                                            hidden
                                        />
                                        <input
                                            className="form-control validate name"
                                            type="text"
                                            name="visited"
                                            onChange={this.onChange}
                                            value={visited}
                                            hidden
                                        />
                                    </td>
                                    <td><select
                                        className="browser-default custom-select lis"
                                        name="have"
                                        onChange={this.onChange}
                                        value={have}
                                    >
                                        <option value="1">Присутствовал</option>
                                        <option value="0">Не присутствовал</option>
                                    </select></td>
                                    <td>
                                        {this.state.checkOper == "0" ? <button className="btn btn-white border-0 btn-sm" type="submit">Добавить</button>
                                            : <button className="btn btn-white border-0 btn-sm" type="submit">Изменить</button>}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form> : null
                }

                <table className="table table-striped table-sm border mt-5">
                    <thead>
                        <tr>
                            <th>Студент</th>
                            <th>Присутствие</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.visitedstudents.filter(u => u.visited == this.props.newId).map(usr => (
                            <tr key={usr.id}>
                                <td>{this.props.students.filter(sf => sf.id == usr.student).map(us => us.second_name + " " + us.name + " " + us.last_name)}</td>
                                <td>{usr.have == 1 ? "Присутствовал" : "Не присутствовал"}</td>
                                <td><Fragment>
                                    <a
                                        className="text-secondary font-weight-bold"
                                        onClick={() => { this.setState({ id: usr.id, student: usr.student, have: usr.have, checkOper: "1", showRes: "1", visited: this.props.newId }); this.onClick }}
                                    >PUT</a>
                                </Fragment></td>
                                <th><a
                                    onClick={this.props.deleteVisitedstudents.bind(this, usr.id)}
                                    className="text-danger font-weight-bold"
                                >DEL
                </a></th>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="d-flex justify-content-center" data-toggle="modal" data-target="#modalPutFormV">
                    <button className="btn btn-white black-text" onClick={() => { this.props.updateData("2") }}>Сохранить изменения</button>
                </div>
            </Fragment >
        )
    }
}

const mapStateToProps = state => ({
    visitedstudents: state.visitedstudents.visitedstudents,
    students: state.students.students
})

export default connect(mapStateToProps, { getVisitedstudents, addVisitedstudents, putVisitedstudents, deleteVisitedstudents, getStudents })(VisitedStudentsPut)