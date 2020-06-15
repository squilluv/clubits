import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes, { string } from 'prop-types'
import { addTeachgroup, getTeachgroup } from '../../actions/teachgroup'
import { getCourse } from '../../actions/course'
import { getEmployers } from '../../actions/employee'

import TeachGroupPP from './tableParts/TeachGroupPP'

export class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            course: '',
            start: '',
            end: '',
            work: '1',
            newId: "",
            teacher: '',
            checkTR: "0",
            checkSub: "0"
        }
    }

    static propTypes = {
        addTeachgroup: PropTypes.func.isRequired,
        getTeachgroup: PropTypes.func.isRequired,
        getEmployers: PropTypes.func.isRequired,
        employee: PropTypes.array.isRequired,
        teachgroup: PropTypes.array.isRequired,
        getCourse: PropTypes.func.isRequired,
        course: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getTeachgroup()
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.name == "course") {
            this.setState({ teacher: new String(this.props.course.filter(cf => cf.id == e.target.value).map(c => c.teacher)) })
        }
    }

    onSubmit = e => {
        e.preventDefault();
        const { course, start, end, work, teacher } = this.state
        const teachGroup = { course, start, end, work, teacher }
        console.log(teachGroup)
        this.props.addTeachgroup(teachGroup)
        this.setState({ checkSub: "1" })
        setTimeout(() => {
            try {
                let arr = this.props.teachgroup.length - 1
                console.log(this.props.teachgroup[arr].id)
                this.setState({ newId: this.props.teachgroup[arr].id })
            } catch { }
        }, 500)

    };

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
        console.log(this.state.work)
    }

    updateData = val => {
        this.setState({ checkTR: val })
        if (this.state.checkTR == "2") {
            this.setState({
                course: '',
                start: '',
                end: '',
                work: '',
                teacher: ''
            });
        }
    }

    render() {
        const { course, start, end, work, teacher } = this.state
        return (
            <div className="modal fade" id="modalLoginFormTG" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Добавление новой учебной группы</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="modal-body mx-3">
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
                                            {this.props.employee.map(u => (
                                                <option key={u.id} value={u.id}>{u.second_name + " " + u.name + " " + u.last_name}</option>
                                            ))}
                                        </select>
                                    </div>
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


                            </div>

                            {this.state.checkSub == "0" ? <div className="modal-footer d-flex justify-content-center">
                                <button className="btn btn-dark" type="submit">Добавить</button>
                            </div> : null}
                        </form>
                        <div className="container">
                            {this.state.checkSub == "0" ? null : <TeachGroupPP newId={this.state.newId} updateData={this.updateData} />}

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    course: state.course.course,
    teachgroup: state.teachgroup.teachgroup,
    employee: state.employee.employee
})

export default connect(mapStateToProps, { addTeachgroup, getCourse, getTeachgroup, getEmployers })(Form)
