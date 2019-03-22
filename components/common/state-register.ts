
export interface StateAccessor {

  writeStateValue(value: string): void;

  registerStateOnChange(fn: any): void;

}
