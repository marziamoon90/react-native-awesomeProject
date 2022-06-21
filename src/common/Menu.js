import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const Menu = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>{props.children}</View>

      <View style={styles.menuContaier}>
        <Button
          color="black"
          title="Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Details"
          color="black"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="About"
          color="black"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // height: Dimensions.get('window').height,
    flex: 1,
    position: 'relative',
  },
  menuContaier: {
    backgroundColor: 'lightgrey',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  menu: {
    backgroundColor: 'red',
    borderRadius: 15,
  },
});

export default Menu;
