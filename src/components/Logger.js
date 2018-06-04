import React, { Component } from 'react';
import FiltersContainer from '../containers/FiltersContainer';
import Log from './Log';
import Table from './Table';

export default class Logger extends Component {    
    handleClearLogClick = () => {
        this.props.clearLogs();
    }

    getStyles() {
        return {
            logsContainer: {
                display: 'flex',
                flexDirection: 'row'
            }
        };
    }
    
    renderLogs() {
        return <Log logs={this.props.persistedLogs} />;
    }

    renderClearButton() {
        if (!this.props.persistedLogs.length) {
            return null;
        }

        return <button onClick={this.handleClearLogClick}>Clear Logs</button>;
    }

    render() {
        return (
            <div>
                <div>
                {this.renderClearButton()}
                    <div style={this.getStyles().logsContainer}>
                        {this.renderLogs()}
                        {this.props.persistedLogs.length && <Table
                            tableOfActionOccurences={this.props.tableOfActionOccurences}
                        />}
                    </div>
                    <div>
                        <FiltersContainer />
                    </div>
                </div>
            </div>
        );
    }
}
