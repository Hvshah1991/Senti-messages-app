import image4 from "../assets/images/image4.png";
import React from 'react';
import { Button } from '@rneui/themed';
import {Text, View, TextInput, Image, SafeAreaView, ScrollView, StyleSheet, StatusBar} from 'react-native';

const Contact = () => {

    const styles = StyleSheet.create({
        img_4: {
            width: 250,
            height: 200,
            resizeMode: 'auto',
        },
        container: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
        },
        scrollView: {
            backgroundColor: '#FAFAFA',
            marginHorizontal: 0,
        },
        contact_text: {
            fontFamily: 'AvenirNext-DemiBold',
            color: '#6091FF',
            fontSize: 18,
            textAlign: 'center',
            paddingTop: 15,
            paddingBottom: 10,
        },
        img_container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
        },
        plain_text: {
            fontFamily: 'AvenirNext-DemiBold',
            color: '#6091FF',
            fontSize: 14,
            textAlign: 'left',
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 0,
        },
        input: {
            height: 35,
            margin: 10,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            borderColor: '#7CFF95',
            backgroundColor: '#FFFFFF',
            fontFamily: 'AvenirNext-Medium',
        },
        input_message: {
            height: 65,
            margin: 10,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            borderColor: '#7CFF95',
            backgroundColor: '#FFFFFF',
            fontFamily: 'AvenirNext-Medium',
        },
        button_container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
        },
    });

    return (
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <Text style={styles.contact_text}>CONTACT US</Text>
            <View style={styles.img_container}>
                <Image style={styles.img_4} source={image4} />
            </View>
            <Text style={styles.plain_text}>Name</Text>
            <TextInput
                  multiline={true}
                  numberOfLines={1}
                  placeholder="Your first and last name"
                  style={styles.input}
                ></TextInput>
            <Text style={styles.plain_text}>Email</Text>
            <TextInput
                  multiline={true}
                  numberOfLines={1}
                  placeholder="Your email address"
                  style={styles.input}
                ></TextInput>
            <Text style={styles.plain_text}>Your Inquiry</Text>
            <TextInput
                  multiline={true}
                  numberOfLines={4}
                  placeholder="Your message for us"
                  style={styles.input_message}
                ></TextInput>
            <View style={styles.button_container}>
                <Button 
                title="SUBMIT"
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
            </View>
            </ScrollView>
            </SafeAreaView>
    )

}

export default Contact;