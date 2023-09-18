export type MetheusConstraint = {
  title: string;
  startValue: number;
  endValue: number;
  unit?: string;
};

export const METHEUS_CONSTRAINTS: MetheusConstraint[] = [
  {
    title: 'Mechanism Size',
    startValue: 0,
    endValue: 250,
  },
  {
    title: 'Accuracy',
    startValue: 0,
    endValue: 75,
    unit: '%',
  },
  {
    title: 'Required Power',
    startValue: 50,
    endValue: 100,
    unit: '%',
  },
  {
    title: 'Manufacturing Cost',
    startValue: 100,
    endValue: 400,
  },
  {
    title: 'Manipulability',
    startValue: 50,
    endValue: 100,
    unit: '%',
  },
];
