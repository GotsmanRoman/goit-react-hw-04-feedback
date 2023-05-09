import React from 'react';
import { NavButtons, Button } from './FeedbackOptions.module';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <NavButtons>
      {options.map(item => {
        return (
          <Button
            key={item}
            name={item}
            onClick={event => onLeaveFeedback(event)}
          >
            {item}
          </Button>
        );
      })}
    </NavButtons>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export { FeedbackOptions };
