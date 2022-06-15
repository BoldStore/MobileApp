import {
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import dashboardStyles from '../../../styles/dashboardStyles';
import globalStyles from '../../../styles/globalStyles';
import ThemeColours from '../../../styles/themeColours';
import React from 'react';

const StoreProfileInfo = ({navigation}) => {
  const colourScheme = useColorScheme();
  const isDarkMode = colourScheme === 'dark';
  const screenWidth = Dimensions.get('window').width;
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

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView style={{backgroundColor: ThemeColours().white, flex: 1}}>
        <View style={globalStyles().container}>
          <View style={dashboardStyles().flexDiv}>
            <Text style={dashboardStyles().heading}>Total Sales</Text>
            <Text style={dashboardStyles().text}>2,220</Text>
          </View>
          <View style={dashboardStyles().flexDiv}>
            <Text style={dashboardStyles().heading}>Happy Customers</Text>
            <Text style={dashboardStyles().text}>500</Text>
          </View>
          <View style={dashboardStyles().flexDiv}>
            <Text style={dashboardStyles().heading}>Average Rating</Text>
            <Text style={dashboardStyles().text}>4.8</Text>
          </View>

          <LineChart
            data={data2}
            width={screenWidth}
            height={200}
            chartConfig={chartConfig}
            bezier
            style={{marginVertical: 10}}
          />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default StoreProfileInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    color: '#000',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 0,
    flex: 1,
  },
  heading: {
    fontSize: 18,

    textAlign: 'center',
    fontWeight: '600',
  },
  subHeading: {
    fontSize: 14,

    textAlign: 'center',
    opacity: 0.4,
    marginVertical: 10,
    fontWeight: '900',
  },
  btn: {
    // flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
    color: '#000',
    borderRadius: 50,
    borderWidth: 3,
    fontSize: 16,
    padding: 15,
    width: '70%',
    marginVertical: 20,

    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btn2: {
    // flex: 1,
    backgroundColor: '#000',
    textAlign: 'center',
    color: '#fff',
    borderRadius: 50,
    borderWidth: 3,
    fontSize: 16,
    padding: 15,
    width: '70%',
    marginVertical: 20,

    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  input: {
    borderBottomWidth: 2,
    padding: 10,
    paddingLeft: 0,
    fontSize: 18,

    color: '#333',
  },
  imgBox: {
    borderWidth: 0.5,
    borderColor: '#fff',
  },
});
