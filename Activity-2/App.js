import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeTextName] = React.useState('NAME: ');
  const [age, onChangeAge] = React.useState('Age: ');
  const [address, onChangeAddress] = React.useState('Address: ');
  const [school, onChangeschool] = React.useState('School: ');
  const [course, onChangeCourse] = React.useState('Course: ');
  const [email, onChangeEmail] = React.useState('Email: ');
  const [contact, onChangeContact] = React.useState('Contact: ');
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextName}
          value={name}
          placeholder="Name: "
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
          placeholder="AGE: "
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
          placeholder="Address: "
        />
         <TextInput
          style={styles.input}
          onChangeText={onChangeschool}
          value={school}
          placeholder="School: "
        />
         <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
          placeholder="Course: "
        />
         <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email: "
        />
         <TextInput
          style={styles.input}
          onChangeText={onChangeContact}
          value={contact}
          placeholder="Contact: "
        />
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={500}
          onChangeText={text => onChangeText(text)}
          value={value}
          style={styles.textInput}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    padding: 10,
    margin: 12,
    borderWidth: 1,
  },
});

export default TextInputExample;