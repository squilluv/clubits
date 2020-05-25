import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addPlace } from '../../actions/place'

import InputMask from 'react-input-mask'

export class Form extends Component {

    state = {
        name: '',
        index: '',
        adress: '',
        phone: '',
        director: ''
    }

    static propTypes = {
        addPlace: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { name, index, adress, phone, director } = this.state
        const place = { name, index, adress, phone, director }
        this.props.addPlace(place)
        this.setState({
            name: "",
            index: '',
            adress: '',
            phone: '',
            director: ''
        });
    };

    render() {
        const { name, index, adress, phone, director } = this.state
        return (
            <div className="modal fade" id="modalLoginFormPl" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Добавление нового места</h4>
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
                                    <InputMask className="form-control" mask="+7 (999) 999-99-99" type="text" name="phone" value={phone} onChange={this.onChange} />
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

                            <div className="modal-footer d-flex justify-content-center" data-toggle="modal" data-target="#modalLoginFormPl">
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
})

export default connect(mapStateToProps, { addPlace })(Form)
