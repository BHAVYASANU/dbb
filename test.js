import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, KeyBoardAvoidView, Image, Button, Svg,TouchOpacity, FlatList} from 'react-native';
import { Constants } from 'expo';

export default class App extends Component{
     state = { inputValue1:"",
              inputValue2: "",
              inputValue3: "",
    }
    render() {
    return (
      <View style={styles.container}>
       <Image
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
        style={{ height: 100, width: 100 }}
      />
    <Text style={styles.paragraph}>
         BOOK A BUS
         </Text>
         <KeyBoardAvoidView behaviour="padding" style={styles.container}>
           <TextInput
         value={this.state.inputValue1}
        onChangeText={this._handleTextChange}
        placeholder = "Destination"
        placeholderTextColor="rgba(255,255,255,0.7)"
        style={{ width: 200, height: 44, padding: 8 }}
      />
       <TextInput
       value={this.state.inputValue2}
        onChangeText={this._handleTextChange}
        placeholder = " Boarding point"
        placeholderTextColor="rgba(255,255,255,0.7)"
        style={{ width: 200, height: 44, padding: 8 }}
      />
       <TextInput
         value={this.state.inputValue3}
        onChangeText={this._handleTextChange}
        placeholder = "DAY TIME"
         style={{ width: 200, height: 44, padding: 8 }}
      />
       <TouchOpacity>
       <Button
        title="search"
        onPress={this._handleButtonPress}
      />
      </TouchOpacity>
      </KeyBoardAvoidView>
      <View >
      <Showpakg>
      </Showpakg>
      </View>
      <View >
      <Seatbng>
      </Seatbng>
      </View>
      <View >
      <Payment>
      </Payment>
      </View>
      </View>
       );
  }
}
export class Showpakg extends Component{
  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.paragraph}>
         Packages Available
         </Text>
       <FlatList
        data={[
         {key: 'SeabirdACCoach   $890'},
         {key: 'Sugama NonAC bus  $850'},
         {key: 'Sugama ACCoach   $990'},
         {key: 'SGR NonAC bus  $750'},
         {Key: '..........'},
         ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
     </View>
   );
  }
}
export class Seatbng extends Component
{
     render() {
    return (
      <View style={styles.container}>
       <Text style={styles.paragraph}>
         Choose Seats
         </Text>
          <Svg height={500} width={400}>
         <Svg.Rect
          x={100}
          y={100}
          width={100}
          height={100}
          strokeWidth={100}
          stroke="#9b59b6"
          fill="#3498db"
        />
        <Svg.Rect
          x={100}
          y={200}
          width={100}
          height={100}
          strokeWidth={100}
          stroke="#9b59b6"
          fill="#3498db"
        />
        <Svg.Rect
          x={100}
          y={400}
          width={100}
          height={100}
          strokeWidth={100}
          stroke="#9b59b6"
          fill="#3498db"
        />
        <Svg.Rect
          x={100}
          y={500}
          width={100}
          height={100}
          strokeWidth={100}
          stroke="#9b59b6"
          fill="#3498db"
        />
             <Svg.Rect
          x={400}
          y={100}
          width={100}
          height={100}
          strokeWidth={100}
          stroke="#9b59b6"
          fill="#3498db"
        />
              <Svg.Rect
          x={400}
          y={200}
          width={100}
          height={100}
          strokeWidth={100}
          stroke="#9b59b6"
          fill="#3498db"
        />
              <Svg.Rect
          x={400}
          y={300}
          width={100}
          height={100}
          strokeWidth={100}
          stroke="#9b59b6"
          fill="#3498db"
        />
       <Svg.Rect
          x={400}
          y={400}
          width={100}
          height={100}
          strokeWidth={100}
          stroke="#9b59b6"
          fill="#3498db"
        />
         </Svg>
      </View>
   );
  }
}

export class Payment extends Component{
         render() {
     return (
        <View style={styles.container}>
       <Text style={styles.paragraph}>
         Do Payments Via
         </Text>
       <FlatList
        data={[
         {key: 'Credit card'},
         {key: 'JusPay'},
         {key: 'eBanking'},
         {key: 'Low Cost EMI'},
         ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        </View>
   );
  }
}

const styles = StyleSheet.create({
     container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  }
});
