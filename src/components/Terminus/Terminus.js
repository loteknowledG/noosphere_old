import * as React from 'react';
import PropTypes from 'prop-types';
import { Navigator } from "../Navigator"

export function Terminus(props) {
  return (
    <>
      <Navigator />
    </>
  );
}

Terminus.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Terminus;