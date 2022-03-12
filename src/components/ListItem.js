import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { windowWidth } from '../utils/Dimensions';

export default function ListItem({photo, title, subTitle, isFree, price}) {
  return (
    <View style={{
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    }}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <Image
          source={photo}
          style={{width: 55, height: 55, borderRadius: 10, marginRight: 8}}
        />
        <View style={{width: windowWidth - 250}}>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 16,
              fontWeight: 'bold'
            }}>
            {title}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}>
            {subTitle}
          </Text>
        </View>
      </View>

      <TouchableOpacity  style={{
        backgroundColor:'#0aada8',
        padding:10,
        width: 140,
        borderRadius: 10,
      }}>
        <Text style={{
          color: '#fff',
          textAlign: 'center',
          fontFamily: 'Roboto-Medium',
          fontSize: 14,
          fontWeight: 'bold',
        }}>
          {isFree == 'Yes' && 'Book Appointment'}
          {isFree == 'No' && 'Book Medicine'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}