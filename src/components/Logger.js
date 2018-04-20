import React, { Component } from 'react';
import FiltersContainer from '../containers/FiltersContainer';

export default class Logger extends Component {
    formatDateString(day, month, year) {
        return `${day}/${month}/${year}`;
    }

    formatTimeString(hour, minutes, seconds) {
        return `${hour}:${minutes}:${seconds}`;
    }
    
    handleClearLogClick = () => {
        this.props.clearLogs();
    }
    
    renderLogs() {
        const { persistedLogs } = this.props;
        if (!persistedLogs || persistedLogs === null) {
            return null;
        }
        return persistedLogs.map((log, index) => {
            const date = this.formatDateString(log.day, log.month, log.year);
            const time = this.formatTimeString(log.hour, log.minutes, log.seconds);
            const logString = `[On ${date} at ${time} the ${log.actionType} was fired]`;
            return <div key={index}>{logString}</div>; 
        });
    }

    renderFilteredLogs() {
        const { logs } = this.props;
        if (!logs || logs === null) {
            return <div style={{padding: '8px 0'}}>No logs to show</div>;
        }

        return logs.map((log, index) => {
            const date = this.formatDateString(log.day, log.month, log.year);
            const time = this.formatTimeString(log.hour, log.minutes, log.seconds);
            const logString = `[On ${date} at ${time} the ${log.actionType} was fired]`;
            return <div key={index}>{logString}</div>; 
        });
    }
    render() {
        const styles = {
            container: {
                display: 'flex',
                flex: 1,
                flexDirection: 'row'
            },
            filteredLogs: {
                paddingLeft: 80
            }
        };
        return (
            <div>
                <div style={styles.container}>
                    <div>
                        {this.renderLogs()}
                    </div>
                    <div style={styles.filteredLogs}>
                        <FiltersContainer />
                        {this.renderFilteredLogs()}
                    </div>
                </div>
                {this.props.persistedLogs.length && <button onClick={this.handleClearLogClick}>Clear Logs</button>}
            </div>
        );
    }
}
