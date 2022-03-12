import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const OnboardingScreen = ({navigation}) => {
    setTimeout(() => {
      navigation.navigate('AppStack')
    }, 1000);
  return (
    <SafeAreaView 
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#01579b',
              }}>
                <View style={{marginTop:10}}>
                  <Text style={{ fontSize: 35,
                     fontWeight: 'bold', color: 'white',
                     padding: 10 , fontStyle:'normal',
                     justifyContent:'center',
                     alignItems: 'center'}}>
                    Remedy
                  </Text>
                </View>
                {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:-10, marginBottom: 10}}>
                <BgImg width={300} height={300} resizeMode='contain'/>
                </View> */}
                <View>
                <Text style={{ fontSize: 18,
                  fontWeight: '400',
                  lineHeight: 26 ,
                  textAlign: 'center',
                  color: '#F0F8FF',
                  fontStyle:'normal',
                  marginBottom: 15
                  }}>
                  Thousand of people are using Remedy App for small medications{' '}
                </Text>
                </View>
                
              
              
    </SafeAreaView>
  );
  };

export default OnboardingScreen;