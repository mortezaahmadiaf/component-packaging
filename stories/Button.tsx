import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */

 interface IButton{
  primary:any;
   backgroundColor:string;
    size:string;
     label:string
 }
export const Button = (props:IButton) => {
  const mode = props.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${props.size}`, mode].join(' ')}
      style={props.backgroundColor && { backgroundColor:props.backgroundColor }}
    >
      {props.label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
