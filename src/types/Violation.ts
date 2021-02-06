import type Help from './Help';

export default interface Violation extends Help {
  pathToComponent: string[];
}
