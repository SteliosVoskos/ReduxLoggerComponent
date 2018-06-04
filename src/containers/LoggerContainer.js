import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actionCreators/actions';
import Logger from '../components/Logger';
import { logCounter } from '../services/logCounter';

function mapStateToProps(state) {
    const { logs, persistedLogs } = state.logger.logWorker;
    console.log(persistedLogs);
    const arrayOfActionTypes = [];
    const actionTypeString = persistedLogs.length && persistedLogs.map(log => log.actionType);
    const actionTypeArray = arrayOfActionTypes.concat(actionTypeString);
    const tableOfActionOccurences = logCounter(actionTypeArray);
    return {
        logs,
        persistedLogs,
        tableOfActionOccurences
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
};

const LoggerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Logger);

export default LoggerContainer;
