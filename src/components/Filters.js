import React, { Component } from 'react';
import Log from './Log';

export default class Filters extends Component {
    handle10MinutesClick = () => {
        this.props.updateLogs(10);
    }

    handle20MinutesClick = () => {
        this.props.updateLogs(20);
    }

    handle30MinutesClick = () => {
        this.props.updateLogs(30);
    }

    handleFilterActionByName = (name) => {
        this.props.filterLogsByActionName(name);
    }

    handleClearTimeStampFilteredActions = () => {
        this.props.clearTimeStampFilteredLogs();
    }

    handleClearFilteredActionsByName = () => {
        this.props.clearFilteredLogsByActionName();
    }

    getStyles() {
        return {
            timeStampLogsContainer: {
                maxHeight: 236,
                overflowY: 'scroll'
            },
            buttons: {
                padding: '8px 40px',
                margin: '8px 8px 8px 0'
            },
            log: {
                fontFamily: 'monospace',
                fontSize: 16
            }
        };
    }

    renderActionFilterButtons() {
        const { filteredActionLogs } = this.props;

        if (!filteredActionLogs.length) return null;

        return filteredActionLogs.map(log => {
            return (
                <button
                    key={log.id}
                    onClick={() => this.handleFilterActionByName(log.actionType)}
                    style={this.getStyles().buttons}
                >
                    {log.actionType}
                </button>
            );
        });
    }

    renderFilteredLogsByTimeStamp() {
        return <Log logs={this.props.logs} />
    }

    renderFilteredLogsByActionName() {
        return <Log logs={this.props.filteredLogs} />
    }

    renderClearButton(logs, functionName) {
        if (!logs || !logs.length) {
            return null;
        }

        return <button onClick={functionName} style={this.getStyles().buttons}>Clear logs</button>;
    }

    renderButtonsAndFilteredLogs() {
        const { persistedLogs } = this.props;

        if (persistedLogs.length) {
            return (
                <div>
                    <button style={this.getStyles().buttons} onClick={this.handle10MinutesClick}>10 Minutes</button>
                    <button style={this.getStyles().buttons} onClick={this.handle20MinutesClick}>20 Minutes</button>
                    <button style={this.getStyles().buttons} onClick={this.handle30MinutesClick}>30 Minutes</button>
                    {this.renderClearButton(this.props.logs, this.handleClearTimeStampFilteredActions)}
                    <div style={this.getStyles().timeStampLogsContainer}>
                        {this.renderFilteredLogsByTimeStamp()}
                    </div>
                    <div>
                        {this.renderActionFilterButtons()}
                        {this.renderFilteredLogsByActionName()}
                        {this.renderClearButton(this.props.filteredActionLogs, this.handleClearFilteredActionsByName)}
                    </div>
                </div>
            );
        }

        return null;
    }
    render() {
        return(
            <div>
                {this.renderButtonsAndFilteredLogs()}
            </div>
        );
    }
} 