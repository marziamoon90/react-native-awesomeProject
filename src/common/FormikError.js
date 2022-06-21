/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

const FormikError = ({errors, name, touched}) => {
  const errorRowIndex = name?.split('.')[1];
  const errorRowName = name?.split('.')[2];
  const errorMasseage = errors?.itemLists?.[errorRowIndex]?.[`${errorRowName}`];
  const touchedMasseage =
    touched?.itemLists?.[errorRowIndex]?.[`${errorRowName}`];
  return (
    <View>
      <Text>
        {errors && errors[`${name}`] && touched && touched[name] ? (
          <>
            <Text
              style={{
                fontSize: 16,
                color: 'red',
              }}>
              {errors[name]}
            </Text>
          </>
        ) : (
          ''
        )}
      </Text>
    </View>
  );
};

export default FormikError;
