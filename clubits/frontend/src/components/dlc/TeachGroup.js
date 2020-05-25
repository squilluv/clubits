import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getTeachgroup, putTeachgroup, deleteTeachgroup } from '../../actions/teachgroup'
import { getCourse } from '../../actions/course'
import { getTeachgroupstudent } from '../../actions/teachgroupstudent'
import { getStudents } from '../../actions/students'
import { getEmployers } from '../../actions/employee'

import TeachGroupPut from './tableParts/TwachGroupPut'

import { MDBDataTable } from 'mdbreact'

export class TeachGroup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            course: '',
            start: '',
            end: '',
            work: '',
            teacher: '',
            editModalShow: false
        }
    }

    static propTypes = {
        teachgroup: PropTypes.array.isRequired,
        course: PropTypes.array.isRequired,
        teachgroupstudent: PropTypes.array.isRequired,
        students: PropTypes.array.isRequired,
        employee: PropTypes.array.isRequired,
        getEmployers: PropTypes.func.isRequired,
        getStudents: PropTypes.func.isRequired,
        getTeachgroupstudent: PropTypes.func.isRequired,
        getTeachgroup: PropTypes.func.isRequired,
        getCourse: PropTypes.func.isRequired,
        putTeachgroup: PropTypes.func.isRequired,
        deleteTeachgroup: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getTeachgroup()
        this.props.getCourse()
        this.props.getStudents()
        this.props.getTeachgroupstudent()
        this.props.getEmployers()
    }

    toggleChange = () => {
        if (this.state.work == '1') {
            this.setState({
                work: '0',
            });
        } else {
            this.setState({
                work: '1',
            });
        }
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = e => {
        e.preventDefault();
        const { id, course, start, end, work, teacher } = this.state
        const teachgroup = { id, course, start, end, work, teacher }
        this.props.putTeachgroup(teachgroup)
        setTimeout(() => {
            this.updateTable()
        }, 500);
    }

    updateTable() {
        this.props.getTeachgroup()
    }

    render() {
        const { id, course, start, end, work, teacher } = this.state
        let editModalClose = () => this.setState({ editModalShow: false })
        const datas = {
            columns: [
                {
                    label: 'Номер',
                    field: 'id',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Курс',
                    field: 'course',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Действует',
                    field: 'work',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: '',
                    field: 'putbut',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: '',
                    field: 'delbut',
                    sort: 'asc',
                    width: 200
                }
            ],
            rows: this.props.teachgroup.map(u => ({
                id: u.id,
                course: <a
                    className="font-weight-bold"
                    data-toggle="modal" data-target="#modalInfoFormTG"
                    onClick={() => this.setState({ editModalShow: true, id: u.id, course: u.course, start: u.start, end: u.end, work: u.work, teacher: u.teacher })}
                >
                    {this.props.course.filter(e => e.id == u.course).map(emp => emp.name)}
                </a>,
                work: u.work == 1 ? "Да" : "Нет",
                putbut:
                    <Fragment>
                        <a
                            className="text-secondary font-weight-bold"
                            data-toggle="modal" data-target="#modalPutFormTG"
                            onClick={() => this.setState({ editModalShow: true, id: u.id, course: u.course, start: u.start, end: u.end, work: u.work, teacher: u.teacher })}
                        >PUT</a>
                    </Fragment>
                ,
                delbut: <a
                    onClick={this.props.deleteTeachgroup.bind(this, u.id)}
                    className="text-danger font-weight-bold"
                >DEL
                </a>
            }))
        }
        return (
            <Fragment>
                <div className="text-right">
                    <a className="btn btn-dark btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginFormTG">Добавить</a>
                </div>
                <div className="modal fade" id="modalPutFormTG" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Изменить данные</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.onSubmit}>
                                <div className="modal-body mx-3">
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">ID: </span>
                                        </div>
                                        <input
                                            className="form-control validate"
                                            type="text"
                                            name="id"
                                            onChange={this.onChange}
                                            value={id}
                                            disabled

                                        />
                                    </div>

                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Начало: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="date"
                                            name="start"
                                            onChange={this.onChange}
                                            value={start}


                                        />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Конец: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="date"
                                            name="end"
                                            onChange={this.onChange}
                                            value={end}


                                        />

                                    </div>


                                    <select
                                        className="browser-default custom-select lis"
                                        name="work"
                                        onChange={this.onChange}
                                        value={work}
                                    >
                                        <option value="1">Действует</option>
                                        <option value="0">Не действует</option>
                                    </select>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <select name="course" className="browser-default custom-select lis" searchable="Search here.."
                                                onChange={this.onChange}
                                                value={course} >
                                                <option value="" disabled>Выберите курс</option>
                                                {this.props.course.map(u => (
                                                    <option key={u.id} value={u.id}>{u.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <select name="teacher" className="browser-default custom-select lis" searchable="Search here.."
                                                onChange={this.onChange}
                                                value={teacher} >
                                                <option value="" disabled>Выберите преподавателя</option>
                                                {this.props.employee.map(ur => (
                                                    <option key={ur.id} value={ur.id}>{ur.second_name + " " + ur.name + " " + ur.last_name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer d-flex justify-content-center" data-toggle="modal" data-target="#modalPutFormTG">
                                    <button className="btn btn-dark" type="submit">Изменить</button>
                                </div>
                            </form>
                            <div className="container">
                                <TeachGroupPut courseId={id} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modalInfoFormTG" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">{this.props.course.filter(sf => sf.id == course).map(us => us.name)}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.onSubmit}>
                                <div className="modal-body mx-3">

                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Курс: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={this.props.course.filter(sf => sf.id == course).map(us => us.name)}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Преподаватель: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={this.props.employee.filter(sf => sf.id == teacher).map(us => us.second_name + " " + us.name + " " + us.last_name)}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Начало: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="date"
                                            name="start"
                                            onChange={this.onChange}
                                            value={start}
                                            disabled

                                        />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Конец: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="date"
                                            name="end"
                                            onChange={this.onChange}
                                            value={end}
                                            disabled

                                        />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Действует: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="work"
                                            onChange={this.onChange}
                                            value={work}
                                            disabled

                                        />
                                        <table className="table table-striped table-sm border mt-5">
                                            <thead>
                                                <tr>
                                                    <th>Номер</th>
                                                    <th>Студент</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.teachgroupstudent.filter(u => u.teach_groop == id).map(usr => (
                                                    <tr key={usr.id}>
                                                        <td>{usr.id}</td>
                                                        <td>{this.props.students.filter(sf => sf.id == usr.student).map(us => us.second_name + " " + us.name + " " + us.last_name)}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <MDBDataTable
                        striped
                        bordered
                        small
                        data={datas}
                    />
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    course: state.course.course,
    teachgroup: state.teachgroup.teachgroup,
    teachgroupstudent: state.teachgroupstudent.teachgroupstudent,
    students: state.students.students,
    employee: state.employee.employee
})

export default connect(mapStateToProps, { getCourse, getTeachgroup, deleteTeachgroup, putTeachgroup, getTeachgroupstudent, getStudents, getEmployers })(TeachGroup)
