import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
import React from 'react';

export default function InstaBrowser({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{
          uri: 'https://www.instagram.com/oauth/authorize?client_id=716956792630660&redirect_uri=https://bold-96a92.firebaseapp.com/__/auth/handler&scope=user_profile%2Cuser_media&response_type=code',
        }}
        scalesPageToFit={false}
        onNavigationStateChange={navState => {
          if (navState.url.indexOf('code=') != -1) {
            console.log(navState.url.substring(navState.url.indexOf('code=')));
            navigation.navigate('StoreTabs');
          }
        }}
      />
    </SafeAreaView>
  );
}
