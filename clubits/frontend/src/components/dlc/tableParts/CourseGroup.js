import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getCoursgroup, putCoursgroup, deleteCoursgroup } from '../../../actions/courseGroup'

import { MDBDataTable } from 'mdbreact'

export class CourseGroup extends Component {

    static propTypes = {
        courseGroup: PropTypes.array.isRequired,
        getCoursgroup: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getCoursgroup()
    }

    render() {
        return (
            <Fragment>
                <table className="table table-striped table-sm border mt-5">
                    <thead>
                        <tr>
                            <th>Номер</th>
                            <th>Название</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.courseGroup.filter(u => u.course == this.props.courseId).map(usr => (
                            <tr key={usr.id}>
                                <td>{usr.id}</td>
                                <td>{usr.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    courseGroup: state.courseGroup.courseGroup
})

export default connect(mapStateToProps, { getCoursgroup })(CourseGroup)
