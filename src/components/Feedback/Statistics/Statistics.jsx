import React from 'react';
import { DataList, DataElem } from './Statistics.module';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <DataList>
    <DataElem>Good: {good}</DataElem>
    <DataElem>Neutral: {neutral}</DataElem>
    <DataElem>Bad: {bad}</DataElem>
    <DataElem>Total: {total}</DataElem>
    <DataElem>
      Positive feedback: <span>{positivePercentage}%</span>
    </DataElem>
  </DataList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export { Statistics };
