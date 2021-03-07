import type { ReactTestInstance } from 'react-test-renderer';

const canBeDisabled = (node: ReactTestInstance) => {
  const inTree = node.findAll(
    (_node: ReactTestInstance) =>
      _node.props.disabled !== undefined || _node.props.enabled !== undefined
  );

  // If this node can be disabled BUT more than one disable-able component
  // is found in the tree that has this node as root,
  // it means that this node must be a Wrapper for the
  // actual disable-able component and should therefore be discarded.

  return (
    (node.props.disabled !== undefined || node.props.enabled !== undefined) &&
    inTree.length === 1
  );
};

export default canBeDisabled;
