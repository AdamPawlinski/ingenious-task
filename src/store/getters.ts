import { State } from '../types'



export const getLines = (state: State) => {
  return state.stopsData.map(stop => stop.line)
}

export const getStops = (state: State) => {
  return state.stopsData.map(stop => stop.stop)
}

export const getLineStops = (state: State, line: number) => {
  const stops = state.stopsData.filter(stopItem => stopItem.line === line)

  stops.sort((x, y) => {
    if (x.order > y.order) return 1;
    if (x.order < y.order) return -1;
    if (x.order === y.order) return 0; 
  })
  return stops.map(stopItem => stopItem.stop);
};

export const getStopTimes = (state: State, stop: string) => {
  const stops = state.stopsData.filter(stopItem => {
    return stopItem.stop === stop;
  })
  const times = stops.map(stopItem => stopItem.time)
  return times.sort((x, y) => x.localeCompare(y) )
}