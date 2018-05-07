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
