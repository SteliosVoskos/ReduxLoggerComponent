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
            logs: {
                maxHeight: 235,
                overflowY: 'scroll'
            },
            logsContainer: {
                display: 'flex',
                flexDirection: 'row'
            },
            buttons: {
                padding: '8px 40px',
                margin: '8px 8px 8px 0'
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

        return <button onClick={this.handleClearLogClick} style={this.getStyles().buttons}>Clear Logs</button>;
    }

    render() {
        return (
            <div>
                <div>
                {this.renderClearButton()}
                    <div style={this.getStyles().logsContainer}>
                        <div style={this.getStyles().logs}>
                            {this.renderLogs()}
                        </div>
                        <FiltersContainer />
                    </div>
                    <div>
                    {this.props.persistedLogs.length && <Table
                            tableOfActionOccurences={this.props.tableOfActionOccurences}
                        />}
                    </div>
                </div>
            </div>
        );
    }
}
