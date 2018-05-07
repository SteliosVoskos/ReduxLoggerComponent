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
                    </div>
                </div>
                {this.props.persistedLogs.length && <button onClick={this.handleClearLogClick}>Clear Logs</button>}
            </div>
        );
    }
}
