import uuid from "react-native-uuid";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Modal,
  ScrollView,
} from "react-native";

export default function App() {
  const [tareaSeleccionada, setTareaSeleccionada] = useState({});
  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleTitleText = (e) => {
    setNuevoTitulo(e);
  };

  const handleDescripcionText = (e) => {
    setNuevaDescripcion(e);
  };

  const handleBotonAñadirTarea = () => {
    const newTarea = {
      titulo: nuevoTitulo,
      descripcion: nuevaDescripcion,
      id: uuid.v4(),
      // id: 5,
    };

    setTareas([...tareas, newTarea]);
    setNuevoTitulo("");
    setNuevaDescripcion("");
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.containerInput}>
        <TextInput
          value={nuevoTitulo}
          placeholder="Escribir Título"
          style={styles.input}
          onChangeText={handleTitleText}
        />
        <TextInput
          value={nuevaDescripcion}
          placeholder="Escribir Descripción"
          style={styles.input}
          onChangeText={handleDescripcionText}
        />

        <Button
          title="Añadir Tarea"
          onPress={handleBotonAñadirTarea}
          color={"#652586"}
        />
      </View>
      <View>
        <FlatList
          data={tareas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tareaOnTheList}>
              <Text style={styles.text}>{item.titulo}</Text>
              <Text style={styles.text}>{item.description}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: "darkblue",
    alignItems: "start",
  },
  containerInput: {
    gap: 10,
  },
  text: {
    fontSize: 50,
  },
  input: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: "white",
    color: "black",
    fontWeight: "500",
    fontSize: 30,
  },
  botonAdicionar: {
    fontSize: 50,
    backgroundColor: "green",
  },
  tareaOnTheList: {
    backgroundColor: "#A7DB12",
    color: "black",
    margin: 10,
    padding: 5,
    height: "auto",
  },
});
