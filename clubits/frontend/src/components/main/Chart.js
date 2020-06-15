import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Bar, Pie, Line } from 'react-chartjs-2'

import { getContract } from '../../actions/contract'
import { getStudents } from '../../actions/students'
import { getPersons } from '../../actions/persons'

export class Chart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: []
        }
    }

    static propTypes = {
        getContract: PropTypes.func.isRequired,
        contract: PropTypes.array.isRequired,
        students: PropTypes.array.isRequired,
        getStudents: PropTypes.func.isRequired,
        persons: PropTypes.array.isRequired,
        getPersons: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.setState({
            loading: {
                labels: this.props.contract.map(tg => tg.date + " - " + this.props.persons.filter(pf => pf.id == tg.person).map(p => p.second_name + " " + p.name + " " + p.last_name)),
                datasets: [{
                    label: 'Оплата',
                    data: this.props.contract.map(tg => tg.price),
                    borderWidth: 2
                }]
            }
        })
    }

    randColor() {
        var r = Math.floor(Math.random() * (256)),
            g = Math.floor(Math.random() * (256)),
            b = Math.floor(Math.random() * (256));
        return '#' + r.toString(16) + g.toString(16) + b.toString(16);
    }



    render() {
        const { loading } = this.state;

        return (
            <Fragment>
                <Bar
                    data={loading}
                />
            </Fragment>
        )

    }

}

const mapStateToProps = state => ({
    contract: state.contract.contract,
    students: state.students.students,
    persons: state.persons.persons,
})

export default connect(mapStateToProps, { getContract, getPersons, getStudents })(Chart)