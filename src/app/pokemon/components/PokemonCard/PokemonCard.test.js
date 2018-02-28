import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import PokemonCard from '../PokemonCard';

test('should render pokemon', () => {
  let componentJSX = <MemoryRouter><PokemonCard pokemon={{ id: 1, name: 'bulbasaur' }} /></MemoryRouter>;
  let componentJSON = renderer.create(componentJSX).toJSON();

  expect(componentJSON).toMatchSnapshot();
});
