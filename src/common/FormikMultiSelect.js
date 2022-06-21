/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Alert,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function FormikMultiSelect({
  formikprops,
  name,
  label,
  fakeDataMultiDDL,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={{marginBottom: 10}}>{label}</Text>
        <View style={styles.formikSelect}>
          {formikprops.values[name] ? (
            <Text style={styles.showedLabel}>
              {formikprops.values[name].label}
            </Text>
          ) : (
            <Text>Select....</Text>
          )}
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView style={{height: 200}}>
              {fakeDataMultiDDL.map(item => (
                <TouchableOpacity
                  onPress={() =>
                    formikprops.setFieldValue(`${name}`, [
                      ...(formikprops.values[name] || []),
                      {
                        value: item.value,
                        label: item.label,
                      },
                    ])
                  }>
                  {console.log(formikprops.values[name])}
                  <Text
                    style={
                      formikprops.values[name].some(i => i.value === item.value)
                        ? styles.selectedLabel
                        : styles.selectLabel
                    }>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.buttonStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 25,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonOpen: {
    backgroundColor: '#F19400000',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonStyle: {
    borderRadius: 8,
    padding: 10,
    color: 'white',
    backgroundColor: '#2196F3',
    textAlign: 'right',
    elevation: 2,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  formikSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    height: 50,
  },
  selectLabel: {
    fontSize: 20,
    marginBottom: 7,
    backgroundColor: 'lightgrey',
    width: '100%',
    padding: 7,
    color: 'black',
  },
  selectedLabel: {
    fontSize: 20,
    marginBottom: 7,
    backgroundColor: '#2196F3',
    width: '100%',
    padding: 7,
    color: 'white',
  },
  showedLabel: {
    fontSize: 20,
  },
});
