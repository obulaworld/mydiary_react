// third party libraries
import { connect } from 'react-redux';

// components
import Signup from '../../components/Signup/Signup';

// actions
import { userSignupRequest } from '../../actions/signup';
import { loaderOn } from '../../actions/toggleLoader';

const mapDispatchToProps = dispatch => ({
  signup: (details) => {
    dispatch(userSignupRequest(details));
  },
  loaderOn: () => {
    dispatch(loaderOn());
  }
});


const mapStateToProps = state => ({
  signup: state.auth.signup,
  loading: state.loading,
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
