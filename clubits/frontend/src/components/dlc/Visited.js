import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getVisited, putVisited, deleteVisited } from '../../actions/visited'
import { getEmployers } from '../../actions/employee'
import { getTeachgroup } from '../../actions/teachgroup'
import { getTeachplan } from '../../actions/teachplan'
import { getCourse } from '../../actions/course'

import VisitedStudents from './tableParts/VisitedStudents'
import VisitedStudentsPut from './tableParts/VisitedStudentsPut'

import { MDBDataTable } from 'mdbreact'

export class Visited extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            teach_group: '',
            date: '',
            start: '',
            end: '',
            teach_plan: '',
            teacher: '',
            title: '',
            editModalShow: false
        }
    }

    static propTypes = {
        visited: PropTypes.array.isRequired,
        getVisited: PropTypes.func.isRequired,
        putVisited: PropTypes.func.isRequired,
        deleteVisited: PropTypes.func.isRequired,
        employee: PropTypes.array.isRequired,
        getEmployers: PropTypes.func.isRequired,
        teachgroup: PropTypes.array.isRequired,
        getTeachgroup: PropTypes.func.isRequired,
        teachplan: PropTypes.array.isRequired,
        getTeachplan: PropTypes.func.isRequired,
        course: PropTypes.array.isRequired,
        getCourse: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getVisited()
        this.props.getEmployers()
        this.props.getTeachplan()
        this.props.getTeachgroup()
        this.props.getCourse()
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        setTimeout(() => {
            this.setState({
                title: this.props.teachgroup.filter(cf => cf.id == this.state.teach_group).map(c => this.props.course.filter(tf => tf.id == c.course).map(t => t.name))
            });
        }, 100);
    }

    onSubmit = e => {
        e.preventDefault();
        const { id, teach_group, date, start, end, teach_plan, teacher, title } = this.state
        const visited = { id, teach_group, date, start, end, teach_plan, teacher, title }
        this.props.putVisited(visited)
        setTimeout(() => {
            this.updateTable()
        }, 500);
    }

    updateTable() {
        this.props.getVisited()
    }

    render() {
        const { id, teach_group, date, start, end, teach_plan, teacher, title } = this.state
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
                    label: 'Учебная группа',
                    field: 'name',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Дата',
                    field: 'date',
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
            rows: this.props.visited.map(u => ({
                id: u.id,
                name: <a
                    className="font-weight-bold"
                    data-toggle="modal" data-target="#modalInfoFormV"
                    onClick={() => this.setState({ editModalShow: true, id: u.id, teach_group: u.teach_group, date: u.date, start: u.start, end: u.end, teach_plan: u.teach_plan, teacher: u.teacher, title: u.title })}
                >
                    {this.props.teachgroup.filter(tgf => tgf.id == u.teach_group).map(tg => this.props.course.filter(c => c.id == tg.course).map(finaly => finaly.name))}
                </a>,
                date: u.date,
                teacher: this.props.employee.filter(e => e.id == u.teacher).map(emp => emp.second_name + " " + emp.name + " " + emp.last_name),
                putbut:
                    <Fragment>
                        <a
                            className="text-secondary font-weight-bold"
                            data-toggle="modal" data-target="#modalPutFormV"
                            onClick={() => this.setState({ editModalShow: true, id: u.id, teach_group: u.teach_group, date: u.date, start: u.start, end: u.end, teach_plan: u.teach_plan, teacher: u.teacher, title: u.title })}
                        >PUT</a>
                    </Fragment>
                ,
                delbut: <a
                    onClick={this.props.deleteVisited.bind(this, u.id)}
                    className="text-danger font-weight-bold"
                >DEL
                </a>
            }))
        }
        return (
            <Fragment>
                <div className="text-right">
                    <a className="btn btn-dark btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginFormV">Добавить</a>
                </div>
                <div className="modal fade" id="modalPutFormV" role="dialog" aria-labelledby="myModalLabel"
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

                                    <div className="md-form mb-4">
                                        <select
                                            className="browser-default custom-select lis"
                                            name="teach_group"
                                            onChange={this.onChange}
                                            value={teach_group}
                                        >
                                            <option value="" disabled>Выберите учебную группу</option>
                                            {this.props.teachgroup.map(u => (
                                                <option key={u.id} value={u.id}>{this.props.course.filter(c => c.id == u.course).map(finaly => finaly.name)}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Дата: </span>
                                        </div>
                                        <input
                                            className="form-control validate name"
                                            type="date"
                                            name="date"
                                            onChange={this.onChange}
                                            value={date}
                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon33">Начало: </span>
                                        </div>
                                        <input
                                            className="form-control validate name"
                                            type="time"
                                            name="start"
                                            onChange={this.onChange}
                                            value={start}
                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon34">Конец: </span>
                                        </div>
                                        <input
                                            className="form-control validate name"
                                            type="time"
                                            name="end"
                                            onChange={this.onChange}
                                            value={end}
                                        />
                                    </div>

                                    <div className="md-form mb-4">
                                        <select
                                            className="browser-default custom-select lis"
                                            name="teach_plan"
                                            onChange={this.onChange}
                                            value={teach_plan}
                                        >
                                            <option value="" disabled>Выберите учебный план</option>
                                            {this.props.teachplan.map(u => (
                                                <option key={u.id} value={u.id}>{u.name}</option>
                                            ))}
                                        </select>
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
                                <VisitedStudentsPut courseId={id} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modalInfoFormV" role="dialog" aria-labelledby="myModalLabel"
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
                                            <span className="input-group-text md-addon" id="material-addon3">Дата: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="date"
                                            onChange={this.onChange}
                                            value={date}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Учебная группа: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="teach_group"
                                            onChange={this.onChange}
                                            value={this.props.teachgroup.filter(e => e.id == teach_group).map(emp => this.props.course.filter(c => c.id == emp.course).map(finaly => finaly.name))}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">

                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Начало: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
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
                                            type="text"
                                            name="end"
                                            onChange={this.onChange}
                                            value={end}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Учебный план: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="teach_plan"
                                            onChange={this.onChange}
                                            value={this.props.teachplan.filter(e => e.id == teach_plan).map(emp => emp.name)}
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
                                    </div>
                                    <VisitedStudents courseId={id} />
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
            </Fragment >
        )
    }
}


const mapStateToProps = state => ({
    visited: state.visited.visited,
    employee: state.employee.employee,
    teachgroup: state.teachgroup.teachgroup,
    teachplan: state.teachplan.teachplan,
    course: state.course.course
})

export default connect(mapStateToProps, { getVisited, putVisited, deleteVisited, getEmployers, getTeachplan, getTeachgroup, getCourse })(Visited)
