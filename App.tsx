/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { TextInput, Button, Card, Title } from 'react-native-paper';


import  { Component }  from 'react';
import ReactMoE, { MoEAppStatus, MoEGeoLocation, MoEProperties } from 'react-native-moengage';


class App extends Component {

  
  render() { 
  
  

    // ReactMoE.setEventListener("pushClicked", (notificationPayload) => {
    //   console.log("Notification Click Observer:", notificationPayload);
    // });
  
    // ReactMoE.setEventListener("inAppCampaignShown", (inAppInfo) =>
    //   console.log("inAppCampaignShown : ", inAppInfo)
    // );

    // ReactMoE.setEventListener("inAppCampaignClicked", (inAppInfo) =>{
    //   console.log("inAppCampaignClicked : dkfmslkdmvalk", inAppInfo)
    //   if(inAppInfo.navigation.navigationType == "deep_linking"){
    //      console.log("Handling Deep link")
    //      Linking.openURL(inAppInfo.navigation.url)
    //   }
    // });

    // ReactMoE.setEventListener("inAppCampaignDismissed", (inAppInfo) =>
    //   console.log("inAppCampaignDismissed : ", inAppInfo)
    // );

    // ReactMoE.setEventListener("inAppCampaignCustomAction", (inAppInfo) =>
    //   console.log("inAppCampaignCustomAction : ", inAppInfo)
    // );

    // ReactMoE.setEventListener("inAppCampaignSelfHandled", (selfHandledPayload) => {
    //   if (selfHandledPayload && Object.keys(selfHandledPayload).length != 0) {
    //     console.log("inAppCampaignSelfHandled", selfHandledPayload);
    //   }
    // });

    // ReactMoE.setEventListener("pushTokenGenerated", (token) => {
    //     console.log("TOKEN CALLBACK: ", token);
    // });

    //Initialize the MoEngage Plugin
    ReactMoE.initialize("SUBST8U6AVJ3T3A9Z4H0L2FT");
    //ReactMoE.enableSDKLogs();

    //For Tracking INSTALL
    ReactMoE.setAppStatus(MoEAppStatus.Install);

    //ReactMoE.`enableAdIdTracking`();

    ReactMoE.setCurrentContext(['profile','cheese']);
   
    ReactMoE.showInApp();

    ReactMoE.resetCurrentContext();

    //ReactMoE.resetCurrentContext();
    
    return(
      <View style={{flex:1}}>
        <ScrollView>
        <Header name="Weather App"/>

            <Button
                mode="contained" 
                theme={{colors:{primary:"green"}}}
                style={{margin:10}}
                onPress={() => {
                        
                        console.log("Login Button Clicked.");
                        ReactMoE.setUserUniqueID("8708153354");
                    
                    }
                }>
                <Text style={{color:"white"}}>Login</Text>
            </Button>

            <Button 
                mode="contained" 
                theme={{colors:{primary:"blue"}}}
                style={{margin:10}}
                onPress={() => {
                        
                        console.log("Track User Attributes Button Clicked.");
                        ReactMoE.setUserName("vicky7230");
                        ReactMoE.setUserFirstName("Vipin");
                        ReactMoE.setUserLastName("Kumar");
                        ReactMoE.setUserEmailID("vicky7230@gmail.com");
                        ReactMoE.setUserContactNumber("8708153354");
                        ReactMoE.setUserGender("Male"); // OR Female
                        ReactMoE.setUserAttribute("xyz",1);
                    
                    }
                }>
                <Text style={{color:"white"}}>Track User Attributes</Text>
            </Button>    

            <Button 
                mode="contained" 
                theme={{colors:{primary:"orange"}}}
                style={{margin:10}}
                onPress={() => {
                        
                        console.log("Track Events Button Clicked.");
                        
                        let properties = new MoEProperties();

                        var array =[] // declaring array
                        var item1 ={'name': 'product1', 'price': 20} // declaring object 
                        var item2 ={'name': 'product2', 'price': 40} // declaring object 
                        array.push(item1)
                        array.push(item2)



                        properties.addAttribute("product","iphone");
                        properties.addAttribute("string_key", "dollar");
                        properties.addAttribute("double_key", 69.9);
                        properties.addAttribute("boolean_key", true);
                        properties.addDateAttribute("date_key", "2020-06-10T12:42:10Z");
                        properties.addLocationAttribute(
                            "location_key",
                            new MoEGeoLocation(90.00001, 180.00001)
                        );
                        ReactMoE.trackEvent("TEST_EVENT", properties);
                    }
                }>
                <Text style={{color:"white"}}>Track Events</Text>
            </Button>    

            <Button 
                mode="contained" 
                theme={{colors:{primary:"skyblue"}}}
                style={{margin:10}}
                onPress={() => {
                    //ReactMoE.showInApp()
                    }
                }>
                <Text style={{color:"white"}}>Show InApps</Text>
            </Button>   

            <Button 
                mode="contained" 
                theme={{colors:{primary:"skyblue"}}}
                style={{margin:10}}
                onPress={() => {
                    //ReactMoE.getSelfHandledInApp()
                    }
                }>
                <Text style={{color:"white"}}>Show Self Handled InApps</Text>
            </Button>

            <Button 
                mode="contained" 
                theme={{colors:{primary:"skyblue"}}}
                style={{margin:10}}
                onPress={() => {
                    console.log("Logout Button Clicked.");
                    //ReactMoE.logout()
                    }
                }>
                <Text style={{color:"white"}}>Logout</Text>
            </Button>    

            <Button  
                mode="contained" 
                theme={{colors:{primary:"skyblue"}}}
                style={{margin:10}}
                onPress={() => {
                    console.log("Track user attribute latest");
                    //ReactMoE.setUserAttribute("App Version", "1.5");
                    }
                }>
                <Text style={{color:"white"}}>Track New</Text>
            </Button>

            <Button
                mode="contained" 
                theme={{colors:{primary:"skyblue"}}}
                style={{margin:10}}
                onPress={() => {
                    console.log("Opening Inbox");
                    //NativeModules.MyModule.navigateToNative();
                    }
                }>
                <Text style={{color:"white"}}>Open Java Inbox</Text>
            </Button>

            <Button
                mode="contained" 
                theme={{colors:{primary:"skyblue"}}}
                style={{margin:10}}
                onPress={async() => {
                    //var inboxData= await MoEReactInbox.fetchAllMessages()
                    //console.log(inboxData)
                    }
                }>
                <Text style={{color:"white"}}>Get all messages from inbox</Text>
            </Button>

            <Button
                mode="contained" 
                theme={{colors:{primary:"skyblue"}}}
                style={{margin:10}}
                onPress={async() => {
                    // var count = await MoEReactInbox.getUnClickedCount()
                    // console.log("Unclicked Messages count : "+ count)
                    }
                }>
                <Text style={{color:"white"}}>Get unclicked message count</Text>
            </Button>

            <Button
                mode="contained" 
                theme={{colors:{primary:"skyblue"}}}
                style={{margin:10}}
                onPress={() => {
                    console.log("Change context and show InApps");
                    // ReactMoE.resetCurrentContext();
                    // ReactMoE.setCurrentContext(['Settings']);
                    // ReactMoE.showInApp();
                    }
                }>
                <Text style={{color:"white"}}>Change Context And ShowInApp</Text>
            </Button>
            
            </ScrollView>       
        </View>
    )
  }
}

export default App;
