import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getMessage, addMessage } from '../../actions/message'
import { getTeachgroup } from '../../actions/teachgroup'
import { getCourse } from '../../actions/course'
import { getUsers } from '../../actions/users'
import { getStudents } from '../../actions/students'
import { getTeachgroupstudent } from '../../actions/teachgroupstudent'

export class Chat extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            load: '0',
            user: '',
            teach_group: '',
            message: '',
            date: ''
        }
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
        addMessage: PropTypes.func.isRequired,
        getMessage: PropTypes.func.isRequired,
        message: PropTypes.array.isRequired,
        getTeachgroup: PropTypes.func.isRequired,
        teachgroup: PropTypes.array.isRequired,
        getCourse: PropTypes.func.isRequired,
        course: PropTypes.array.isRequired,
        getUsers: PropTypes.func.isRequired,
        users: PropTypes.array.isRequired,
        getStudents: PropTypes.func.isRequired,
        students: PropTypes.array.isRequired,
        getTeachgroupstudent: PropTypes.func.isRequired,
        teachgroupstudent: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getMessage()
        this.props.getUsers()
        this.props.getStudents()
        this.props.getTeachgroup()
        this.props.getTeachgroupstudent()
        this.props.getCourse()
        if (this.props.auth.user == null) {

        } else {
            this.setState({ user: String(this.props.auth.user.id) })
        }
        this.scrollToBottom()
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        this.scrollToBottom()
    }

    componentDidUpdate() {

    }

    onSubmit = e => {
        e.preventDefault();
        const { user, teach_group, message, date } = this.state
        const messageadd = { user, teach_group, message, date }
        this.props.addMessage(messageadd)
        this.setState({
            load: '1',
            date: '',
            message: ''
        });
        this.scrollToBottom()
    };

    scrollToBottom() {

        setTimeout(() => {
            try {
                var list = document.getElementById("list");
                list.scrollTop = 9999999999999999999999999999999999999;
            } catch { }
        }, 100);

    }

    render() {
        const { teach_group, message } = this.state
        const formatDate = date => date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) + " " + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
        return (
            <Fragment>
                <div className="row rounded-lg overflow-hidden shadow">

                    <div className="col-12 px-0">
                        <div className="px-4 py-5 chat-box bg-white">
                            <div className="scrollspy-example pre-scrollable" ref={el => { this.messagesEnd = el; }} id="list" data-spy="scroll" data-offset="0">
                                {this.props.message.filter(mf => mf.teach_group == teach_group).map(m => (<div key={m.id} className="media w-80 mb-3">
                                    <div className="media-body ml-3">
                                        <h5>{this.props.users.filter(uf => uf.id == m.user).map(u => u.username)}</h5>
                                        <div className="bg-light rounded py-2 px-3 mb-2">
                                            <p className="text-small mb-0 text-muted">{m.message}</p>
                                        </div>
                                        <p className="small text-muted">{m.date.substr(0, 10) + " " + m.date.substr(11, 5)}</p>
                                    </div>
                                </div>))
                                }
                            </div>

                            <form onSubmit={this.onSubmit} className="">
                                <div className="md-form mb-5 input-group">
                                    <div className="input-group-prepend">
                                        {this.props.userId == undefined ? <select
                                            className="browser-default custom-select lis"
                                            name="teach_group"
                                            onChange={this.onChange}
                                            value={teach_group}
                                        >
                                            <option value="" disabled>Группа</option>
                                            {this.props.teachgroup.map(u => (
                                                <option key={u.id} value={u.id}>{this.props.course.filter(cf => cf.id == u.course).map(c => c.name)}</option>
                                            ))}
                                        </select> : <select
                                            className="browser-default custom-select lis"
                                            name="teach_group"
                                            onChange={this.onChange}
                                            value={teach_group}
                                        >
                                                <option value="" disabled>Группа</option>
                                                {this.props.students.filter(sf => sf.user == this.props.userId).map(s => this.props.teachgroupstudent.filter(tgsf => tgsf.student == s.id).
                                                    map(tgs => this.props.teachgroup.filter(tgf => tgf.id == tgs.teach_groop).map(tg => (
                                                        <option key={tg.id} value={tg.id}>{this.props.course.filter(cf => cf.id == tg.course).map(c => c.name)}</option>
                                                    ))))}
                                            </select>}

                                    </div>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text md-addon" id="material-addon3">Сообщение: </span>
                                    </div>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="message"
                                        onChange={this.onChange}
                                        value={message}


                                    />
                                </div>
                                <div className="input-group-prepend">
                                    <button type="submit" onClick={() => this.setState({ date: formatDate(new Date()) })} className="btn btn-black">Отправить</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}

const mapStateToProps = state => ({
    auth: state.auth,
    message: state.message.message,
    teachgroup: state.teachgroup.teachgroup,
    course: state.course.course,
    users: state.users.users,
    students: state.students.students,
    teachgroupstudent: state.teachgroupstudent.teachgroupstudent
})

export default connect(mapStateToProps, { getMessage, getTeachgroup, addMessage, getCourse, getUsers, getStudents, getTeachgroupstudent })(Chat)