import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addSections } from '../../actions/sections'

export class Form extends Component {

    state = {
        name: '',
    }

    static propTypes = {
        addSections: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { name } = this.state
        const sections = { name }
        this.props.addSections(sections)
        this.setState({
            name: ""
        });
    };

    render() {
        const { name } = this.state
        return (
            <div className="modal fade" id="modalLoginFormSe" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Добавление дисциплины</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="modal-body mx-3">
                                <div className="md-form mb-5">
                                    <input
                                        className="form-control validate"
                                        type="text"
                                        name="name"
                                        onChange={this.onChange}
                                        value={name}
                                    />
                                    <label data-error="wrong" data-success="right">Наименование</label>
                                </div>


                            </div>

                            <div className="modal-footer d-flex justify-content-center" data-toggle="modal" data-target="#modalLoginFormSe">
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

export default connect(mapStateToProps, { addSections })(Form)
