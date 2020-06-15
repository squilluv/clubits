import React, { Fragment } from 'react'

import Calendar from '../main/Calendar'
import Chat from './Chat'
import Chart from '../main/Chart'

import Form from './Form'
import FormP from './FormP'
import FormE from './FormE'

import Persons from './Persons'
import Students from './Students'
import Employee from './Employee'
import Users from './Users'

import FormC from '../dlc/FormC'
import FormPl from '../dlc/FormPl'
import FormTG from '../dlc/FormTG'
import FormSe from '../dlc/FormSe'
import FormTP from '../dlc/FormTP'
import FormV from '../dlc/FormV'
import FormCon from '../dlc/FormCon'

import Course from '../dlc/Course'
import Place from '../dlc/Place'
import TeachGroup from '../dlc/TeachGroup'
import Sections from '../dlc/Sections'
import TeachPlan from '../dlc/TeachPlan'
import Visited from '../dlc/Visited'
import Contract from '../dlc/Contract'

export default function Dashboard() {
    return (
        <Fragment>
            <div className="tab-content px-0 pt-5">
                <div className="tab-pane fade in show active" id="panel10gl" role="tabpanel">
                    <div className="container mt-5 pt-5">
                        <ul className="nav nav-tabs nav-justified lighten-3 mx-0 my-5" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active black-text font-weight-bold" data-toggle="tab" href="#panel55" role="tab">Календарь</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link black-text font-weight-bold" data-toggle="tab" href="#panel58" role="tab">Сообщения</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link black-text font-weight-bold" data-toggle="tab" href="#panel56" role="tab">Графики</a>
                            </li>
                        </ul>
                        <div className="tab-content px-0 pt-5">

                            <div className="tab-pane fade in show active" id="panel55" role="tabpanel">
                                <Calendar />

                            </div>

                            <div className="tab-pane fade in show" id="panel58" role="tabpanel">
                                <Chat />
                            </div>

                            <div className="tab-pane fade in show" id="panel56" role="tabpanel">
                                <Chart />
                            </div>

                        </div>

                    </div>
                </div>
                <div className="tab-pane fade in show" id="panel5gl" role="tabpanel">
                    <div className="container mt-5 pt-5">
                        <ul className="nav nav-tabs nav-justified lighten-3 mx-0 my-5" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active black-text font-weight-bold" data-toggle="tab" href="#panel5" role="tab">Пользователи системы</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link black-text font-weight-bold" data-toggle="tab" href="#panel8" role="tab">Родители</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link black-text font-weight-bold" data-toggle="tab" href="#panel6" role="tab">Ученики</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link black-text font-weight-bold" data-toggle="tab" href="#panel7" role="tab">Сотрудники</a>
                            </li>
                        </ul>

                        <div className="tab-content px-0 pt-5">

                            <div className="tab-pane fade in show active" id="panel5" role="tabpanel">
                                <Users />

                            </div>

                            <div className="tab-pane fade in show" id="panel8" role="tabpanel">
                                <FormP />
                                <Persons />
                            </div>

                            <div className="tab-pane fade in show" id="panel6" role="tabpanel">
                                <Form />
                                <Students />
                            </div>

                            <div className="tab-pane fade in show" id="panel7" role="tabpanel">
                                <FormE />
                                <Employee />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade in show" id="panel6gl" role="tabpanel">
                    <div className="container mt-5 pt-5">
                        <ul className="nav nav-tabs nav-justified lighten-3 mx-0 my-5" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link black-text font-weight-bold active" data-toggle="tab" href="#panel8d" role="tab">Посещение</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link black-text font-weight-bold" data-toggle="tab" href="#panel3d" role="tab">Учебный план</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link black-text font-weight-bold" data-toggle="tab" href="#panel4d" role="tab">Учебная группа</a>
                            </li>
                        </ul>

                        <div className="tab-content px-0 pt-5">

                            <div className="tab-pane fade in show active" id="panel8d" role="tabpanel">
                                <FormV />
                                <Visited />
                            </div>

                            <div className="tab-pane fade in show" id="panel3d" role="tabpanel">
                                <FormTP />
                                <TeachPlan />
                            </div>

                            <div className="tab-pane fade in show" id="panel4d" role="tabpanel">
                                <FormTG />
                                <TeachGroup />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="tab-pane fade in show" id="panel7gl" role="tabpanel">
                    <div className="container mt-5 pt-5">
                        <ul className="nav nav-tabs nav-justified lighten-3 mx-0 my-5" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active black-text font-weight-bold" data-toggle="tab" href="#panel1d" role="tab">Места обучения / работы</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link black-text font-weight-bold" data-toggle="tab" href="#panel2d" role="tab">Курсы</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link black-text font-weight-bold" data-toggle="tab" href="#panel5d" role="tab">Дисциплина</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link black-text font-weight-bold" data-toggle="tab" href="#panel9d" role="tab">Договоры</a>
                            </li>
                        </ul>

                        <div className="tab-content px-0 pt-5">
                            <div className="tab-pane fade in show active" id="panel1d" role="tabpanel">
                                <FormPl />
                                <Place />
                            </div>

                            <div className="tab-pane fade in show" id="panel2d" role="tabpanel">
                                <FormC />
                                <Course />
                            </div>


                            <div className="tab-pane fade in show" id="panel5d" role="tabpanel">
                                <FormSe />
                                <Sections />
                            </div>
                            <div className="tab-pane fade in show" id="panel9d" role="tabpanel">
                                <FormCon />
                                <Contract />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}