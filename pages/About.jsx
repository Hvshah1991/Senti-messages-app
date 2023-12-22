import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import React from 'react';
import {Text, View, Image, SafeAreaView, ScrollView, StyleSheet, StatusBar} from 'react-native';

const About = () => {

    const styles = StyleSheet.create({
        img_1: {
            width: 250,
            height: 200,
            resizeMode: 'auto',
        },
        img_2: {
            width: 250,
            height: 200,
            resizeMode: 'auto',
        },
        img_3: {
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
        about_text: {
            fontFamily: 'AvenirNext-DemiBold',
            color: '#6091FF',
            fontSize: 18,
            textAlign: 'center',
            paddingTop: 15,
        },
        caption_text: {
            fontFamily: 'AvenirNext-DemiBold',
            color: '#6091FF',
            fontSize: 14,
            textAlign: 'center',
            paddingTop: 15,
            paddingBottom: 15,
        },
        img_container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
        },
        img_text: {
            fontFamily: 'AvenirNext-DemiBold',
            color: '#6091FF',
            fontSize: 14,
            textAlign: 'center',
            paddingTop: 50,
            width: 100,
        },
        plain_text: {
            fontFamily: 'AvenirNext-DemiBold',
            color: '#6091FF',
            fontSize: 14,
            textAlign: 'center',
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 15,
            paddingBottom: 15,
        },
        img2_container: {
            flex: 1,
            flexDirection: 'row-reverse',
            justifyContent: 'center',
        },
    });

    return (
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <Text style={styles.about_text}>ABOUT</Text>
            <Text style={styles.caption_text}>"Be sweet....Be sentimental"</Text>
            <View style={styles.img_container}>
                <Image style={styles.img_1} source={image1} />
                <Text style={styles.img_text}>Any message, caption, email, memo can be analysed using this Senti App</Text>
            </View>
            <Text style={styles.plain_text}>This App helps by identifying the positive or negative impact of the content you want to present.</Text>
            <View style={styles.img2_container}>
                <Image style={styles.img_2} source={image2} />
                <Text style={styles.img_text}>Senti uses Google Cloud Natural Language's Sentiment analysis method</Text>
            </View>
            <Text style={styles.plain_text}>The score of a message's sentiment indicates the overall emotion. The magnitude of a message's sentiment indicates how much emotional content is present within, and this value is often proportional to the length of the content.</Text>
            <View style={styles.img_container}>
                <Image style={styles.img_3} source={image3} />
                <Text style={styles.img_text}>Make messages more positive and your recipient happy</Text>
            </View>
            </ScrollView>
            </SafeAreaView>
    )

}

export default About;