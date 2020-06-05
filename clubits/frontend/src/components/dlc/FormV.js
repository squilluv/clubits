import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addVisited, getVisited } from '../../actions/visited'
import { getEmployers } from '../../actions/employee'
import { getTeachgroup } from '../../actions/teachgroup'
import { getTeachplan } from '../../actions/teachplan'
import { getCourse } from '../../actions/course'

import VisitedStudentsPP from './tableParts/VisitedStudentsPP'

export class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            teach_group: '',
            date: '',
            start: '',
            end: '',
            teach_plan: '',
            teacher: '',
            newId: "",
            title: '',
            checkTR: "0",
            checkSub: "0"
        }
    }

    static propTypes = {
        visited: PropTypes.array.isRequired,
        getVisited: PropTypes.func.isRequired,
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
                title: String(this.props.teachgroup.filter(cf => cf.id == this.state.teach_group).map(c => this.props.course.filter(tf => tf.id == c.course).map(t => t.name)) + " " + this.state.date)
            });
        }, 100);
    }

    onSubmit = e => {
        e.preventDefault();
        const { teach_group, date, start, end, teach_plan, teacher, title } = this.state
        const visited = { teach_group, date, start, end, teach_plan, teacher, title }
        console.log(visited)
        this.props.addVisited(visited)
        this.setState({ checkSub: "1" })
        setTimeout(() => {
            try {
                let arr = this.props.visited.length - 1
                console.log(this.props.visited[arr].id)
                this.setState({ newId: this.props.visited[arr].id })
            } catch { }
        }, 500)

    };

    updateData = val => {
        this.setState({ checkTR: val })
        if (this.state.checkTR == "2") {
            this.setState({
                teach_group: '',
                date: '',
                start: '',
                end: '',
                teach_plan: '',
                teacher: ''
            });
        }
    }

    render() {
        const { teach_group, date, start, end, teach_plan, teacher, title } = this.state
        return (
            <div className="modal fade" id="modalLoginFormV" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Добавление посещения</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="modal-body mx-3">
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
                                        <span className="input-group-text md-addon" id="material-addon31">Начало: </span>
                                    </div>
                                    <input
                                        className="form-control validate"
                                        type="time"
                                        name="start"
                                        onChange={this.onChange}
                                        value={start}
                                    />
                                </div>
                                <div className="md-form mb-5 input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text md-addon" id="material-addon32">Конец: </span>
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

                                <div className="md-form mb-5 input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text md-addon" id="material-addon3">Заголовок: </span>
                                    </div>
                                    <input
                                        className="form-control validate name"
                                        type="text"
                                        name="title"
                                        onChange={this.onChange}
                                        value={title}
                                    />
                                </div>

                            </div>

                            {this.state.checkSub == "0" ? <div className="modal-footer d-flex justify-content-center">
                                <button className="btn btn-dark" type="submit">Добавить</button>
                            </div> : null}
                        </form>
                        <div className="container">
                            {this.state.checkSub == "0" ? null : <VisitedStudentsPP newId={this.state.newId} updateData={this.updateData} />}

                        </div>
                    </div>
                </div>
            </div>

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

export default connect(mapStateToProps, { getVisited, getEmployers, getTeachplan, getTeachgroup, getCourse, addVisited })(Form)
