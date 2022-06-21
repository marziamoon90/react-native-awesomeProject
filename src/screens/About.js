import React from 'react';
import {Button, Text, View} from 'react-native';
import Menu from '../common/Menu';

const About = ({navigation}) => {
  return (
    <Menu navigation={navigation}>
      <Text style={{fontSize: 24}}>About</Text>
      <Text>
        Hello from about Hello from about Hello from about Hello from about
        Hello from about Hello from about Hello from about Hello from about
        Hello from about Hello from about Hello from about Hello from about
        Hello from about Hello from about Hello from about Hello from about
        Hello from about Hello from about Hello from about Hello from about
        Hello from about Hello from about
      </Text>
      <Button title="Go back to Home" onPress={() => navigation.popToTop()} />
    </Menu>
  );
};

export default About;
