import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Table, TableWrapper, Row, Col } from 'react-native-table-component';
import styles from "./style";
import * as Animatable from 'react-native-animatable';





export default class App extends React.Component {

  //constructor
  constructor() {
    super();
    this.state = {
      tickerData: [],
      priceData: [],
      timearray: [],
      largestPrice: '',
      smallestPrice: '',
      tableHead: ['Ticker', 'Price']


    };
  }

  /// called first when page load
  componentDidMount() {
    var timesocket = new WebSocket('wss://echo.websocket.org/');
    var socket = new WebSocket('ws://stocks.mnet.website')

    timesocket.onopen = () => {
      //connection opened
      timesocket.send(new Date().toGMTString());

    }

    timesocket.onmessage = ({ data }) => {
      //a message was received
      this.setState({ timearray: data })

    }

    socket.onmessage = ({ data }) => {
      //a message was received
      var array = JSON.parse(data)
      var ticker = [];
      var price = [];
      var finalData = [];

      for (entries of array) {
        ticker.push(entries[0])
        price.push(entries[1])
      }


      ///limit price upto two decimal
      price.forEach((item) => {
        finalData.push(item.toFixed(2))
      })

      // find largest price
      var largest = Number(finalData[0]);
      var smallest = Number(finalData[0]);
      finalData.forEach((num) => {
        if (largest < Number(num)) {
          largest = Number(num);

        }

      })

      // find smallest price
      finalData.forEach((num) => {
        if (smallest > Number(num)) {
          smallest = Number(num);

        }

      })


      this.setState({
        tickerData: ticker,
        priceData: finalData,
        largestPrice: largest,
        smallestPrice: smallest
      })


    }

    socket.onerror = (e) => {
      //an error occured
      console.log(e.message)
    }

  }



  render() {

    return (
      <View style={styles.container}>
        <View>
          <Animatable.Text style={styles.label} animation="pulse" easing="ease-out" iterationCount="infinite" direction="alternate">Live Stock Table</Animatable.Text>
        </View>
        <Text style={styles.textDate}>Last Updated : {this.state.timearray}</Text>
        <Table borderStyle={styles.table}>
          <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text_header} />
          <TableWrapper style={styles.subtable}>

            <Col data={this.state.tickerData} style={styles.row} heightArr={[30, 30, 30, 30, 30, 30, 30, 30, 30, 30]} textStyle={styles.text} />
            <Col data={this.state.priceData} style={styles.col} heightArr={[30, 30, 30, 30, 30, 30, 30, 30, 30, 30]} textStyle={[styles.text]} />


          </TableWrapper>
          <TableWrapper style={styles.subtable_bottom}>


            <Text style={styles.text}>Highest Price  <Text style={styles.text_highest}>{this.state.largestPrice}</Text></Text>
            <Text style={styles.text}>Lowest Price <Text style={styles.text_small}>{this.state.smallestPrice}</Text></Text>


          </TableWrapper>


        </Table>


      </View>


    );
  }
}




