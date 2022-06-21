import {useFormik} from 'formik';
import React from 'react';
import {Button, View} from 'react-native';
import * as Yup from 'yup';
import FormikInput from '../common/FormikInput';
import FormikMultiSelect from '../common/FormikMultiSelect';
import FormikSelect from './FormikSelect';

const initialValues = {
  name: '',
  email: '',
  address: '',
  color: '',
  category: '',
  skills: [],
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('name is required'),
  email: Yup.string().required('email is required'),
  address: Yup.string().required('address is required'),
});

// fakeData for formik select
const fakeDataDDL = [
  {value: 1, label: 'FrontEnd'},
  {value: 2, label: 'BackEnd'},
  {value: 3, label: 'UI/UX'},
  {value: 4, label: 'Management'},
  {value: 5, label: 'Business Analyst'},
];

//fakedata for formik multi select
const fakeDataMultiDDL = [
  {value: 1, label: 'JavaScript'},
  {value: 2, label: 'React JS'},
  {value: 3, label: 'Node JS'},
  {value: 4, label: 'Bootstrap'},
  {value: 5, label: 'Express JS'},
  {value: 6, label: 'Mongo DB'},
  {value: 7, label: '.NET'},
  {value: 8, label: 'Adobe PhotoShop'},
  {value: 9, label: 'Adobe Illustrator'},
  {value: 10, label: 'Database and SQL'},
  {value: 11, label: 'Decision-Making '},
];

const MyForm = ({navigation}) => {
  const formikprops = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: values => {
      navigation.navigate('Details');
      resetForm(initialValues);
    },
    validationSchema,
  });
  const {
    handleChange,
    handleBlur,
    resetForm,
    handleSubmit,
    values,
    touched,
    errors,
  } = formikprops;
  return (
    <View>
      <FormikSelect
        formikprops={formikprops}
        name="category"
        label="Category"
        fakeDataDDL={fakeDataDDL}
      />
      <FormikMultiSelect
        formikprops={formikprops}
        name="skills"
        label="skills"
        fakeDataMultiDDL={fakeDataMultiDDL}
      />
      <FormikInput
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        value={values.name}
        borderWidth={1}
        marginBottom={15}
        touched={touched}
        errors={errors}
        name="name"
      />
      <FormikInput
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        borderWidth={1}
        marginBottom={15}
        touched={touched}
        errors={errors}
        name="email"
      />
      <FormikInput
        onChangeText={handleChange('address')}
        onBlur={handleBlur('address')}
        value={values.address}
        borderWidth={1}
        marginBottom={15}
        touched={touched}
        errors={errors}
        name="address"
      />
      <Button onPress={handleSubmit} title="Submit" />
    </View>
  );
};

export default MyForm;
