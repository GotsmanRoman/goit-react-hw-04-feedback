import React from 'react';
import { Title, SectionContainer } from './Section.module';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <SectionContainer>
    <Title>{title}</Title>
    {children}
  </SectionContainer>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export { Section };
