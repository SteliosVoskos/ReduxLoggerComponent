import React, { Component } from 'react';
import FiltersContainer from '../containers/FiltersContainer';
import Log from './Log';

export default class Logger extends Component {    
    handleClearLogClick = () => {
        this.props.clearLogs();
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
                    <div>
                        {this.renderLogs()}
                    </div>
                    <div>
                        <FiltersContainer />
                    </div>
                </div>
            </div>
        );
    }
}
