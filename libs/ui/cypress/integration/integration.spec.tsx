import React from 'react';
import { mount } from '@cypress/react';
import Ui from '../../src/lib/ui';

describe('Ui', () => {
  it('should render successfully', () => {
    mount(<Ui />);
    cy.contains(/Welcome To ui/gi).should('be.visible');
  });
});
