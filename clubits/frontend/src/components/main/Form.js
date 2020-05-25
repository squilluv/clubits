import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTeachgroupstudent } from '../../actions/teachgroupstudent'
import { getTeachgroup } from '../../actions/teachgroup'
import { getCourse } from '../../actions/course'
import { getStudents } from '../../actions/students'

export class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            teach_groop: "",
            student: "",
            showRes: "0",
            user: "",
            checkOper: "0"
        }
    }

    static propTypes = {
        students: PropTypes.array.isRequired,
        getStudents: PropTypes.func.isRequired,
        teachgroup: PropTypes.array.isRequired,
        getTeachgroup: PropTypes.func.isRequired,
        addTeachgroupstudent: PropTypes.func.isRequired,
        getCourse: PropTypes.func.isRequired,
        course: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getTeachgroup()
        this.props.getCourse()
        this.props.getStudents()
        this.props.getTeachgroup()
        setTimeout(() => {
            this.df()
        }, 300);
    }

    df() {
        if (this.props.userId == "") {

        } else {
            this.setState({ user: this.props.userId })
        }
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { teach_groop, student } = this.state
        const teachGroup = { teach_groop, student }
        this.props.addTeachgroupstudent(teachGroup)
        this.setState({
            student: '',
            showRes: "0"
        });
    };

    render() {
        const { teach_groop, student, id, user } = this.state
        return (
            <Fragment>
                <div className="modal fade" id="modalLoginFormDSF" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Добавление нового пользователя</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.onSubmit}>
                                <div className="modal-body mx-3">
                                    <div className="md-form mb-4">
                                        <select name="student" className="browser-default custom-select lis" searchable="Search here.."
                                            onChange={this.onChange}
                                            value={student} >
                                            <option value="" disabled>Выберите студента</option>
                                            {this.props.students.filter(sf => sf.user == user).map(u => (
                                                <option key={u.id} value={u.id}>{u.second_name + " " + u.name + " " + u.last_name}</option>
                                            ))}

                                        </select>
                                    </div>
                                    <div className="md-form mb-4">
                                        <select name="teach_groop" className="browser-default custom-select lis" searchable="Search here.."
                                            onChange={this.onChange}
                                            value={teach_groop} >
                                            <option value="" disabled>Выберите учебную группу</option>
                                            {this.props.teachgroup.map(u => (
                                                <option key={u.id} value={u.id}>{this.props.course.filter(cf => cf.id == u.course).map(c => c.name)}</option>
                                            ))}

                                        </select>
                                    </div>
                                </div>
                                <div className="modal-footer d-flex justify-content-center" data-toggle="modal" data-target="#modalLoginFormDSF">
                                    <button className="btn btn-dark" type="submit">Добавить</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    teachgroup: state.teachgroup.teachgroup,
    students: state.students.students,
    course: state.course.course
})

export default connect(mapStateToProps, { getCourse, getTeachgroup, addTeachgroupstudent, getStudents })(Form)