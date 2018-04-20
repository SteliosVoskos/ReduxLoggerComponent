import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actionCreators/actions';
import Decrement from '../components/Decrement';

function mapStateToProps(state) {
    return {
        person: state.person
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
};

const DecrementContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Decrement);

export default DecrementContainer;
