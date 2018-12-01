// third party libraries
import { connect } from 'react-redux';

// components
import EditEntry from '../../components/EditEntry/EditEntry';

// actions
import { userViewRequest  } from '../../actions/viewEntry';
import { userEditRequest  } from '../../actions/editEntry';
import { loaderOn } from '../../actions/toggleLoader';

const mapDispatchToProps = dispatch => ({
  getEntry: () => {
    dispatch(userViewRequest());
  },
  loaderOn: () => {
    dispatch(loaderOn());
  },
  editEntry: (details) => {
    dispatch(userEditRequest(details));
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
)(EditEntry);
