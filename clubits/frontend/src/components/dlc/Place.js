import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getPlace, putPlace, deletePlace } from '../../actions/place'

import { MDBDataTable } from 'mdbreact'

export class Place extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            index: '',
            adress: '',
            phone: '',
            director: '',
            editModalShow: false
        }
    }

    static propTypes = {
        getPlace: PropTypes.func.isRequired,
        putPlace: PropTypes.func.isRequired,
        deletePlace: PropTypes.func.isRequired,
        place: PropTypes.array.isRequired,
    }

    componentDidMount() {
        this.props.getPlace()
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = e => {
        e.preventDefault();
        const { id, name, index, adress, phone, director } = this.state
        const place = { id, name, index, adress, phone, director }
        this.props.putPlace(place)
        setTimeout(() => {
            this.updateTable()
        }, 500);
    }

    updateTable() {
        this.props.getPlace()
    }

    render() {
        const { id, name, index, adress, phone, director } = this.state
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
                    label: 'Адрес',
                    field: 'adress',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Телефон',
                    field: 'phone',
                    sort: 'asc',
                    width: 200
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
            rows: this.props.place.map(u => ({
                id: u.id,
                name: <a
                    className="font-weight-bold"
                    data-toggle="modal" data-target="#modalInfoFormPl"
                    onClick={() => this.setState({ editModalShow: true, id: u.id, name: u.name, index: u.index, adress: u.adress, phone: u.phone, director: u.director })}
                >
                    {u.name}
                </a>,
                adress: u.adress,
                phone: u.phone,
                putbut:
                    <Fragment>
                        <a
                            className="text-secondary font-weight-bold"
                            data-toggle="modal" data-target="#modalPutFormPl"
                            onClick={() => this.setState({ editModalShow: true, id: u.id, name: u.name, index: u.index, adress: u.adress, phone: u.phone, director: u.director })}
                        >PUT</a>
                    </Fragment>
                ,
                delbut: <a
                    onClick={this.props.deletePlace.bind(this, u.id)}
                    className="text-danger font-weight-bold"
                >DEL
                </a>
            }))
        }
        return (
            <Fragment>
                <div className="text-right">
                    <a className="btn btn-dark btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginFormPl">Добавить</a>
                </div>
                <div className="modal fade" id="modalPutFormPl" role="dialog" aria-labelledby="myModalLabel"
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
                                            <span className="input-group-text md-addon" id="material-addon3">Индекс: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="index"
                                            onChange={this.onChange}
                                            value={index}


                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Адрес: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="adress"
                                            onChange={this.onChange}
                                            value={adress}


                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Телефон: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="phone"
                                            onChange={this.onChange}
                                            value={phone}


                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Директор: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="director"
                                            onChange={this.onChange}
                                            value={director}


                                        />

                                    </div>

                                </div>
                                <div className="modal-footer d-flex justify-content-center" data-toggle="modal" data-target="#modalPutFormPl">
                                    <button className="btn btn-dark" type="submit">Изменить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modalInfoFormPl" role="dialog" aria-labelledby="myModalLabel"
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
                                            <span className="input-group-text md-addon" id="material-addon3">Индекс: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="index"
                                            onChange={this.onChange}
                                            value={index}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Адрес: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="adress"
                                            onChange={this.onChange}
                                            value={adress}
                                            disabled

                                        />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Телефон: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="phone"
                                            onChange={this.onChange}
                                            value={phone}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Директор: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="director"
                                            onChange={this.onChange}
                                            value={director}
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
    place: state.place.place
})

export default connect(mapStateToProps, { getPlace, putPlace, deletePlace })(Place)
