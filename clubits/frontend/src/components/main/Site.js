import React, { Component, Fragment } from 'react'
import Login from '../users/Login'
import Register from '../users/Register'

export class Site extends Component {

    render() {

        return (
            <Fragment>
                <Login />
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <strong>Club ITS</strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7"
                            aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="scrollspy collapse navbar-collapse" id="navbarSupportedContent-7 basicExampleNav">
                            <ul className="smooth-scroll navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">О нашем клубе</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#course">Наши курсы</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#photos">Фото</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#register">Регистрация</a>
                                </li>
                            </ul>
                            <a className="white-text" data-toggle="modal" data-target="#modalLoginForm">Вход</a>
                        </div>
                    </div>
                </nav>
                <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                        <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">

                        <div className="carousel-item active">
                            <div className="view view1">
                                <div className="mask rgba-black-strong d-flex justify-content-center align-items-center">

                                    <div className="white-text mx-5 wow fadeIn">
                                        <h1 style={{ fontSize: 56 }}>Console.log("</h1>
                                        <h1 style={{ fontSize: 56 }}>&nbsp;&nbsp;&nbsp;&nbsp;Школа программистов для школьников, студентов и взрослых</h1>
                                        <h1 style={{ fontSize: 56 }}>");</h1>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="view view2">

                                <div className="mask rgba-black-strong d-flex justify-content-center align-items-center">

                                    <div className="white-text mx-5 wow fadeIn">
                                        <h1 style={{ fontSize: 56 }}>Console.log("</h1>
                                        <h1 style={{ fontSize: 56 }}>&nbsp;&nbsp;&nbsp;&nbsp;Школа программистов для школьников, студентов и взрослых</h1>
                                        <h1 style={{ fontSize: 56 }}>");</h1>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="view view3">

                                <div className="mask rgba-black-strong d-flex justify-content-center align-items-center">

                                    <div className="white-text mx-5 wow fadeIn">
                                        <h1 style={{ fontSize: 56 }}>Console.log("</h1>
                                        <h1 style={{ fontSize: 56 }}>&nbsp;&nbsp;&nbsp;&nbsp;Школа программистов для школьников, студентов и взрослых</h1>
                                        <h1 style={{ fontSize: 56 }}>");</h1>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <div style={{ backgroundImage: "url(../../static/frontend/src/1.jpg)", backgroundRepeat: "repeat-y, repeat-y", backgroundPosition: "left, right", backgroundAttachment: "fixed, fixed", backgroundSize: "cover" }}>

                    <div className="white my-5 border-bottom pt-3" id="about">
                        <div className="modal fade" id="modalMap" role="dialog" aria-labelledby="myModalLabel"
                            aria-hidden="true" style={{ background: "transparent" }}>
                            <div className="modal-dialog modal-fluid" role="document" style={{ background: "transparent" }}>
                                <br /><br /><br />
                                <div className="modal-content" style={{ background: "transparent" }}>
                                    <div className="modal-body mx-3" style={{ background: "transparent" }}>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571.4420775608806!2d60.11054112928883!3d55.047275398773166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c53e3330d03d73%3A0xb1ecfc3624e8279c!2z0YPQuy4g0KDQvtC80LDQvdC10L3QutC-LCA1MNCxLCDQnNC40LDRgdGBLCDQp9C10LvRj9Cx0LjQvdGB0LrQsNGPINC-0LHQuy4sIDQ1NjMwMA!5e0!3m2!1sru!2sru!4v1584005564106!5m2!1sru!2sru" style={{ width: "100%", height: 650 }}></iframe>
                                    </div>
                                    <button type="button" className="close black" data-dismiss="modal" aria-label="Close">
                                        ЗАКРЫТЬ
                                            </button>
                                </div>
                            </div>
                        </div>

                        <section className="container pb-5">

                            <div className="row">

                                <div className="col-md-6 mb-4 mb-md-0">

                                    <h3 className="font-weight-bold">О НАШЕМ КЛУБЕ</h3>

                                    <div className="scrollspy"><div className="smooth-scroll"><h5><p className="">Курсы программирования для школьников. <a href="" data-toggle="modal" data-target="#modalJava">Java</a>, <a href="" data-toggle="modal" data-target="#modalArduino">Arduino</a>, <a href="" data-toggle="modal" data-target="#modalLego">Лего</a>, <a href="" data-toggle="modal" data-target="#modalSA">Системное администрирование</a>, <a href="" data-toggle="modal" data-target="#modalPython">Python</a>. Мы докажем, что программирование – это интересно и познавательно. Увлекательные занятия, лучшие преподаватели, комфортные условия обучения. Мы не задаем домашних заданий и не ставим оценок. Обучение детей программированию с нуля. Если ты ничего не понимаешь в программировании, никогда не программировал, но очень хочешь научиться, мы ждем тебя в «Клубе программистов». Занятия проходят в центре города (Романенко, 50б).

Записывайся по телефону <a href="tel:83513555777">(3513) 555-777</a> или через форму <a href="#register">"Регистрация"</a></p></h5></div></div>

                                    <a className="btn btn-black btn-md ml-0" href="http://its-1s.ru/content/klub-programmistov/3d-ekskursiya-po-ofisu" role="button">360 экскурсия<i className="fa fa-gem ml-2"></i></a>
                                    <a className="btn btn-black btn-md ml-0" role="button" data-toggle="modal" data-target="#modalMap">Мы на карте<i className="fa fa-gem ml-2"></i></a>
                                </div>
                                <div className="col-md-5 mb-4 mb-md-0">

                                    <div className="overlay zoom">
                                        <img src="../../static/frontend/src/1.gif" className="img-fluid rounded-circle"
                                            alt="zoom" />
                                    </div>

                                </div>

                            </div>


                        </section>


                    </div>
                    <div className="container card cardina1 rounded-pill  my-5 py-5 white">

                        <div className="modal fade" id="modalArduino" role="dialog" aria-labelledby="myModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header text-center">
                                        <h4 className="modal-title w-100 font-weight-bold">ARDUINO</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body mx-3">
                                        <h4>Сколько?</h4>
                                        <p>
                                            Занятия: 4 раза в месяц по 2 академических часа
					</p>
                                        <p>
                                            Стоимость: 1700 руб.
					</p>
                                        <h4>Кому?</h4>
                                        <p>
                                            Для школьников с 12 лет
                                    </p>
                                        <h4>Что это?</h4>
                                        <p>
                                            Курс робототехники Arduino. Arduino – это вычислительная платформа, которая имеет универсальное предназначение. На ее основе можно создавать простые схемы, а также сложные трудоемкие проекты. Применение устройства весьма разнопланово. С его помощью можно создавать телефоны, компьютеры, системы наблюдений и безопасности. Говоря простым языком, Arduino представляет собой электронный конструктор для создания различных устройств и вычислительных платформ. Контролер с открытыми кодами можно использовать во множестве приложений.
					</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="modalJava" role="dialog" aria-labelledby="myModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header text-center">
                                        <h4 className="modal-title w-100 font-weight-bold">JAVA</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body mx-3">
                                        <h4>Сколько?</h4>
                                        <p>
                                            Занятия: 4 раза в месяц по 2 академических часа
					</p>
                                        <p>
                                            Стоимость: 1700 руб.
					</p>
                                        <h4>Кому?</h4>
                                        <p>
                                            Для школьников с 12 лет
					</p>
                                        <h4>Что это?</h4>
                                        <p>
                                            На курсах программирования Java ты узнаешь о языке Java, его возможностях и перспективах.
					</p>
                                        <p>
                                            Познакомишься со средой разработки Eclipse, основными элементами разработки программы.
					</p>
                                        <p>
                                            Узнаешь об объектно-ориентированном программировании.
					</p>
                                        <p>
                                            Сможешь создавать анимацию, писать игры, программы и т.д.
					</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="modalLego" role="dialog" aria-labelledby="myModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header text-center">
                                        <h4 className="modal-title w-100 font-weight-bold">LEGO</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body mx-3">
                                        <h4>Сколько?</h4>
                                        <p>
                                            Занятия: 4 раза в месяц по 2 академических часа
					</p>
                                        <p>
                                            Стоимость: 1700 руб.
					</p>
                                        <h4>Кому?</h4>
                                        <p>
                                            Для детей с 6 лет
					</p>
                                        <h4>Что это?</h4>
                                        <p>
                                            Программирование на Лего. Лего-конструирование. Робототехника Лего. Ребята программируют на планшетах и ноутбуках. Мы учим программированию детей с 6 лет.
					</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="modalPython" role="dialog" aria-labelledby="myModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header text-center">
                                        <h4 className="modal-title w-100 font-weight-bold">PYTHON</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body mx-3">
                                        <h4>Сколько?</h4>
                                        <p>
                                            Занятия: 4 раза в месяц по 2 академических часа
					</p>
                                        <p>
                                            Стоимость: 1700 руб.
					</p>
                                        <h4>Кому?</h4>
                                        <p>
                                            Для школьников с 12 лет
					</p>
                                        <h4>Что это?</h4>
                                        <p>
                                            Это язык программирования, который не трудно изучить. Его часто рекомендуют начинающим. Несмотря на это, его используют такие гиганты IT как Google, Intel, Cisco, Microsoft, на нем работают многие крупные популярные проекты: YouTube (большая часть кодовой базы полностью на Python), «ВКонтакте», десктопный клиент Dropbox, внутренние сервисы Facebook, Instagram и т.д.
					</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="modalSA" role="dialog" aria-labelledby="myModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-header text-center">
                                        <h4 className="modal-title w-100 font-weight-bold">СИСТЕМНОЕ АДМИНИСТРИРОВАНИЕ</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body mx-3">
                                        <h4>Сколько?</h4>
                                        <p>
                                            Занятия: 4 раза в месяц по 2 академических часа
					</p>
                                        <p>
                                            Стоимость: 1700 руб.
					</p>
                                        <h4>Кому?</h4>
                                        <p>
                                            Для школьников с 12 лет
					</p>
                                        <h4>Что это?</h4>
                                        <p>
                                            Ты узнаешь устройство компьютера, сможешь самостоятельно его собирать, разбирать, устранять неисправности.
					</p>
                                        <p>
                                            Освоишь установку и принципы администрирования операционных систем.
					</p>
                                        <p>
                                            Сможешь подключить компьютер к сети и научишься управлять сетью: настраивать маршрутизаторы, управлять беспроводными подключениями.
					</p>
                                        <p>
                                            Узнаешь, как устроен Интернет, что такое фаерволлы и как защитить свой ПК от вирусов.
					</p>
                                        <p>
                                            Ты сможешь уверенно администрировать свою домашнюю компьютерную сеть и уже работать системным администратором.
					</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className="" id="course">

                            <div className="row d-flex justify-content-center">

                                <div className="col-lg-8">
                                    <h3 className="font-weight-bold mb-5 text-center">НАШИ КУРСЫ</h3>
                                    <div className="row">
                                        <div className="col-md-3 col-6 mb-4">
                                            <div className="overlay zoom" style={{ width: 120, height: 120 }}>
                                                <a><img src="../../static/frontend/src/arduino.png" className="img-fluid"
                                                    alt="zoom" data-toggle="modal" data-target="#modalArduino" /></a>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6 mb-4" style={{ width: 120, height: 120 }}>
                                            <div className="overlay zoom">
                                                <a><img src="../../static/frontend/src/java.png" className="img-fluid"
                                                    alt="zoom" data-toggle="modal" data-target="#modalJava" /></a>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6 mb-4" style={{ width: 120, height: 120 }}>
                                            <div className="overlay zoom">
                                                <a><img src="../../static/frontend/src/lego.png" className="img-fluid"
                                                    alt="zoom" data-toggle="modal" data-target="#modalLego" /></a>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6 mb-4" style={{ width: 120, height: 120 }}>
                                            <div className="overlay zoom">
                                                <a><img src="../../static/frontend/src/python.png" className="img-fluid"
                                                    alt="zoom" data-toggle="modal" data-target="#modalPython" /></a>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-6 mb-4" style={{ width: 120, height: 120 }}>
                                        </div>
                                        <div className="col-md-3 col-6 mb-4" style={{ width: 120, height: 120 }}>
                                            <div className="overlay zoom">
                                                <a><img src="../../static/frontend/src/comp.png" className="img-fluid"
                                                    alt="zoom" data-toggle="modal" data-target="#modalSA" /></a>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-6 mb-4" style={{ width: 120, height: 120 }}>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </section>

                    </div>

                    <div className="white my-5">


                        <section className="container pb-5 pt-5">

                            <div className="row">


                                <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text" id="photos">
                                    <h3 className="font-weight-bold text-center mb-3">ФОТО</h3>
                                    <ul className="nav nav-tabs md-tabs white" id="myTabMD" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link black-text active" id="all-tab-md" data-toggle="tab" href="#all-md" role="tab" aria-controls="all-md"
                                                aria-selected="true">Все</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link black-text" id="arduino-tab-md" data-toggle="tab" href="#arduino-md" role="tab" aria-controls="arduino-md"
                                                aria-selected="false">Arduino</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link black-text" id="java-tab-md" data-toggle="tab" href="#java-md" role="tab" aria-controls="java-md"
                                                aria-selected="false">Java</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link black-text" id="lego-tab-md" data-toggle="tab" href="#lego-md" role="tab" aria-controls="lego-md"
                                                aria-selected="false">Lego</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link black-text" id="SysAdmin-tab-md" data-toggle="tab" href="#SysAdmin-md" role="tab" aria-controls="SysAdmin-md"
                                                aria-selected="false">Системное администрирование</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link black-text" id="EngLang-tab-md" data-toggle="tab" href="#EngLang-md" role="tab" aria-controls="EngLang-md"
                                                aria-selected="false">Английский язык</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content card pt-5" id="myTabContentMD">
                                        <div className="tab-pane fade show active" id="all-md" role="tabpanel" aria-labelledby="all-tab-md">
                                            <div className="row">
                                                <div className="col-md-4 col-6 mb-4">

                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/sa1.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/sa2.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/sa3.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">

                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/sa4.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/sa5.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/sa6.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">

                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/l1.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/l2.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/l3.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">

                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/l4.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/l5.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/j1.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">

                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/j2.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/j3.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/j4.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">

                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/j5.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/j5.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/el1.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">

                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/el2.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/a1.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/a2.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">

                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/a3.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/a4.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/a5.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/a6.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="arduino-md" role="tabpanel" aria-labelledby="arduino-tab-md">
                                            <div className="row">
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/a1.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/a2.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">

                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/a3.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/a4.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/a5.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/a6.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="java-md" role="tabpanel" aria-labelledby="java-tab-md">
                                            <div className="row">
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/j1.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">

                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/j2.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/j3.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/j4.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">

                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/j5.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/j5.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="lego-md" role="tabpanel" aria-labelledby="lego-tab-md">
                                            <div className="row">
                                                <div className="col-md-4 col-6 mb-4">

                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/l1.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/l2.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/l3.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">

                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/l4.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/l5.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="SysAdmin-md" role="tabpanel" aria-labelledby="SysAdmin-tab-md">
                                            <div className="row">
                                                <div className="col-md-4 col-6 mb-4">

                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/sa1.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/sa2.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/sa3.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">

                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/sa4.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/sa5.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/sa6.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="EngLang-md" role="tabpanel" aria-labelledby="EngLang-tab-md">
                                            <div className="row">
                                                <div className="col-md-4 col-6 mb-4">
                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/el1.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-6 mb-4">

                                                    <div className="overlay zoom">
                                                        <a><img src="../../static/frontend/src/Photos/el2.jpg" className="img-fluid"
                                                            alt="zoom" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                        </section>
                    </div>
                    <div className="container card cardina1 rounded-pill white" id="register">
                        <section className="container">

                            <div className="row d-flex justify-content-center">

                                <div className="col-lg-8">
                                    <Register />
                                </div>
                            </div>
                        </section>
                    </div>
                    <br /><br />


                    <div className="rgba-black-strong">


                        <div className="pt-2 container">

                            <h3 className="text-center font-weight-bold text-white mt-3 mb-5">Контакты</h3>

                            <form className="mx-md-5" action="">

                                <div className="row">
                                    <div className="col-md-6 mb-4">

                                        <div className="card">
                                            <div className="card-body px-4">
                                                <div className="md-form md-outline mt-0">
                                                    <input type="text" id="name" className="form-control" />
                                                    <label>Your Name</label>
                                                </div>
                                                <div className="md-form md-outline">
                                                    <input type="text" id="email" className="form-control" />
                                                    <label>Your Email Address</label>
                                                </div>
                                                <div className="md-form md-outline">
                                                    <textarea id="message" className="md-textarea form-control" rows="3"></textarea>
                                                    <label>Your Message</label>
                                                </div>

                                                <button type="submit" className="btn btn-primary btn-md btn-block ml-0 mb-0">Submit inquiry</button>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-5 offset-md-1 mt-md-4 mb-4 white-text">

                                        <h5 className="font-weight-bold">Адрес</h5>
                                        <p className="mb-4 pb-2"><a className="white-text" role="button" data-toggle="modal" data-target="#modalMap">Челябинская область, г. Миасс
ул. Романенко, 50б, 4й этаж<i className="fa fa-gem ml-2"></i></a></p>

                                        <h5 className="font-weight-bold">Телефон</h5>
                                        <p className="mb-4 pb-2"><a href="tel:83513555777" className="white-text">(3513) 555-777</a></p>

                                        <h5 className="font-weight-bold">Email</h5>
                                        <p><a href="mailto:info@its-com.ru" className="white-text">info@its-com.ru </a></p>
                                    </div>
                                </div>
                            </form>
                            <div className="col-lg-12 justify-content-lg-center">
                                <div className="row">
                                    <div className="col-md-3 col-6 mb-4">
                                        <a href="https://vk.com/public180217799"><div className="overlay zoom" style={{ width: 100, height: 100 }}>
                                            <img src="../../static/frontend/src/vk.png" className="img-fluid " alt="zoom" />
                                        </div></a>
                                    </div>
                                    <div className="col-md-3 col-6 mb-4">
                                        <a href="https://www.facebook.com/MaximironClub"><div className="overlay zoom" style={{ width: 100, height: 100 }}>
                                            <img src="../../static/frontend/src/fb.png" className="img-fluid " alt="zoom" />
                                        </div></a>
                                    </div>
                                    <div className="col-md-3 col-6 mb-4">
                                        <a href="https://ok.ru/group/56014367293602"><div className="overlay zoom" style={{ width: 100, height: 100 }}>
                                            <img src="../../static/frontend/src/ok.png" className="img-fluid " alt="zoom" />
                                        </div></a>
                                    </div>
                                    <div className="col-md-3 col-6 mb-4">
                                        <a href="https://www.instagram.com/klubprogrammistov/"><div className="overlay zoom" style={{ width: 100, height: 100 }}>
                                            <img src="../../static/frontend/src/inst.png" className="img-fluid " alt="zoom" />
                                        </div></a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Site
