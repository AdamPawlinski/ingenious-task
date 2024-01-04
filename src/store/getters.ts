import { State } from '../types'

export const getLines = (state: State): number[] => {  
  const allLines = state.stopsData.map(stop => stop.line);
  allLines.sort()
  return allLines.filter((stop, index, stops) => stops.indexOf(stop) === index);
}

export const getStops = (state: State): string[] => {
  const allStops = state.stopsData.map(stop => stop.stop)
  const stopsUnique = allStops.filter((stop, index, stops) => stops.indexOf(stop) === index);
  return stopsUnique.sort((prev, next) => {
    if (prev > next) return 1;
    if (prev < next) { return -1 } else {
      return 0; 
    }
  })  
}

export const getLineStops = (state: State) => (line: number) => {
  const stops = state.stopsData.filter(stopItem => stopItem.line === line);

  stops.sort((prev, next) => {
    if (prev.order > next.order) return 1;
    if (prev.order < next.order) { return -1 } else {
      return 0; 
    }
  })
  return [...new Set(stops.map(stopItem => stopItem.stop))];
};

export const getStopTimes = (state: State) => (stop: string) => {
  const stops = state.stopsData.filter(stopItem => {
    return stopItem.stop === stop;
  })
  
  const times = [...new Set(stops.map(stopItem => stopItem.time))];
  const timesWithZeros = times.map(time => time.split(':')[0].length === 1 ? '0'.concat(time) : time);
  return timesWithZeros.sort((prev, next) => prev.localeCompare(next));   
}
