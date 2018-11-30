// third party libraries
import { connect } from 'react-redux';

// components
import Login from '../../components/Login/Login';


// actions
import { userLoginRequest } from '../../actions/login';
import { loaderOn } from '../../actions/toggleLoader';

const mapDispatchToProps = dispatch => ({
  login: (details) => {
    dispatch(userLoginRequest(details));
  },
  loaderOn: () => {
    dispatch(loaderOn());
  }
});

const mapStateToProps = state => ({
  auth: state.auth,
  login: state.auth.login,
  loading: state.loading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
