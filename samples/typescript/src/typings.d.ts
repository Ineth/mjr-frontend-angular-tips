/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// Support NodeJS modules without type definitions
// declare module '*';

// add global variable to window
// interface Window {
//   ENV: string;
// }

// add none standard function on Error
// interface ErrorConstructor {
//   stackTraceLimit: number;
// }

// declare module '*.json' {
//   const value: any;
//   export default value;
// }
