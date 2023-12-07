export type Stop = {
  line: number,
  stop: string,
  order: number,
  time: string,
}

export type State = {
  busLines: [],
  stopsData: Stop[],
  order: [],
  times: [],
}