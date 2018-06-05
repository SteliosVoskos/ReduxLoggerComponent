import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actionCreators/actions';
import Filters from '../components/Filters';
function uniq(array, param){
    return array.filter(function(item, pos, givenArray){
      return givenArray.map(function(mapItem){ return mapItem[param]; }).indexOf(item[param]) === pos;
    });
}

function mapStateToProps(state) {
    const { filteredLogs, logs, persistedLogs } = state.logger.logWorker;
    return {
        logs: logs,
        persistedLogs: persistedLogs,
        filteredActionLogs: uniq(persistedLogs, 'actionType'),
        filteredLogs: filteredLogs 
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
