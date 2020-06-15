import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getTeachgroupstudent, addTeachgroupstudent, putTeachgroupstudent, deleteTeachgroupstudent } from '../../../actions/teachgroupstudent'
import { getStudents } from '../../../actions/students'

import { MDBDataTable } from 'mdbreact'

export class TeachGroupPut extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: "",
            teach_groop: "",
            student: "",
            showRes: "0",
            checkOper: "0",
            checkFuckingClick: ""
        }
    }

    static propTypes = {
        students: PropTypes.array.isRequired,
        getStudents: PropTypes.func.isRequired,
        teachgroupstudent: PropTypes.array.isRequired,
        getTeachgroupstudent: PropTypes.func.isRequired,
        addTeachgroupstudent: PropTypes.func.isRequired,
        putTeachgroupstudent: PropTypes.func.isRequired,
        deleteTeachgroupstudent: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getTeachgroupstudent()
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.name == "student") {
            const sid = new String(this.props.teachgroupstudent.filter(vsf => vsf.teach_groop == this.state.teach_groop && vsf.student == e.target.value).map(vs => vs.id))
            if (sid == "") {

            } else {
                this.setState({ student: "" })
            }
        }
    }

    onSubmit = e => {
        e.preventDefault();
        if (this.state.checkOper == "1") {
            const { teach_groop, student, id } = this.state
            const teachGroup = { teach_groop, student, id }
            this.props.putTeachgroupstudent(teachGroup)
            this.setState({
                student: '',
                id: '',
                showRes: "0"
            });
            setTimeout(() => {
                this.props.getTeachgroupstudent()
            }, 400)
        } else {
            const { teach_groop, student } = this.state
            const teachGroup = { teach_groop, student }
            this.props.addTeachgroupstudent(teachGroup)
            this.setState({
                student: '',
                showRes: "0"
            });
        }
    };

    onClick = e => {
        if (this.state.showRes == "0") {
            this.setState({ showRes: "1", checkOper: "0" })
        } else {
            this.setState({ showRes: "0" })
        }
        this.setState({ teach_groop: this.props.courseId })
    }

    render() {
        const { teach_groop, student, id } = this.state
        return (
            <Fragment>
                {this.state.showRes == "1" ? <div className="text-left">
                    <h3><a className="primary-color" onClick={() => { this.setState({ showRes: "0" }); this.onClick }}>Cкрыть</a></h3>
                </div> : <div className="text-left">
                        <h3><a className="primary-color" onClick={() => { this.setState({ showRes: "1", checkOper: "0", student: "", teach_groop: this.props.courseId }); this.onClick }}>Добавить</a></h3>
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
                                            name="teach_groop"
                                            onChange={this.onChange}
                                            value={teach_groop}
                                            hidden
                                        />
                                    </td>
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
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.teachgroupstudent.filter(u => u.teach_groop == this.props.courseId).map(usr => (
                            <tr key={usr.id}>
                                <td>{this.props.students.filter(sf => sf.id == usr.student).map(us => us.second_name + " " + us.name + " " + us.last_name)}</td>
                                <td><Fragment>
                                    <a
                                        className="text-secondary font-weight-bold"
                                        onClick={() => { this.setState({ id: usr.id, student: usr.id, checkOper: "1", showRes: "1", teach_groop: this.props.courseId }); this.onClick }}
                                    >PUT</a>
                                </Fragment></td>
                                <th><a
                                    onClick={this.props.deleteTeachgroupstudent.bind(this, usr.id)}
                                    className="text-danger font-weight-bold"
                                >DEL
                </a></th>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="d-flex justify-content-center" data-toggle="modal" data-target="#modalPutFormTG">
                    <button className="btn btn-white black-text">Сохранить изменения</button>
                </div>
            </Fragment >
        )
    }
}

const mapStateToProps = state => ({
    teachgroupstudent: state.teachgroupstudent.teachgroupstudent,
    students: state.students.students
})

export default connect(mapStateToProps, { getTeachgroupstudent, addTeachgroupstudent, putTeachgroupstudent, deleteTeachgroupstudent, getStudents })(TeachGroupPut)