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
                    labels={this.createArrayFromKeysOrValues(tableOfActionOccurences, 'keys')}
                    data={this.createArrayFromKeysOrValues(tableOfActionOccurences, 'values')}
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