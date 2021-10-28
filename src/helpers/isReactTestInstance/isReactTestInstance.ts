import type { ReactTestInstance } from 'react-test-renderer';

export default function isReactTestInstance(
  candiate: unknown
): candiate is ReactTestInstance {
  return (
    !!candiate &&
    typeof candiate === 'object' &&
    'instance' in (candiate as any)
  );
}
