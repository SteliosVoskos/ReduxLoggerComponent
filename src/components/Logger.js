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

    renderFilteredLogs() {
        return <Log logs={this.props.logs} />;
    }
    render() {
        const styles = {
            container: {
                display: 'flex',
                flex: 1
            }
        };
        return (
            <div>
                <div>
                    <div>
                        {this.renderLogs()}
                    </div>
                    <div>
                        <FiltersContainer />
                        {this.renderFilteredLogs()}
                    </div>
                </div>
                {this.props.persistedLogs.length && <button onClick={this.handleClearLogClick}>Clear Logs</button>}
            </div>
        );
    }
}
