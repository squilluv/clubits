import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getContract, putContract, deleteContract } from '../../actions/contract'
import { getStudents } from '../../actions/students'
import { getTeachgroup } from '../../actions/teachgroup'
import { getPersons } from '../../actions/persons'
import { getCourse } from '../../actions/course'

import { MDBDataTable } from 'mdbreact'
import { Student } from '../main/Student'

export class Contract extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            date: '',
            status: '',
            student: '',
            person: '',
            teach_group: '',
            start: '',
            end: '',
            price: '',
            editModalShow: false
        }
    }

    static propTypes = {
        getContract: PropTypes.func.isRequired,
        putContract: PropTypes.func.isRequired,
        deleteContract: PropTypes.func.isRequired,
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
        this.props.getContract()
        this.props.getStudents()
        this.props.getPersons()
        this.props.getTeachgroup()
        this.props.getCourse()
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = e => {
        e.preventDefault();
        const { id, date, status, student, person, teach_group, start, end, price } = this.state
        const contract = { id, date, status, student, person, teach_group, start, end, price }
        this.props.putContract(contract)
        setTimeout(() => {
            this.updateTable()
        }, 500);
    }

    updateTable() {
        this.props.getContract()
    }

    PrintContract() {
        var filename = ""
        var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word'" +
            " xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
        var postHtml = "</body></html>";
        if (document.getElementById("avothz") != null) {
            var idPost = document.getElementById("avothz").innerHTML;
        }
        var html = preHtml + idPost + postHtml;

        var blob = new Blob(['\ufeff', html], {
            type: 'application/msword'
        });

        var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

        if (document.getElementById("namedoc") != null) {
            filename = filename ? filename + '.doc' : document.getElementById("namedoc").innerHTML + '.doc';
        }

        var downloadLink = document.createElement("a");

        document.body.appendChild(downloadLink);

        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            downloadLink.href = url;
            downloadLink.download = filename;
            downloadLink.click();
        }

        document.body.removeChild(downloadLink);
    }

    render() {
        const { id, date, status, student, person, teach_group, start, end, price } = this.state
        const datas = {
            columns: [
                {
                    label: 'Номер',
                    field: 'id',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Дата',
                    field: 'date',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Студент',
                    field: 'student',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Статус',
                    field: 'status',
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
            rows: this.props.contract.map(u => ({
                id: u.id,
                date: <a
                    className="font-weight-bold"
                    data-toggle="modal" data-target="#modalInfoFormCon"
                    onClick={() => this.setState({ editModalShow: true, id: u.id, date: u.date, status: u.status, student: u.student, person: u.person, teach_group: u.teach_group, start: u.start, end: u.end, price: u.price })}
                >
                    {u.date}
                </a>,
                student: this.props.students.filter(sf => sf.id == u.student).map(s => s.second_name + " " + s.name + " " + s.last_name),
                status: u.status,
                putbut:
                    <Fragment>
                        <a
                            className="text-secondary font-weight-bold"
                            data-toggle="modal" data-target="#modalPutFormCon"
                            onClick={() => this.setState({ editModalShow: true, id: u.id, date: u.date, status: u.status, student: u.student, person: u.person, teach_group: u.teach_group, start: u.start, end: u.end, price: u.price })}
                        >PUT</a>
                    </Fragment>
                ,
                delbut: <a
                    onClick={this.props.deleteContract.bind(this, u.id)}
                    className="text-danger font-weight-bold"
                >DEL
                </a>
            }))
        }
        return (
            <Fragment>
                <div className="text-right">
                    <a className="btn btn-dark btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginFormCon">Добавить</a>
                </div>
                <div className="modal fade" id="modalPutFormCon" role="dialog" aria-labelledby="myModalLabel"
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
                                            <span className="input-group-text md-addon" id="material-addon3">Дата: </span>
                                        </div>
                                        <input
                                            className="form-control validate name"
                                            type="date"
                                            name="date"
                                            onChange={this.onChange}
                                            value={date}
                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <select name="status" className="browser-default custom-select lis" searchable="Search here.."
                                                onChange={this.onChange}
                                                value={status} >
                                                <option value="" disabled>Выберите статус</option>
                                                <option value="Оплачен">Оплачен</option>
                                                <option value="Не оплачен">Не оплачен</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <select name="student" className="browser-default custom-select lis" searchable="Search here.."
                                                onChange={this.onChange}
                                                value={student} >
                                                <option value="" disabled>Выберите студента</option>
                                                {this.props.students.map(u => (
                                                    <option key={u.id} value={u.id}>{u.second_name + " " + u.name + " " + u.last_name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <select name="person" className="browser-default custom-select lis" searchable="Search here.."
                                                onChange={this.onChange}
                                                value={person} >
                                                <option value="" disabled>Выберите физ лицо</option>
                                                {this.props.persons.map(u => (
                                                    <option key={u.id} value={u.id}>{u.second_name + " " + u.name + " " + u.last_name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <select name="teach_group" className="browser-default custom-select lis" searchable="Search here.."
                                                onChange={this.onChange}
                                                value={teach_group} >
                                                <option value="" disabled>Выберите учебную группу</option>
                                                {this.props.teachgroup.map(u => (
                                                    <option key={u.id} value={u.id}>{this.props.course.filter(cf => cf.id == u.course).map(c => c.name)}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Начало: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="date"
                                            name="start"
                                            onChange={this.onChange}
                                            value={start}


                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Конец: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="date"
                                            name="end"
                                            onChange={this.onChange}
                                            value={end}


                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Цена: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="price"
                                            onChange={this.onChange}
                                            value={price}


                                        />

                                    </div>

                                </div>
                                <div className="modal-footer d-flex justify-content-center" data-toggle="modal" data-target="#modalPutFormCon">
                                    <button className="btn btn-dark" type="submit">Изменить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modalInfoFormCon" role="dialog" aria-labelledby="myModalLabel"
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
                                            <span className="input-group-text md-addon" id="material-addon3">Дата: </span>
                                        </div>
                                        <input
                                            className="form-control validate name"
                                            type="date"
                                            name="date"
                                            onChange={this.onChange}
                                            value={date}
                                            disabled
                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text md-addon" id="material-addon3">Статус: </span>
                                            </div>
                                            <input
                                                className="form-control validate name"
                                                type="text"
                                                name="status"
                                                onChange={this.onChange}
                                                value={status}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Студент: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="student"
                                            onChange={this.onChange}
                                            value={this.props.students.filter(sf => sf.id == student).map(s => s.second_name + " " + s.name + " " + s.last_name)}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text md-addon" id="material-addon3">Физ лицо: </span>
                                            </div>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="person"
                                                onChange={this.onChange}
                                                value={this.props.persons.filter(sf => sf.id == person).map(s => s.second_name + " " + s.name + " " + s.last_name)}
                                                disabled

                                            />
                                        </div>
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text md-addon" id="material-addon3">Учебная группа: </span>
                                            </div>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="teach_group"
                                                onChange={this.onChange}
                                                value={this.props.teachgroup.filter(sf => sf.id == teach_group).map(s => this.props.course.filter(cf => cf.id == s.course).map(c => c.name))}
                                                disabled

                                            />
                                        </div>
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Начало: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="date"
                                            name="start"
                                            onChange={this.onChange}
                                            value={start}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Конец: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="date"
                                            name="end"
                                            onChange={this.onChange}
                                            value={end}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Цена: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="price"
                                            onChange={this.onChange}
                                            value={price}
                                            disabled

                                        />

                                    </div>
                                    <div id="namedoc" className="d-lg-none">
                                        {this.props.persons.filter(sf => sf.id == person).map(s => s.second_name + " " + s.name + " " + s.last_name) + " " + date}
                                    </div>
                                    <div id="avothz" className="d-lg-none">
                                        <h4><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ДОГОВОР № КУ/ УТ 1000{id}</strong></h4>
                                        <h5><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;НА ОКАЗАНИЕ КОНСУЛЬТАЦИОННЫХ УСЛУГ ПО ПП: «1С: ПРЕДПРИЯТИЕ 8»</strong></h5>
                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;г. Миасс&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{date}</p>
                                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ООО «ИТС», именуемое в дальнейшем «Исполнитель», в лице исполняющего обязанности директора Шишковой Ольги Рудольфовны, действующей на основании Устава, с одной стороны, и {this.props.persons.filter(sf => sf.id == person).map(s => s.second_name + " " + s.name + " " + s.last_name)}, именуемый в дальнейшем «Заказчик», с другой стороны, заключили настоящий Договор о нижеследующем:</p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.&nbsp;&nbsp; ПРЕДМЕТ ДОГОВОРА
                        <p>1.1.	Заказчик поручает, а Исполнитель принимает на себя обязательства по оказанию консультационных услуг по теме {this.props.teachgroup.filter(sf => sf.id == teach_group).map(s => this.props.course.filter(cf => cf.id == s.course).map(c => c.name))}, в объеме и порядке, предусмотренными настоящим Договором, а Заказчик обязуется принять и оплатить эти услуги.</p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.&nbsp;&nbsp; ПРАВА И ОБЯЗАННОСТИ ИСПОЛНИТЕЛЯ
                        <p>2.1	Исполнитель обязан организовать надлежащее исполнение услуг, предусмотренных п.1.1. настоящего Договора. Услуги оказываются в соответствие с расписанием, разрабатываемых Исполнителем.
                        <br />2.2	Исполнитель оказывает ежемесячно услуги Заказчику, в течении всего срока действия договора, объемом не более 4 (четырех) академических часов в месяц.
                        <br />2.3	Исполнитель вправе в одностороннем порядке отказаться от выполнения своих обязанностей по настоящему Договору, если Заказчик не оплатит услуги Исполнителя в размере и сроки, предусмотренные в пункте 4 настоящего Договора.
                        <br />2.4	Исполнитель имеет право в одностороннем порядке отказаться от исполнения договора и отказать Заказчику в оказании услуг вследствие его ненадлежащего поведения и отношения.</p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.&nbsp;&nbsp; ПРАВА И ОБЯЗАННОСТИ ЗАКАЗЧИКА
                        <p>3.1	Заказчик обязан своевременно внести плату за предоставляемые услуги Исполнителя в размере, предусмотренном пунктом 4.1 настоящего Договора.
                        <br />3.2	Заказчик обязан посещать консультации в соответствие с расписанием занятий, разработанных Исполнителем.
                        <br />3.3	Заказчик обязан возместить ущерб в случае причинения вреда имуществу Исполнителя.
                        <br />3.4	Заказчик вправе пользоваться имуществом Исполнителя, необходимым для оказания услуг.
                        <br />3.5	Заказчик может расторгнуть настоящий Договор в одностороннем порядке при условии оплаты Исполнителю услуг, оказанных до момента расторжения договора, или расходов, фактически понесенных Исполнителем в процессе осуществления данного Договора.
                        </p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.&nbsp;&nbsp; СТОИМОСТЬ УСЛУГ, ПОРЯДОК И СРОКИ РАСЧЕТОВ
                        <p>
                                            4.1	Общая стоимость, подлежащая оплате по настоящему Договору составляет {price} рублей ежемесячно, в течении всего срока действия договора, НДС не предусмотрен (упрощенная система налогообложения).
                        <br />4.2	Стороны понимают стоимость, указанную в пункте 4.1 как договорную, и не подлежащую изменению в одностороннем порядке.
                        <br />4.3	Оплата работ Исполнителя производится авансом в следующем порядке:
                        <br />&nbsp;&nbsp;&nbsp;4.3.1.	При заключении настоящего Договора Заказчик вносит авансовый счет в размере, составляющем не менее 100% от суммы, указанной в пункте 4.1. настоящего Договора.
                        </p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.&nbsp;&nbsp; СРОКИ ОКАЗАНИЯ УСЛУГ.
                        <p>
                                            5.1	Настоящий договор заключен на срок с {start} по {end} и вступает в силу с момента подписания обеими сторонами
                        <br />5.2	Срок проведения консультационных услуг с {start} по {end}.
                        </p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.&nbsp;&nbsp; ПОРЯДОК ОФОРМЛЕНИЯ ДОКУМЕНТОВ ОБ ОКАЗАНИИ УСЛУГ
                        <p>
                                            6.1.	По завершении предоставления услуг Исполнитель и Заказчик подписывают акт об оказании услуг.
                        <br />6.2.	После подписания акта об оказании услуг претензии Заказчика к Исполнителю к качеству совершенных услуг не принимаются.
                        </p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.&nbsp;&nbsp; ФОРС-МАЖОР
                        <p>7.1.	Стороны освобождаются от ответственности за частичное или полное неисполнение своих обязательств по настоящему Договору, если такое неисполнение явилось следствием обстоятельств непреодолимой силы, возникших после заключения Договора в результате событий чрезвычайного характера, таких как землетрясение, пожар, наводнение, прочие стихийные бедствия, эпидемии, аварии, взрывы, военные действия, изменения законодательства, повлекших за собой невозможность выполнения Сторонами своих обязательств по настоящему Договору.
                        <br />7.2.	Сторона, подвергшаяся действию обстоятельств непреодолимой силы, должна в течение 5 (пяти) рабочих дней известить об этом другую сторону, предоставив независимое подтверждение наличия таких обстоятельств, изданное компетентным государственным или административным органом.</p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.&nbsp;&nbsp; ПРОЧИЕ УСЛОВИЯ
                        <p>
                                            8.1.	Настоящий Договор заключен в двух экземплярах, имеющих одинаковую юридическую силу, по одному для каждой из сторон.
                        <br />8.2.	Все изменения и дополнения к настоящему Договору имеют силу, если они совершены в письменной форме и подписаны уполномоченными представителями обеих сторон.
                        </p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.&nbsp;&nbsp; ОТВЕТСТВЕННОСТЬ СТОРОН
                    <p>9.1.	За неисполнение и ненадлежащее исполнение принятых на себя обязательств стороны несут ответственность в соответствии с действующим законодательством РФ.
                    <br />9.2.	Споры, возникшие при исполнении сторонами настоящего договора, подлежат рассмотрению в порядке, предусмотренном действующим законодательством РФ.</p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.&nbsp;&nbsp; АДРЕСА И БАНКОВСКИЕ РЕКВИЗИТЫ СТОРОН<br /><br />
                    ЗАКАЗЧИК<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.persons.filter(sf => sf.id == person).map(s => s.second_name + " " + s.name + " " + s.last_name)}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.persons.filter(sf => sf.id == person).map(s => "Паспорт: №" + s.seria + " Номер: " + s.numberp)}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.persons.filter(sf => sf.id == person).map(s => "Адрес прописки: " + s.adress)}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.persons.filter(sf => sf.id == person).map(s => "Адрес проживания: " + s.adress)}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.persons.filter(sf => sf.id == person).map(s => "Контактный телефон: " + s.phone)}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.students.filter(sf => sf.id == student).map(s => "ФИО Учащегося: " + s.second_name + " " + s.name + " " + s.last_name)}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.students.filter(sf => sf.id == student).map(s => "Паспорт(Свидетельство о рождении): " + s.documentp)}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.students.filter(sf => sf.id == student).map(s => "Дата рождения: " + s.date_bitrh)}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.students.filter(sf => sf.id == student).map(s => "Адрес прописки: " + s.adress)}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.students.filter(sf => sf.id == student).map(s => "Адрес проживания: " + s.adress)}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.students.filter(sf => sf.id == student).map(s => "Контактный телефон: " + s.phone)}<br /><br />
                    ИСПОЛНИТЕЛЬ<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ООО «ИТС»<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;456304, Челябинская обл., г.Миасс, ул. Романенко д. 50 Б, тел. (3513) 28-98-80<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ИНН 7415039872&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;КПП 741501001<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Р/С 40702810885070000022&nbsp;&nbsp;&nbsp;Филиал ОАО «УРАЛСИБ» г.Челябинск<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;БИК 047501976&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;К/С 30101810300000000976<br /><br /><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ЗАКАЗЧИК&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ИСПОЛНИТЕЛЬ<br /><br /><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;______________/_____________________/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___________________Шишкова О.Р.
                                    </div>
                                    <br /><br /><button onClick={this.PrintContract}>Сформировать договор</button>
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
    contract: state.contract.contract,
    students: state.students.students,
    persons: state.persons.persons,
    teachgroup: state.teachgroup.teachgroup,
    course: state.course.course
})

export default connect(mapStateToProps, { getContract, putContract, deleteContract, getPersons, getStudents, getTeachgroup, getCourse })(Contract)
