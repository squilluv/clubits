import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getCoursgroup, addCoursgroup, putCoursgroup, deleteCoursgroup } from '../../../actions/courseGroup'

import { MDBDataTable } from 'mdbreact'

export class CourseGroupPP extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: "",
            name: "",
            course: "",
            showRes: "0",
            checkOper: "0"
        }
    }

    static propTypes = {
        courseGroup: PropTypes.array.isRequired,
        getCoursgroup: PropTypes.func.isRequired,
        addCoursgroup: PropTypes.func.isRequired,
        putCoursgroup: PropTypes.func.isRequired,
        deleteCoursgroup: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getCoursgroup()
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        if (this.state.checkOper == "1") {
            const { name, course, id } = this.state
            const courseGroup = { name, course, id }
            this.props.putCoursgroup(courseGroup)
            this.setState({
                name: '',
                id: '',
                showRes: "0"
            });
            setTimeout(() => {
                this.props.getCoursgroup()
            }, 400)
        } else {
            const { name, course } = this.state
            const courseGroup = { name, course }
            this.props.addCoursgroup(courseGroup)
            this.setState({
                name: '',
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
        this.setState({ course: this.props.newId })
    }

    render() {
        const { name, course, id } = this.state
        return (
            <Fragment>
                {this.state.showRes == "1" ? <div className="text-left">
                    <h3><a className="primary-color" onClick={this.onClick}>Cкрыть</a></h3>
                </div> : <div className="text-left">
                        <h3><a className="primary-color" onClick={this.onClick}>Добавить</a></h3>
                    </div>}
                {this.state.showRes == "1" ? <form onSubmit={this.onSubmit}>
                    <table className="table table-sm">
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        className="form-control validate name"
                                        type="text"
                                        name="name"
                                        onChange={this.onChange}
                                        value={name}
                                    />
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
                                        name="course"
                                        onChange={this.onChange}
                                        value={course}
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
                </form> : null}

                <table className="table table-striped table-sm border mt-5">
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.courseGroup.filter(u => u.course == this.props.newId).map(usr => (
                            <tr key={usr.id}>
                                <td>{usr.name}</td>
                                <td><Fragment>
                                    <a
                                        className="text-secondary font-weight-bold"
                                        onClick={() => this.setState({ id: usr.id, name: usr.name, checkOper: "1", showRes: "1" })}
                                    >PUT</a>
                                </Fragment></td>
                                <th><a
                                    onClick={this.props.deleteCoursgroup.bind(this, usr.id)}
                                    className="text-danger font-weight-bold"
                                >DEL
                </a></th>
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

export default connect(mapStateToProps, { getCoursgroup, addCoursgroup, putCoursgroup, deleteCoursgroup })(CourseGroupPP)