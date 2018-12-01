// third party libraries
import { connect } from 'react-redux';

// components
import CreateEntry from '../../components/CreateEntry/CreateEntry';

// actions
import { userCreateRequest } from '../../actions/createEntry';

const mapDispatchToProps = dispatch => ({
  createEntry: (details) => {
    dispatch(userCreateRequest(details));
  },
  loaderOn: () => {
    dispatch(userCreateRequest());
  }
});

const mapStateToProps = state => ({
  auth: state.auth,
  loading: state.loading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEntry);
