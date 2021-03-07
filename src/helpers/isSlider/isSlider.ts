import type { ReactTestInstance } from 'react-test-renderer';

const isSlider = (node: ReactTestInstance) => {
  const slidersInTree = node.findAll((_node: ReactTestInstance) =>
    _node.type.toString().includes('Slider')
  );

  // If this node is a Slider BUT more than one slider
  // is found in the tree that has this node as root,
  // it means that this node must be a SliderWrapper for the
  // actual Slider and should therefore be discarded.

  return node.type.toString().includes('Slider') && slidersInTree.length === 1;
};

export default isSlider;
