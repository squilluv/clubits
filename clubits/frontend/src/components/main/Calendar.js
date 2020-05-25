import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes, { array } from 'prop-types'

import { getVisited } from '../../actions/visited'
import { getTeachgroup } from '../../actions/teachgroup'
import { getTeachplan } from '../../actions/teachplan'
import { getEmployers } from '../../actions/employee'

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';

import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import './main.scss'

export class Calendar extends React.Component {

    static propTypes = {
        getVisited: PropTypes.func.isRequired,
        visited: PropTypes.array.isRequired,
        getTeachgroup: PropTypes.func.isRequired,
        teachgroup: PropTypes.array.isRequired,
        getEmployers: PropTypes.func.isRequired,
        employee: PropTypes.array.isRequired,
        getTeachplan: PropTypes.func.isRequired,
        teachplan: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getVisited()

    }

    state = {
        calendarWeekends: true,
        eventColor: '#000',
        textColor: 'white',
        displayEventTime: true,
        modal: false,
        title: ''
    }

    eventClick = (e) => {
        this.setState({
            modal: !this.state.modal,
            title: e.event._def.title
        });
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const event = []
        this.props.visited.map(v => event.push({ title: v.title, start: v.date + " " + v.start, end: v.date + " " + v.end }))
        const start = this.props.visited.filter(vf => vf.title == this.state.title).map(v => v.date + " " + v.start)
        const end = this.props.visited.filter(vf => vf.title == this.state.title).map(v => v.date + " " + v.end)
        const teacher = this.props.visited.filter(vf => vf.title == this.state.title).map(v => v.teacher)
        const tplan = this.props.visited.filter(vf => vf.title == this.state.title).map(v => v.teach_plan)
        return (
            <Fragment>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>{this.state.title}</MDBModalHeader>
                    <MDBModalBody>
                        <div className="md-form mb-5 input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text md-addon" id="material-addon3">Занятие: </span>
                            </div>
                            <input
                                className="form-control validate"
                                type="text"
                                value={this.props.teachplan.filter(tpf => tpf.id == tplan).map(tp => tp.name)}
                                disabled

                            />
                        </div>
                        <div className="md-form mb-5 input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text md-addon" id="material-addon3">Тема занятия: </span>
                            </div>
                            <input
                                className="form-control validate"
                                type="text"
                                value={this.props.teachplan.filter(tpf => tpf.id == tplan).map(tp => tp.theme)}
                                disabled

                            />
                        </div>
                        <div className="md-form mb-5 input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text md-addon" id="material-addon3">Начало: </span>
                            </div>
                            <input
                                className="form-control validate"
                                type="text"
                                value={start}
                                disabled

                            />
                        </div>
                        <div
                            className="md-form mb-5 input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text md-addon" id="material-addon3">Конец: </span>
                            </div>
                            <input
                                className="form-control validate"
                                type="text"
                                value={end}
                                disabled

                            />
                        </div>
                        <div className="md-form mb-5 input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text md-addon" id="material-addon3">Преподаватель: </span>
                            </div>
                            <input
                                className="form-control validate"
                                type="text"
                                value={this.props.employee.filter(ef => ef.id == teacher).map(e => e.second_name + " " + e.name + " " + e.last_name)}
                                disabled

                            />
                        </div>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="black" onClick={this.toggle}>Закрыть</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
                <FullCalendar defaultView="listWeek" header={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                }} plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]} eventClick={this.eventClick} eventColor={this.state.eventColor} eventTextColor={this.state.textColor} displayEventTime={this.state.displayEventTime} weekends={this.state.calendarWeekends} eventClick={this.eventClick} events={event} />
            </Fragment>
        )
    }

}

const mapStateToProps = state => ({
    visited: state.visited.visited,
    teachgroup: state.teachgroup.teachgroup,
    employee: state.employee.employee,
    teachplan: state.teachplan.teachplan
})

export default connect(mapStateToProps, { getVisited, getTeachgroup, getEmployers, getTeachplan })(Calendar)