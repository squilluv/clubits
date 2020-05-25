import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getTeachplan, putTeachplan, deleteTeachplan } from '../../actions/teachplan'
import { getTeachgroup } from '../../actions/teachgroup'
import { getSections } from '../../actions/sections'
import { getCourse } from '../../actions/course'

import { MDBDataTable } from 'mdbreact'

export class TeachPlan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            theme: '',
            teach_group: '',
            time1: '',
            time2: '',
            section: '',
            descrip: '',
            editModalShow: false
        }
    }

    static propTypes = {
        getTeachplan: PropTypes.func.isRequired,
        getSections: PropTypes.func.isRequired,
        getTeachgroup: PropTypes.func.isRequired,
        getCourse: PropTypes.func.isRequired,
        putTeachplan: PropTypes.func.isRequired,
        deleteTeachplan: PropTypes.func.isRequired,
        teachgroup: PropTypes.array.isRequired,
        sections: PropTypes.array.isRequired,
        teachplan: PropTypes.array.isRequired,
        course: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getTeachgroup()
        this.props.getTeachplan()
        this.props.getSections()
        this.props.getCourse()
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = e => {
        e.preventDefault();
        const { id, name, theme, teach_group, time1, time2, section, descrip } = this.state
        const teachplan = { id, name, theme, teach_group, time1, time2, section, descrip }
        this.props.putTeachplan(teachplan)
        setTimeout(() => {
            this.updateTable()
        }, 500);
    }

    updateTable() {
        this.props.getTeachplan()
    }

    render() {
        const { id, name, theme, teach_group, time1, time2, section, descrip } = this.state
        const datas = {
            columns: [
                {
                    label: 'Номер',
                    field: 'id',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Название',
                    field: 'name',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Тема',
                    field: 'theme',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: '',
                    field: 'putbut',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: '',
                    field: 'delbut',
                    sort: 'asc',
                    width: 200
                }
            ],
            rows: this.props.teachplan.map(u => ({
                id: u.id,
                name: <a
                    className="font-weight-bold"
                    data-toggle="modal" data-target="#modalInfoFormTP"
                    onClick={() => this.setState({ editModalShow: true, id: u.id, name: u.name, theme: u.theme, teach_group: u.teach_group, time1: u.time1, time2: u.time2, section: u.section, descrip: u.descrip })}
                >
                    {u.name}
                </a>,
                theme: u.theme,
                putbut:
                    <Fragment>
                        <a
                            className="text-secondary font-weight-bold"
                            data-toggle="modal" data-target="#modalPutFormTP"
                            onClick={() => this.setState({ editModalShow: true, id: u.id, name: u.name, theme: u.theme, teach_group: u.teach_group, time1: u.time1, time2: u.time2, section: u.section, descrip: u.descrip })}
                        >PUT</a>
                    </Fragment>
                ,
                delbut: <a
                    onClick={this.props.deleteTeachplan.bind(this, u.id)}
                    className="text-danger font-weight-bold"
                >DEL
                </a>
            }))
        }
        return (
            <Fragment>
                <div className="text-right">
                    <a className="btn btn-dark btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginFormTP">Добавить</a>
                </div>
                <div className="modal fade" id="modalPutFormTP" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Изменить данные</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.onSubmit}>
                                <div className="modal-body mx-3">
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">ID: </span>
                                        </div>
                                        <input
                                            className="form-control validate"
                                            type="text"
                                            name="id"
                                            onChange={this.onChange}
                                            value={id}
                                            disabled

                                        />
                                    </div>
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
                                <div className="modal-footer d-flex justify-content-center" data-toggle="modal" data-target="#modalPutFormTP">
                                    <button className="btn btn-dark" type="submit">Изменить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modalInfoFormTP" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">{name}</h4>
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
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            onChange={this.onChange}
                                            value={name}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Тема: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="theme"
                                            onChange={this.onChange}
                                            value={theme}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Учебная группа: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="teach_group"
                                            onChange={this.onChange}
                                            value={this.props.teachgroup.filter(tg => tg.id == teach_group).map(u => this.props.course.filter(c => c.id == u.course).map(finaly => finaly.name))}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Время астрономическое: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="time1"
                                            onChange={this.onChange}
                                            value={time1}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Время двоичное: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="time2"
                                            onChange={this.onChange}
                                            value={time2}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Дисциплина: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="section"
                                            onChange={this.onChange}
                                            value={this.props.sections.filter(s => s.id == section).map(u => u.name)}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Описание: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="descrip"
                                            onChange={this.onChange}
                                            value={descrip}
                                            disabled

                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <MDBDataTable
                        striped
                        bordered
                        small
                        data={datas}
                    />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    sections: state.sections.sections,
    teachplan: state.teachplan.teachplan,
    teachgroup: state.teachgroup.teachgroup,
    course: state.course.course
})

export default connect(mapStateToProps, { getSections, getTeachplan, getTeachgroup, getCourse, putTeachplan, deleteTeachplan })(TeachPlan)
