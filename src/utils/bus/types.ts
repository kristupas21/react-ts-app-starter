export enum BusEvent {
  Default = 'bus-evt_default'
}

export type BusParamsDefault = undefined;

type Fn<T> = (params: T) => void;

export interface Bus {
  emit(evt: BusEvent.Default, params: BusParamsDefault),

  on(evt: BusEvent.Default, fn: Fn<BusParamsDefault>),

  off(evt: BusEvent.Default, fn: Fn<BusParamsDefault>),
}
