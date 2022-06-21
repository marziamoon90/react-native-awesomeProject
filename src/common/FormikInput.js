import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import FormikError from './FormikError';

const FormikInput = props => {
  const {
    placeholder,
    value,
    name,
    type,
    errors,
    touched,
    disabled,
    onChangeText,
    min,
    max,
    step,
    onBlur,
  } = props;

  return (
    <View>
      <TextInput
        value={value}
        name={name}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        min={min}
        max={max}
        // data-date={value ? moment(value).format('DD-MMMM-YYYY') : placeholder}
        onChangeText={onChangeText}
        step={step}
        onBlur={onBlur}
        borderWidth={1}
      />
      <FormikError errors={errors} touched={touched} name={name} />
    </View>
  );
};

export default FormikInput;
