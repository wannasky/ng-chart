

export class Logger {

  static print(...args) {
    console.log(...args);
  }

  static info(...args){
    (console.info || console.log)(...args);
  }

  static error(...args) {
    (console.error || console.log)(...args);
  }

  static debug(...args) {
    (console.debug || console.log)(...args);
  }
}
