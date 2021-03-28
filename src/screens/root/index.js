import React from 'react';
import {connect} from 'react-redux';
import {App} from '../app/index';
import {Auth} from '../auth/index';

const Root = (props) => {
  console.disableYellowBox = true;

  return props.isLoggedIn ? <App /> : <Auth />;
};
// export default Root;
const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(Root);
