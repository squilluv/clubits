import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getVisitedstudents } from '../../../actions/visitedstudents'
import { getStudents } from '../../../actions/students'

export class VisitedStudents extends Component {

    static propTypes = {
        visitedstudents: PropTypes.array.isRequired,
        getVisitedstudents: PropTypes.func.isRequired,
        students: PropTypes.array.isRequired,
        getStudents: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getStudents()
        this.props.getVisitedstudents()
    }

    render() {
        return (
            <Fragment>
                <table className="table table-striped table-sm border mt-5">
                    <thead>
                        <tr>
                            <th>Номер</th>
                            <th>Студент</th>
                            <th>Присутствие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.visitedstudents.filter(u => u.visited == this.props.courseId).map(usr => (
                            <tr key={usr.id}>
                                <td>{usr.id}</td>
                                <td>{this.props.students.filter(sf => sf.id == usr.student).map(s => s.second_name + " " + s.name + " " + s.last_name)}</td>
                                <td>{usr.have == 1 ? "Присутствовал" : "Не присутствовал"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    visitedstudents: state.visitedstudents.visitedstudents,
    students: state.students.students
})

export default connect(mapStateToProps, { getVisitedstudents, getStudents })(VisitedStudents)
