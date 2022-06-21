import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Menu from '../common/Menu';
import MyForm from './Form';
const Home = ({navigation}) => {
  return (
    <Menu navigation={navigation}>
      <View style={styles.container}>
        <Text style={{fontSize: 24}}>Login please</Text>
        <View marginTop={15}>
          <MyForm navigation={navigation} />
        </View>
      </View>
    </Menu>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default Home;
