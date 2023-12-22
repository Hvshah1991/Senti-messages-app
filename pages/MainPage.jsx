import React, {useState} from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import { Button } from '@rneui/themed';
import axios from "axios";
import Wave from '../wave';


const MainPage = () => {

    const [state, setState] = useState({
      MessageText: "",
    });
    const [magnitude, setMagnitude] = useState("")
    const [score, setScore] = useState("")

    const [loading, setLoading] = useState(false);
  
    const handleSubmit = (event) => {
      setLoading(true);
      setTimeout(()=>{
      setLoading(false);
      },1500)
      event.preventDefault();
      axios.post("http://localhost:3000/input/", {
        data: state.MessageText,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) => {
          console.log("Server response: ", res);
          setMagnitude(res.data.magnitude)
          setScore(res.data.score)
        })
        .catch((err) => {
          console.log("Server respondend with error: ", err);
        })
    };

  
    const handleChange = (MessageText) => {
      const value = MessageText;
      setState({
        ...state,
        MessageText: value
      })
      // console.log(value)
    };

  
    const handleCancel = (event) => {
      event.preventDefault();
      setState({
        MessageText: "",
      })
      setMagnitude("")
      setScore("")
      alert("Message Analysis Cancelled");
    };


    const styles = StyleSheet.create({
      input: {
        height: 80,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#7CFF95',
        backgroundColor: '#FFFFFF',
        fontFamily: 'AvenirNext-Medium',
      },
      main_container: {
        backgroundColor: '#FAFAFA',
      },
      message_text: {
        fontFamily: 'AvenirNext-DemiBold',
        color: '#6091FF',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 15,
      },
      button_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      results_container: {
        marginTop: 60,
      },
      results_text: {
        fontFamily: 'AvenirNext-DemiBold',
        color: '#6091FF',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 10,
      },
      mag_numeric: {
        position: 'relative',
        left: 38,
        top: 55,
      },
      wave_graph: {
        position: 'absolute',
      },
      mag_container: {

      },
      mag_text: {
        fontFamily: 'AvenirNext-DemiBold',
        color: '#6091FF',
        fontSize: 15,
        paddingLeft: 12,
      },
      mag_font: {
        fontFamily: 'AvenirNext-DemiBold',
        color: '#6091FF',
        fontSize: 15,
      },
      first_result: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
      },
      mag_result: {
        width: 225,
        fontFamily: 'AvenirNext-Regular',
        color: '#6091FF',
        fontSize: 14,
        paddingTop: 50,
      },
      score_text: {
        fontFamily: 'AvenirNext-DemiBold',
        color: '#6091FF',
        fontSize: 15,
        paddingLeft: 25,
        paddingBottom: 10,
      },
      score_container: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        width: 80,
        marginLeft: 10,
        paddingRight: 5,
        paddingLeft: 10,
        paddingTop: 7,
      },
      second_result: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        gap: 5,
      },
      score_result: {
        width: 225,
        fontFamily: 'AvenirNext-Regular',
        color: '#6091FF',
        fontSize: 14,
        paddingTop: 15,
      },
      emoji_img: {
        width: 50,
        height: 50,
        resizeMode: 'stretch',
      },
      score_wrapper: {
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },mag_color: {
        fontFamily: 'AvenirNext-DemiBold',
        color: '#0BDA51',
        fontSize: 15,
      }
    })



    return (
      <>
        <View style={styles.main_container}>
            <Text style={styles.message_text}>MESSAGE</Text>
              <View>
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  placeholder="Add some text that you want to analyze for sentiment"
                  onChangeText={handleChange}
                  defaultValue={state.MessageText}
                  style={styles.input}
                ></TextInput>
              </View>
              <View style={styles.button_container}>
                <Button 
                onPress={handleSubmit} 
                title="CHECK"
                loading={loading}
                titleStyle={{ 
                  fontFamily: 'AvenirNext-Medium',
                  fontSize: 15,
                  color:'#FFFFFF' }}
                buttonStyle={{
                  backgroundColor: '#6091FF',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 5,
                  paddingVertical: 5,
                }}
                containerStyle={{
                  width: 100,
                  height: 40,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }} 
                />
                <Button 
                onPress={handleCancel} 
                title="CLEAR"
                titleStyle={{ 
                  fontFamily: 'AvenirNext-Medium',
                  fontSize: 15,
                  color: '#6091FF' }}
                buttonStyle={{
                  backgroundColor: '#FFFFFF',
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingVertical: 5,
                  borderColor: '#6091FF'
                }}
                containerStyle={{
                  width: 100,
                  height: 40,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}  
                />
              </View>
        {/* use conditional rendering for when there's no score OR magnitude */}
        {magnitude && <View style={styles.results_container}>
          <Text style={styles.results_text}>RESULTS</Text>
          <View>
            <View style={styles.first_result}>
              <View style={styles.mag_container}>
                <Text style={styles.mag_text}>Magnitude</Text>
                <View style={styles.mag_numeric}>
                  <Text style={styles.mag_color}>{parseFloat(magnitude).toFixed(2)}</Text>
                </View>
                <View>
                  <Wave style={styles.wave_graph} size={100} progress={magnitude} />
                </View>
              </View>
              <Text style={styles.mag_result}>
                The higher the value the more positive/negative the message. This is the absolute value of the sentiment.
              </Text>
            </View>
            <View style={styles.second_result}>
              <View style={styles.mag_container}>
                <Text style={styles.score_text}>Score</Text>
                <View style={styles.score_container}>
                  <View style={styles.score_wrapper}>
                    <Text style={styles.mag_font}>{parseFloat(score).toFixed(2)}</Text>
                    <View>
                      {parseFloat(score).toFixed(2) > 0 ? <Text style={styles.mag_font}>Positive</Text>: <Text style={styles.mag_font}>Negative</Text> }
                    </View>
                  </View>
                  <View>
                    {parseFloat(score).toFixed(2) > 0 ? <Image style={styles.emoji_img} source={require('../assets/images/happy.png')}/>: <Image style={styles.emoji_img} source={require('../assets/images/sad.png')}/> }
                  </View>
                </View>
              </View>
              <Text style={styles.score_result}>
                A score closer to 1.0 means the message has a positive sentiment. A score closer to -1.0 means the message has a negative sentiment.
              </Text>
            </View>
          </View>
        </View>}
        </View>
      </>
    );
  };

  
  export default MainPage;