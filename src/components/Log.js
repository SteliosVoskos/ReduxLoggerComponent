import React, { Component } from 'react';

export default class Log extends Component {
    formatDateString(day, month, year) {
        return `${day}/${month}/${year}`;
    }

    formatTimeString(hour, minutes, seconds) {
        return `${hour}:${minutes}:${seconds}`;
    }

    getStyles() {
        return {
            log: {
                fontFamily: 'monospace',
                fontSize: 16
            }
        };
    }

    renderLog() {
        const { logs } = this.props;

        return logs.map(log => {
            const date = this.formatDateString(log.day, log.month, log.year);
            const time = this.formatTimeString(log.hour, log.minutes, log.seconds);
            const logString = `[ On ${date} at ${time} the ${log.actionType} was fired ]`;
            return <div key={log.id} style={this.getStyles().log}>{logString}</div>; 
        });
    }

    render() {
        return (
            <div>{this.renderLog()}</div>
        );
    }
}