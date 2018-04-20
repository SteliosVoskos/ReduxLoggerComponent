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
    renderButtons() {
        const styles = {
            buttons: {
                padding: '8px 40px',
                margin: '8px 8px 8px 0'
            }
        };
        if (this.props.persistedLogs.length) {
            return (
                <div>
                    <button style={styles.buttons} onClick={this.handle10MinutesClick}>10 Minutes</button>
                    <button style={styles.buttons} onClick={this.handle20MinutesClick}>20 Minutes</button>
                    <button style={styles.buttons} onClick={this.handle30MinutesClick}>30 Minutes</button>
                </div>
            );
        }

        return null;
    }
    render() {
        return this.renderButtons();
    }
} 