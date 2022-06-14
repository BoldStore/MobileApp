import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  RefreshControl,
} from 'react-native';
import dashboardStyles from '../../styles/dashboardStyles';
import globalStyles from '../../styles/globalStyles';
import ThemeColours from '../../styles/themeColours';
import {ProgressChart, LineChart} from 'react-native-chart-kit';
import React, {useCallback, useState} from 'react';

export default function StoreDashboard({navigation}) {
  const data = [0.6, 0.8];
  const screenWidth = Dimensions.get('window').width;
  const [refreshing, setRefreshing] = useState(false);

  const chartConfig = {
    backgroundGradientFrom: ThemeColours().white,
    backgroundGradientTo: ThemeColours().white,
    color: (opacity = 1) => `rgba(1,147,245,${opacity})`,
  };

  const data2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setRefreshing(false);
  }, [refreshing]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: ThemeColours().white, flex: 1}}>
        <View style={globalStyles().container}>
          <View style={dashboardStyles().group}>
            <View style={dashboardStyles().flexDiv}>
              <Text style={dashboardStyles().heading}>Total Sales</Text>
              <Text style={dashboardStyles().text}>2,220</Text>
            </View>
            <View style={dashboardStyles().flexDiv}>
              <Text style={dashboardStyles().heading}>Total Revenue</Text>
              <Text style={dashboardStyles().text}>$25,220</Text>
            </View>
          </View>
          <LineChart
            data={data2}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            bezier
          />

          <View style={dashboardStyles().group}>
            <View style={dashboardStyles().flexDiv}>
              <Text style={dashboardStyles().heading}>Avg Price</Text>
              <Text style={dashboardStyles().text}>$520</Text>
            </View>
            <View style={dashboardStyles().flexDiv}>
              <Text style={dashboardStyles().heading}>Retention</Text>
              <Text style={dashboardStyles().text}>70%</Text>
            </View>
            <View style={dashboardStyles().flexDiv}>
              <Text style={dashboardStyles().heading}>New Customers</Text>
              <Text style={dashboardStyles().text}>20%</Text>
            </View>
            <View style={dashboardStyles().flexDiv}>
              <Text style={dashboardStyles().heading}>Old Customers</Text>
              <Text style={dashboardStyles().text}>80%</Text>
            </View>
          </View>
          <ProgressChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
