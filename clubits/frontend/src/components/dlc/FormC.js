import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addCourse, getCourse } from '../../actions/course'
import { getEmployers } from '../../actions/employee'

import CourseGroupPP from './tableParts/CourseGroupPP'

export class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            short_name: '',
            yo_from: '',
            yo_to: '',
            min_students: '',
            max_students: '',
            teacher: '',
            newId: "",
            checkTR: "0",
            checkSub: "0"
        }
    }

    static propTypes = {
        getCourse: PropTypes.func.isRequired,
        course: PropTypes.array.isRequired,
        addCourse: PropTypes.func.isRequired,
        employee: PropTypes.array.isRequired,
        getEmployers: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getEmployers()
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { name, short_name, yo_from, yo_to, min_students, max_students, teacher } = this.state
        const course = { name, short_name, yo_from, yo_to, min_students, max_students, teacher }
        this.props.addCourse(course)
        this.setState({ checkSub: "1" })
        setTimeout(() => {
            try {
                let arr = this.props.course.length - 1
                console.log(this.props.course[arr].id)
                this.setState({ newId: this.props.course[arr].id })
            } catch { }
        }, 500)

    };

    updateData = () => {
        this.setState({
            name: '',
            short_name: '',
            yo_from: '',
            yo_to: '',
            min_students: '',
            max_students: '',
            teacher: ''
        })
    }

    render() {
        const { name, short_name, yo_from, yo_to, min_students, max_students, teacher } = this.state
        return (
            <div className="modal fade" id="modalLoginFormC" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Добавление нового курса</h4>
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

                            {this.state.checkSub == "0" ? <div className="modal-footer d-flex justify-content-center">
                                <button className="btn btn-dark" type="submit">Добавить</button>
                            </div> : null}
                        </form>
                        <div className="container">
                            {this.state.checkSub == "0" ? null : <CourseGroupPP newId={this.state.newId} updateData={this.updateData} />}

                        </div>
                        <div className="d-flex justify-content-center" data-toggle="modal" data-target="#modalPutFormV">
                            <button className="btn btn-white black-text" onClick={this.updateData}>Сохранить изменения</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    employee: state.employee.employee,
    course: state.course.course
})

export default connect(mapStateToProps, { addCourse, getEmployers, getCourse })(Form)
