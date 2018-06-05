import React, { Component } from 'react';
import Chart from './Chart';

export default class Table extends Component {
    createArrayFromKeysOrValues(givenObject, keysOrValues) {
        return Object[keysOrValues](givenObject);
    }

    renderTableBody() {
        const { tableOfActionOccurences } = this.props;
        
        return (
            <div>
                <Chart
                    data={this.createArrayFromKeysOrValues(tableOfActionOccurences, 'values')}
                    label="Occurences"
                    labels={this.createArrayFromKeysOrValues(tableOfActionOccurences, 'keys')}
                    title="Occurence of each action"
                />
            </div>
        );
    }
    
    render() {
        return (
            <div>
                {this.renderTableBody()}
            </div>
        )
    }
}