// third party libraries
import { connect } from 'react-redux';

// components
import Profile from '../../components/Profile/Profile';


// actions
import { userProfileRequest } from '../../actions/profile';
import { loaderOn } from '../../actions/toggleLoader';

const mapDispatchToProps = dispatch => ({
  profile: () => {
    dispatch(userProfileRequest());
  },
  loaderOn: () => {
    dispatch(loaderOn());
  }
});

const mapStateToProps = state => ({
  auth: state.auth,
  loading: state.loading,
  profileUser: state.profile
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
