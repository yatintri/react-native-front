import React, { useState } from "react"

import {View, 
     Text,
     ScrollView, 
     ImageBackground,
     TextInput,
     BackHandler,
     TouchableOpacity,
     FlatList,
     Button
    } from 'react-native'

import Feather from 'react-native-vector-icons/Feather';    
import { SafeAreaView } from "react-native-safe-area-context"
import Carousel from "react-native-snap-carousel";
import { doctors, pharmacies, sliderData } from "../model/data";
import { useEffect } from "react";
import BannerSlider from "../components/BannerSlider";
import { windowWidth } from "../utils/Dimensions"; 
import CustomSwitch from "../components/CustomSwitch";
import ListItem from "../components/ListItem";

export default function HomeScreen({navigation}){
    

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => BackHandler.exitApp()
        )
        
      }, [])
    
    const [doctorsTab, setDoctorsTab] = useState(1);

    const renderBanner = ({item, index}) => {
        return <BannerSlider data={item}/>;
    };

    const onSelectSwitch = (value) => {
        console.log(value)
            setDoctorsTab(value);
    };
    const item = ({item})=>{
          return <Text>{item.title}</Text>
    }
    return(
        <SafeAreaView style={{flex: 1,backgroundColor: '#fff'}}>
            <ScrollView style={{padding: 20}}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                }}>
                <Text style={{fontSize: 25,fontWeight:'bold', fontFamily: 'Roboto-Medium'}}>
                    Hello User</Text>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>   
                <ImageBackground 
                    source={require('../assets/images/user-profile.jpg')} 
                    style={{width: 70, height: 60}} 
                    imageStyle={{borderRadius:25}}
                />
                </TouchableOpacity> 
                </View>

                <View style={{flexDirection: 'row',
                              borderColor: '#C6C6C6',
                              borderWidth: 1,
                              borderRadius:8,
                              paddingHorizontal: 10,
                              paddingVertical: 8,
                            }}>
                    <Feather 
                    name="search" 
                    size={40} 
                    color="#C6C6C6" 
                    style={{marginRight: 5}} 
                    />
                    <TextInput style={{fontSize:20}} placeholder="Search"/>
                </View>
                <View style={{
                    marginVertical: 15,
                    flexDirection:'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{fontSize: 22,fontWeight:'bold', fontFamily: 'Roboto-Medium'}}>Our Offerings</Text>
                    <TouchableOpacity onPress={()=>{}}>
                        <Text style={{color: '#0aada8' ,fontSize:18}}>See all</Text>
                    </TouchableOpacity>
                </View>
                
              <Carousel 
                    ref={(c) => { this._carousel = c; }}
                    data={sliderData}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth - 40}
                    itemWidth={300}
                    loop={true}
              />
              

              <View style={{marginVertical:20}}>
                  <CustomSwitch 
                  selectionMode={1}
                  option1="Doctors"
                  option2="Pharmacies"
                  onSelectSwitch={onSelectSwitch}
                    />
              </View>
                {doctorsTab == 1 && 
                    doctors.map(item => (
                            <ListItem
                                key={item.id}
                                photo={item.poster}
                                title={item.title}
                                subTitle={item.subtitle}
                                isFree={item.isFree}
                               
                            />
                        
                    ))

                }
                {doctorsTab == 2 &&
                    pharmacies.map(item => (
                    <ListItem
                        key={item.id}
                        photo={item.poster}
                        title={item.title}
                        //subTitle={item.subtitle}
                        isFree={item.isFree}
                        price={item.price}
                    
                    />
                ))}
            
            
            </ScrollView>
        </SafeAreaView>
    );
}