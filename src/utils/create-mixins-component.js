/**
 * Some components can be used in all other components.
 */
import create from './create-component.js';
import Cell from '../components/cell';
import Loading from '../components/loading';
import Button from '../components/button';
export default function(sfc) {
  sfc.components = Object.assign(sfc.components || {}, {
    Cell,
    Loading,
    Button
  });
  return create(sfc);
}
