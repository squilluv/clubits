import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getContract } from '../../actions/contract'
import { getStudents } from '../../actions/students'
import { getTeachgroup } from '../../actions/teachgroup'
import { getPersons } from '../../actions/persons'
import { getCourse } from '../../actions/course'

export class ContractUser extends Component {

    state = {
        date: '',
        status: '',
        student: '',
        person: '',
        teach_group: '',
        start: '',
        end: '',
        price: ''
    }

    static propTypes = {
        getContract: PropTypes.func.isRequired,
        contract: PropTypes.array.isRequired,
        students: PropTypes.array.isRequired,
        getStudents: PropTypes.func.isRequired,
        persons: PropTypes.array.isRequired,
        getPersons: PropTypes.func.isRequired,
        teachgroup: PropTypes.array.isRequired,
        getTeachgroup: PropTypes.func.isRequired,
        course: PropTypes.array.isRequired,
        getCourse: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getStudents()
        this.props.getPersons()
        this.props.getTeachgroup()
        this.props.getCourse()
    }

    render() {

        return (
            <Fragment>
                {this.props.contract.filter(cf => cf.person == this.props.persons.filter(pf => pf.user == this.props.userId).map(p => p.id)).map(c => (<div key={c.id}>
                    <div className="md-form mb-5 input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text md-addon" id="material-addon3">Дата: </span>
                        </div>
                        <input
                            className="form-control validate name"
                            type="date"
                            value={c.date}
                            disabled
                        />
                    </div>
                    <div className="md-form mb-5 input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text md-addon" id="material-addon3">Статус: </span>
                        </div>
                        <input
                            className="form-control validate name"
                            type="text"
                            value={c.status}
                            disabled
                        />
                    </div>
                    <div className="md-form mb-5 input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-prepend">
                                <span className="input-group-text md-addon" id="material-addon123">Студент: </span>
                            </div>
                            <input
                                className="form-control"
                                type="text"
                                value={this.props.students.filter(sf => sf.id == c.student).map(s => s.second_name + " " + s.name + " " + s.last_name)}
                                disabled

                            />
                        </div>
                    </div>
                    <div className="md-form mb-5 input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-prepend">
                                <span className="input-group-text md-addon" id="material-addon123">Физ лицо: </span>
                            </div>
                            <input
                                className="form-control"
                                type="text"
                                value={this.props.persons.filter(pf => pf.id == c.person).map(p => p.second_name + " " + p.name + " " + p.last_name)}
                                disabled

                            />
                        </div>
                    </div>
                    <div className="md-form mb-5 input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-prepend">
                                <span className="input-group-text md-addon" id="material-addon123">Учебная группа: </span>
                            </div>
                            <input
                                className="form-control"
                                type="text"
                                value={this.props.teachgroup.filter(tf => tf.id == c.teach_group).map(t => this.props.course.filter(cof => cof.id == t.course).map(co => co.name))}
                                disabled

                            />
                        </div>
                    </div>
                    <div className="md-form mb-5 input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text md-addon" id="material-addon123">Начало: </span>
                        </div>
                        <input
                            className="form-control"
                            type="date"
                            value={c.start}
                            disabled

                        />
                    </div>
                    <div className="md-form mb-5 input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text md-addon" id="material-addon123">Конец: </span>
                        </div>
                        <input
                            className="form-control"
                            type="date"
                            value={c.end}
                            disabled

                        />
                    </div>
                    <div className="md-form mb-5 input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text md-addon" id="material-addon123">Цена: </span>
                        </div>
                        <input
                            className="form-control"
                            type="text"
                            value={c.price}
                            disabled

                        />
                    </div>
                </div>)
                )}
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    contract: state.contract.contract,
    students: state.students.students,
    persons: state.persons.persons,
    teachgroup: state.teachgroup.teachgroup,
    course: state.course.course
})

export default connect(mapStateToProps, { getContract, getPersons, getStudents, getTeachgroup, getCourse })(ContractUser)
