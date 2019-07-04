import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBznrSfIF4rf9HA4UAhbhMcd0d71x4HxoM",
  authDomain: "react-native-test-f3af4.firebaseapp.com",
  databaseURL: "https://react-native-test-f3af4.firebaseio.com",
  projectId: "react-native-test-f3af4",
  storageBucket: "react-native-test-f3af4.appspot.com",
  messagingSenderId: "963434175464",
  appId: "1:963434175464:web:5e8920ccfaf2b52f"

};  

firebase.initializeApp(firebaseConfig);
import { Container , Content, Header , Form, Input, Item, Button, Label} from 'native-base'
export default function App() { 
 

  return (
    
<Container style={styles.Container}>
<Form>
  <Item floatingLabel>
    <Label>Email</Label>
    <Input
    autoCapitalize= "none"></Input>
  </Item>
  <Item floatingLabel>
    <Label>Password</Label>
    <Input
    secureTextEntry={true}
    autoCapitalize= "none"></Input>
  </Item>
  <Button style= {{marginTop: 32}}
    full
  rounded
  success>
    <Text style={{color:'white'}}>Login</Text>
  </Button>
  <Button style= {{marginTop: 17}}
    full
  rounded
  primary>
    <Text style={{color:'white'}}>Signup</Text>
  </Button>
</Form>
</Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
