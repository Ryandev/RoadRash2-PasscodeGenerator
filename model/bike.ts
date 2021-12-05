const LIST_BIKES: Array<string> = [
  "Shuriken 400",
  "Panda 500",
  "Shuriken TT 250",
  "Panda 900",
  "Banzai 7.11",
  "Banzai 600 N",
  "Banzai 750 N",
  "Shuriken 1000 N",
  "Banzai 7.11 N",
  "Diablo 1000 N",
  "Panda 600",
  "Banzai 600",
  "Banzai 750",
  "Shuriken 1000",
  "Diablo 1000",
  "Wild Thing 2000",
];

const exports = {
  all: (): string[] => LIST_BIKES,
  atIndex: (idx: number): string => LIST_BIKES[idx],
  atValue: (val: string): number => LIST_BIKES.indexOf(val),
};

export default exports;
