import type { ReactTestInstance } from 'react-test-renderer';
import type Help from './Help';

export default interface Rule {
  id: string;
  matcher: (node: ReactTestInstance) => boolean;
  assertion: (node: ReactTestInstance) => boolean;
  help: Help;
}
