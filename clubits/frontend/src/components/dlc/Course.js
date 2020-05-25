import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getCourse, putCourse, deleteCourse } from '../../actions/course'
import { getEmployers } from '../../actions/employee'

import CourseGroup from './tableParts/CourseGroup'
import CourseGroupPut from './tableParts/CourseGroupPut'

import { MDBDataTable } from 'mdbreact'

export class Course extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            short_name: '',
            yo_from: '',
            yo_to: '',
            min_students: '',
            max_students: '',
            teacher: '',
            editModalShow: false
        }
    }

    static propTypes = {
        course: PropTypes.array.isRequired,
        getCourse: PropTypes.func.isRequired,
        putCourse: PropTypes.func.isRequired,
        deleteCourse: PropTypes.func.isRequired,
        employee: PropTypes.array.isRequired,
        getEmployers: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getCourse()
        this.props.getEmployers()
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = e => {
        e.preventDefault();
        const { id, name, short_name, yo_from, yo_to, min_students, max_students, teacher } = this.state
        const course = { id, name, short_name, yo_from, yo_to, min_students, max_students, teacher }
        this.props.putCourse(course)
        setTimeout(() => {
            this.updateTable()
        }, 500);
    }

    updateTable() {
        this.props.getCourse()
    }

    render() {
        const { id, name, short_name, yo_from, yo_to, min_students, max_students, teacher } = this.state
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
                    label: 'Название',
                    field: 'name',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Сокр название',
                    field: 'short_name',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Учитель',
                    field: 'teacher',
                    sort: 'asc',
                    width: 200
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
            rows: this.props.course.map(u => ({
                id: u.id,
                name: <a
                    className="font-weight-bold"
                    data-toggle="modal" data-target="#modalInfoFormC"
                    onClick={() => this.setState({ editModalShow: true, id: u.id, name: u.name, short_name: u.short_name, yo_from: u.yo_from, yo_to: u.yo_to, min_students: u.min_students, max_students: u.max_students, teacher: u.teacher })}
                >
                    {u.name}
                </a>,
                short_name: u.short_name,
                teacher: this.props.employee.filter(e => e.id == u.teacher).map(emp => emp.second_name + " " + emp.name + " " + emp.last_name),
                putbut:
                    <Fragment>
                        <a
                            className="text-secondary font-weight-bold"
                            data-toggle="modal" data-target="#modalPutFormC"
                            onClick={() => this.setState({ editModalShow: true, id: u.id, name: u.name, short_name: u.short_name, yo_from: u.yo_from, yo_to: u.yo_to, min_students: u.min_students, max_students: u.max_students, teacher: u.teacher })}
                        >PUT</a>
                    </Fragment>
                ,
                delbut: <a
                    onClick={this.props.deleteCourse.bind(this, u.id)}
                    className="text-danger font-weight-bold"
                >DEL
                </a>
            }))
        }
        return (
            <Fragment>
                <div className="text-right">
                    <a className="btn btn-dark btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginFormC">Добавить</a>
                </div>
                <div className="modal fade" id="modalPutFormC" role="dialog" aria-labelledby="myModalLabel"
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
                                            <span className="input-group-text md-addon" id="material-addon3">Название: </span>
                                        </div>
                                        <input
                                            className="form-control validate name"
                                            type="text"
                                            name="name"
                                            onChange={this.onChange}
                                            value={name}
                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Сокр название: </span>
                                        </div>
                                        <input
                                            className="form-control validate name"
                                            type="text"
                                            name="short_name"
                                            onChange={this.onChange}
                                            value={short_name}
                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Возвраст от: </span>
                                        </div>
                                        <input
                                            className="form-control validate name"
                                            type="text"
                                            name="yo_from"
                                            onChange={this.onChange}
                                            value={yo_from}
                                        />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Возвраст до: </span>
                                        </div>
                                        <input
                                            className="form-control validate name"
                                            type="text"
                                            name="yo_to"
                                            onChange={this.onChange}
                                            value={yo_to}
                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Мин учеников: </span>
                                        </div>
                                        <input
                                            className="form-control validate name"
                                            type="text"
                                            name="min_students"
                                            onChange={this.onChange}
                                            value={min_students}
                                        />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Макс учеников: </span>
                                        </div>
                                        <input
                                            className="form-control validate name"
                                            type="text"
                                            name="max_students"
                                            onChange={this.onChange}
                                            value={max_students}
                                        />
                                    </div>
                                    <div className="md-form mb-4">
                                        <select
                                            className="browser-default custom-select lis"
                                            name="teacher"
                                            onChange={this.onChange}
                                            value={teacher}
                                        >
                                            <option value="" disabled>Выберите преподавателя</option>
                                            {this.props.employee.map(u => (
                                                <option key={u.id} value={u.id}>{u.second_name + " " + u.name + " " + u.last_name}</option>
                                            ))}
                                        </select>
                                    </div>

                                </div>
                                <div className="modal-footer d-flex justify-content-center">
                                    <button className="btn btn-dark" type="submit">Изменить</button>
                                </div>
                            </form>
                            <div className="container">
                                <CourseGroupPut courseId={id} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modalInfoFormC" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">{name}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.onSubmit}>
                                <div className="modal-body mx-3">

                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Название: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            onChange={this.onChange}
                                            value={name}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Сокр название: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="short_name"
                                            onChange={this.onChange}
                                            value={short_name}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Возвраст от: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="yo_from"
                                            onChange={this.onChange}
                                            value={yo_from}
                                            disabled

                                        />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Возвраст до: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="yo_to"
                                            onChange={this.onChange}
                                            value={yo_to}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Мин учеников: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="min_students"
                                            onChange={this.onChange}
                                            value={min_students}
                                            disabled

                                        />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Макс учеников: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="max_students"
                                            onChange={this.onChange}
                                            value={max_students}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Учитель: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="teacher"
                                            onChange={this.onChange}
                                            value={this.props.employee.filter(e => e.id == teacher).map(emp => emp.second_name + " " + emp.name + " " + emp.last_name)}
                                            disabled

                                        />
                                        <CourseGroup courseId={id} />
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
    employee: state.employee.employee
})

export default connect(mapStateToProps, { getCourse, putCourse, deleteCourse, getEmployers })(Course)
