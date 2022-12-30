import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = (props: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/background.jpeg')}
        style={styles.backgroundImage}>
        <View style={{width: 80}}>
          <Image
            source={require('../assets/images/hinh-anh-dep-6_044127357.jpeg')}
            style={styles.image}
          />
          <Text style={styles.nameText}>PhongNT</Text>
        </View>
      </ImageBackground>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#b596c9'},
  backgroundImage: {paddingVertical: 40, paddingHorizontal: 20},
  image: {height: 80, width: 80, borderRadius: 40, marginBottom: 10},
  nameText: {textAlign: 'center', fontWeight: '700', color: '#fff'},
});
