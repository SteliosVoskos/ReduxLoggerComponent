import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

export default class Chart extends Component {
    static defaultProps = {
        displayTitle: true
    };

    constructor(props) {
        super(props);

        this.state = {
            chartData: {
                labels: this.props.labels,
                datasets: [{
                    label:'Occerences',
                    data: this.props.data
                }]
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps.data) {
            this.setState({
                chartData: {
                    labels: this.props.labels,
                    datasets: [{
                        label:'Occerences',
                        data: this.props.data
                    }]
                }
            })
        }
    }

    render() {
        return (
            <div>
                <Bar
                    data={this.state.chartData}
                    options={
                        {
                            maintainAspectRatio: false,
                            title: {
                                display: this.props.displayTitle,
                                text: 'Occurence of each action',
                                fontSize: 25
                            }
                        }
                    }
                />
            </div>
        );
    }
}