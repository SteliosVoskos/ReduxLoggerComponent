import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actionCreators/actions';
import Logger from '../components/Logger';

function mapStateToProps(state) {
    return {
        logs: state.logger.logWorker.logs,
        persistedLogs: state.logger.logWorker.persistedLogs
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
