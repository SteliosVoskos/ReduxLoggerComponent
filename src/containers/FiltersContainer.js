import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actionCreators/actions';
import Filters from '../components/Filters';

function mapStateToProps(state) {
    return {
        logs: state.logger.logWorker.logs,
        persistedLogs: state.logger.logWorker.persistedLogs
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
};

const FiltersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filters);

export default FiltersContainer;
