import React from 'react';
import PropTypes from 'prop-types';
    
    const HandleName = ({Welcom,name}) => {
      return (
        <button onClick={Welcom.bind(this,name)}>Welcom</button>
      )
    }
    
HandleName.defaultProps = {
    name: 'Marwen Zitouni'
};

HandleName.propTypes = {
    name: PropTypes.string,
};

export default HandleName;

