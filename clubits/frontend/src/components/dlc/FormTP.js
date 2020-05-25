import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addTeachplan } from '../../actions/teachplan'
import { getTeachgroup } from '../../actions/teachgroup'
import { getSections } from '../../actions/sections'
import { getCourse } from '../../actions/course'

export class Form extends Component {

    state = {
        name: '',
        theme: '',
        teach_group: '',
        time1: '',
        time2: '',
        section: '',
        descrip: ''
    }

    static propTypes = {
        getSections: PropTypes.func.isRequired,
        getTeachgroup: PropTypes.func.isRequired,
        getCourse: PropTypes.func.isRequired,
        addTeachplan: PropTypes.func.isRequired,
        teachgroup: PropTypes.array.isRequired,
        sections: PropTypes.array.isRequired,
        course: PropTypes.array.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { name, theme, teach_group, time1, time2, section, descrip } = this.state
        const teachPlan = { name, theme, teach_group, time1, time2, section, descrip }
        this.props.addTeachplan(teachPlan)
        this.setState({
            name: "",
            theme: '',
            teach_group: '',
            time1: '',
            time2: '',
            section: '',
            descrip: ''
        });
    };

    render() {
        const { name, theme, teach_group, time1, time2, section, descrip } = this.state
        return (
            <div className="modal fade" id="modalLoginFormTP" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Добавление учебного плана</h4>
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
                                        <span className="input-group-text md-addon" id="material-addon3">Тема: </span>
                                    </div>
                                    <input
                                        className="form-control validate name"
                                        type="text"
                                        name="theme"
                                        onChange={this.onChange}
                                        value={theme}
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
                                        {this.props.teachgroup.filter(tg => tg.work == 1).map(u => (
                                            <option key={u.id} value={u.id}>{this.props.course.filter(c => c.id == u.course).map(ct => ct.name)}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="md-form mb-5 input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text md-addon" id="material-addon3">Время астрономическое: </span>
                                    </div>
                                    <input
                                        className="form-control validate name"
                                        type="time"
                                        name="time1"
                                        onChange={this.onChange}
                                        value={time1}
                                    />
                                </div>

                                <div className="md-form mb-5 input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text md-addon" id="material-addon3">Время двоичное: </span>
                                    </div>
                                    <input
                                        className="form-control validate name"
                                        type="text"
                                        name="time2"
                                        onChange={this.onChange}
                                        value={time2}
                                    />
                                </div>

                                <div className="md-form mb-4">
                                    <select
                                        className="browser-default custom-select lis"
                                        name="section"
                                        onChange={this.onChange}
                                        value={section}
                                    >
                                        <option value="" disabled>Выберите дисциплину</option>
                                        {this.props.sections.map(u => (
                                            <option key={u.id} value={u.id}>{u.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="md-form mb-5 input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text md-addon" id="material-addon3">Описание: </span>
                                    </div>
                                    <input
                                        className="form-control validate name"
                                        type="text"
                                        name="descrip"
                                        onChange={this.onChange}
                                        value={descrip}
                                    />
                                </div>


                            </div>

                            <div className="modal-footer d-flex justify-content-center" data-toggle="modal" data-target="#modalLoginFormTP">
                                <button className="btn btn-dark" type="submit">Добавить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    sections: state.sections.sections,
    teachgroup: state.teachgroup.teachgroup,
    course: state.course.course
})

export default connect(mapStateToProps, { addTeachplan, getTeachgroup, getSections, getCourse })(Form)
