import React, { Component } from 'react';

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

    formatDateString(day, month, year) {
        return `${day}/${month}/${year}`;
    }

    formatTimeString(hour, minutes, seconds) {
        return `${hour}:${minutes}:${seconds}`;
    }

    getStyles() {
        return {
            container: {
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center'
            },
            buttons: {
                padding: '8px 40px',
                margin: '8px 8px 8px 0'
            }
        };
    }

    renderActionFilterButtons() {
        const { filteredActionLogs } = this.props;

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

    renderFilteredLogs() {
        const { filteredLogs } = this.props;
        if (!filteredLogs || filteredLogs === null) {
            return <div style={{padding: '8px 0'}}>No logs to show</div>;
        }

        return filteredLogs.map((log, index) => {
            const date = this.formatDateString(log.day, log.month, log.year);
            const time = this.formatTimeString(log.hour, log.minutes, log.seconds);
            const logString = `[ On ${date} at ${time} the ${log.actionType} was fired ]`;
            return <div key={log.id}>{logString}</div>; 
        });
    }

    renderButtons() {
        const { persistedLogs } = this.props;

        if (persistedLogs.length) {
            return (
                <div style={this.getStyles().container}>
                    <div>
                        <button style={this.getStyles().buttons} onClick={this.handle10MinutesClick}>10 Minutes</button>
                        <button style={this.getStyles().buttons} onClick={this.handle20MinutesClick}>20 Minutes</button>
                        <button style={this.getStyles().buttons} onClick={this.handle30MinutesClick}>30 Minutes</button>
                    </div>
                    <div>
                        {this.renderActionFilterButtons()}
                    </div>
                </div>
            );
        }

        return null;
    }
    render() {
        return(
            <div>
                {this.renderButtons()}
                {this.renderFilteredLogs()}
            </div>
        );
    }
} 