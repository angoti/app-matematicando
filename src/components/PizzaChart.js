import { View } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';

export function PizzaChart({ data }) {

  return (
    <View style={{ height: 250, marginVertical: 20 }}>
      <PieChart data={data} />
    </View>
  );
}
