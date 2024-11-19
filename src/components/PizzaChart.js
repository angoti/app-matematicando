import { Pie, PolarChart } from 'victory-native';

export function PizzaChart({ data }) {
  console.log('data', data);
  return (
    <PolarChart
      data={data}
      labelKey={'label'}
      valueKey={'value'}
      colorKey={'color'}>
      <Pie.Chart />
    </PolarChart>
  );
}
