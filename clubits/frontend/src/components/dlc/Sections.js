import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getSections, putSections, deleteSections } from '../../actions/sections'

import { MDBDataTable } from 'mdbreact'

export class Sections extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            editModalShow: false
        }
    }

    static propTypes = {
        getSections: PropTypes.func.isRequired,
        putSections: PropTypes.func.isRequired,
        deleteSections: PropTypes.func.isRequired,
        sections: PropTypes.array.isRequired,
    }

    componentDidMount() {
        this.props.getSections()
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = e => {
        e.preventDefault();
        const { id, name } = this.state
        const sections = { id, name }
        this.props.putSections(sections)
        setTimeout(() => {
            this.updateTable()
        }, 500);
    }

    updateTable() {
        this.props.getSections()
    }

    render() {
        const { id, name } = this.state
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
            rows: this.props.sections.map(u => ({
                id: u.id,
                name: <a
                    className="font-weight-bold"
                    data-toggle="modal" data-target="#modalInfoFormSe"
                    onClick={() => this.setState({ editModalShow: true, id: u.id, name: u.name })}
                >
                    {u.name}
                </a>,
                putbut:
                    <Fragment>
                        <a
                            className="text-secondary font-weight-bold"
                            data-toggle="modal" data-target="#modalPutFormSe"
                            onClick={() => this.setState({ editModalShow: true, id: u.id, name: u.name })}
                        >PUT</a>
                    </Fragment>
                ,
                delbut: <a
                    onClick={this.props.deleteSections.bind(this, u.id)}
                    className="text-danger font-weight-bold"
                >DEL
                </a>
            }))
        }
        return (
            <Fragment>
                <div className="text-right">
                    <a className="btn btn-dark btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginFormSe">Добавить</a>
                </div>
                <div className="modal fade" id="modalPutFormSe" role="dialog" aria-labelledby="myModalLabel"
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

                                </div>
                                <div className="modal-footer d-flex justify-content-center" data-toggle="modal" data-target="#modalPutFormSe">
                                    <button className="btn btn-dark" type="submit">Изменить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modalInfoFormSe" role="dialog" aria-labelledby="myModalLabel"
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
    sections: state.sections.sections
})

export default connect(mapStateToProps, { getSections, putSections, deleteSections })(Sections)
