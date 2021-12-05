const LIST_LEVELS: Array<number> = [1, 2, 3, 4, 5];

const exports = {
  all: (): number[] => LIST_LEVELS,
  atIndex: (idx: number): number => LIST_LEVELS[idx],
  atValue: (val: number): number => LIST_LEVELS.indexOf(val),
};

export default exports;
