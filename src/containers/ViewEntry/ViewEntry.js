// third party libraries
import { connect } from 'react-redux';

// components
import ViewEntry from '../../components/ViewEntry/ViewEntry';


// actions
import { userViewRequest } from '../../actions/viewEntry';
import { loaderOn } from '../../actions/toggleLoader';

const mapDispatchToProps = dispatch => ({
  getEntry: () => {
    dispatch(userViewRequest());
  },
  loaderOn: () => {
    dispatch(loaderOn());
  }
});

const mapStateToProps = state => ({
  auth: state.auth,
  loading: state.loading,
  entry: state.viewEntry.entry
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewEntry);
