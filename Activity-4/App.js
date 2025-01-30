import React from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeTextName] = React.useState('NAME: ');
  const [age, onChangeAge] = React.useState('Age: ');
  const [address, onChangeAddress] = React.useState('Address: ');
  const [school, onChangeschool] = React.useState('School: ');
  const [course, onChangeCourse] = React.useState('Course: ');
  const [email, onChangeEmail] = React.useState('Email: ');
  const [contact, onChangeContact] = React.useState('Contact: ');
  const [value, onChangeText] = React.useState('About Me');


  const images = {
    name: 'https://th.bing.com/th/id/OIP.MriirOqDDXF44DR-4ApeDAHaHa?rs=1&pid=ImgDetMain',
    age: 'https://th.bing.com/th/id/OIP.b8AyUgUNZdMekH6EOqDzPgHaFu?rs=1&pid=ImgDetMain',
    address: 'https://static.vecteezy.com/system/resources/previews/008/015/118/original/address-icon-free-vector.jpg',
    school: 'https://static.vecteezy.com/system/resources/previews/000/593/451/original/vector-school-icon.jpg',
    course: 'https://static.vecteezy.com/system/resources/previews/008/760/822/original/online-course-icon-style-free-vector.jpg',
    email: 'https://thumbs.dreamstime.com/b/email-icon-red-round-button-isolated-abstract-illustration-102221067.jpg',
    contact: 'https://icon-library.com/images/contact-us-icon-png/contact-us-icon-png-4.jpg',
    aboutme: 'https://th.bing.com/th/id/OIP.DDF1XOLLAjDjipZWy-z5vwHaF7?rs=1&pid=ImgDetMain',
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.inputRow}>
          <Image source={{ uri: images.name }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextName}
            value={name}
            placeholder="Name: "
          />
        </View>
        <View style={styles.inputRow}>
          <Image source={{ uri: images.age }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAge}
            value={age}
            placeholder="AGE: "
            keyboardType="numeric"
          />
        </View>

       
        <View style={styles.inputRow}>
          <Image source={{ uri: images.address }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={address}
            placeholder="Address: "
          />
        </View>

      
        <View style={styles.inputRow}>
          <Image source={{ uri: images.school }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeschool}
            value={school}
            placeholder="School: "
          />
        </View>

     
        <View style={styles.inputRow}>
          <Image source={{ uri: images.course }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeCourse}
            value={course}
            placeholder="Course: "
          />
        </View>

   
        <View style={styles.inputRow}>
          <Image source={{ uri: images.email }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email: "
          />
        </View>

        <View style={styles.inputRow}>
          <Image source={{ uri: images.contact }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeContact}
            value={contact}
            placeholder="Contact: "
          />
        </View>


        <View style={styles.inputRow}>
          <Image source={{ uri: images.aboutme }} style={styles.icon} />
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={500}
            onChangeText={text => onChangeText(text)}
            value={value}
            style={styles.textInput}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginLeft: 12,
    borderWidth: 1,
    padding: 10,
    flex: 1, 
  },
  textInput: {
    padding: 10,
    margin: 12,
    borderWidth: 1,
    flex: 1, 
  },
  inputRow: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 12, 
  },
  icon: {
    width: 35,
    height: 35,
  },
});

export default TextInputExample;
