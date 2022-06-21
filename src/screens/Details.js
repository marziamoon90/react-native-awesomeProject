import React from 'react';
import {Button, Text} from 'react-native';
import Menu from '../common/Menu';

const Details = ({navigation}) => {
  return (
    <Menu navigation={navigation}>
      <Text style={{fontSize: 24}}>Details</Text>
      <Text>
        Hello from home Hello from home Hello from home Hello from home Hello
        from home Hello from home Hello from home Hello from home Hello from
        home Hello from home Hello from home Hello from home Hello from home
        Hello from home Hello from home Hello from home Hello from home Hello
        from home Hello from home Hello from home Hello from home Hello from
        home Hello from home Hello from home Hello from home Hello from home
      </Text>
      <Button
        style={{margin: 50}}
        title="About"
        onPress={() => navigation.navigate('About')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </Menu>
  );
};

export default Details;
