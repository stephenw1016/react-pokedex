import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import {PokemonList} from '../PokemonList';

test('should render pokemon', () => {
  let pokemonList = [{ id: 1, name: 'bulbasaur' }, { id: 2, name: 'ivysaur' }, { id: 3, name: 'venusaur' }];
  let componentJSX = <MemoryRouter><PokemonList pokemon={pokemonList} /></MemoryRouter>;
  let componentJSON = renderer.create(componentJSX).toJSON();

  expect(componentJSON).toMatchSnapshot();
});
