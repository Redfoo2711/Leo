import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

import firebase from "../database/firebase";

const AddUserScreen = (props) => {
  const initalState = {
    name: "",
    lastname:"",
    second_lastname:"",
    email: "",
    phone: "",
    age:"",
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (state.name === "") {
      alert("please provide a name");
    } else {

      try {
        await firebase.db.collection("users").add({
          name: state.name,
          lastname:state.lastname,
          second_lastname:state.second_lastname,
          email: state.email,
          phone: state.phone,
          age:state.age,
        });

        props.navigation.navigate("UsersList");
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Name Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nombre"
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
        />
      </View>
      {/* Last name input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Apellido Paterno"
          onChangeText={(value) => handleChangeText(value, "lastname")}
          value={state.lastname}
        />
      </View>
      {/* Second Last Name */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Apellido Materno"
          onChangeText={(value) => handleChangeText(value, "second_lastname")}
          value={state.second_lastname}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Correo"
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => handleChangeText(value, "email")}
          value={state.email}
        />
      </View>

      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Telefono"
          onChangeText={(value) => handleChangeText(value, "phone")}
          maxLength ={10}
          value={state.phone}
        />
      </View>

      {/* Age */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Edad"
          onChangeText={(value) => handleChangeText(value, "age")}
          value={state.age}
        />
      </View>
      

      <View style={styles.button}>
        <Button title="Save User" onPress={() => saveNewUser()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddUserScreen;
