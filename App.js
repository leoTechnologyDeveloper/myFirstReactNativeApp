import uuid from "react-native-uuid";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import ModalBorrar from "./src/components/ModalBorrar";

import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import SumarTarea from "./src/components/SumarTarea";

export default function App() {
  const [tareaSeleccionada, setTareaSeleccionada] = useState({});
  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");
  const [tareas, setTareas] = useState([]);
  const [modalState, setModalState] = useState(false);

  const handleTitleText = (e) => {
    setNuevoTitulo(e);
  };

  const handleDescripcionText = (e) => {
    setNuevaDescripcion(e);
  };

  const handleBotonAñadirTarea = () => {
    console.log("el state del modal es ", modalState);
    const newTarea = {
      titulo: nuevoTitulo,
      descripcion: nuevaDescripcion,
      id: uuid.v4(),
    };

    setTareas([...tareas, newTarea]);
    setNuevoTitulo("");
    setNuevaDescripcion("");
  };

  const handleBorrarTarea = (item) => {
    setTareaSeleccionada(item);
    setModalState(!modalState);
    console.log("el state del modal es ", modalState);
  };

  const borrarTarea = () => {
    setTareas(tareas.filter((tarea) => tarea.id != tareaSeleccionada.id));
    setModalState(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SumarTarea
        nuevoTitulo={nuevoTitulo}
        handleTitleText={handleTitleText}
        nuevaDescripcion={nuevaDescripcion}
        handleDescripcionText={handleDescripcionText}
        handleBotonAñadirTarea={handleBotonAñadirTarea}
      />
      <View>
        <FlatList
          data={tareas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tareaOnTheList}>
              <Text style={styles.text}>{item.titulo}</Text>
              <Text style={styles.text}>{item.descripcion}</Text>
              <Button
                title="Borrar"
                onPress={() => handleBorrarTarea(item)}
                color={"#990000"}
              />
            </View>
          )}
        />
        <ModalBorrar
          modalState={modalState}
          borrarTarea={borrarTarea}
          handleBorrarTarea={handleBorrarTarea}
          tareaSeleccionada={tareaSeleccionada}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 40,
    padding: 10,
    flex: 1,
    backgroundColor: "darkblue",
    alignItems: "start",
  },

  text: {
    fontSize: 30,
  },

  botonAdicionar: {
    fontSize: 50,
    backgroundColor: "green",
  },
  tareaOnTheList: {
    backgroundColor: "whitesmoke",
    color: "black",
    margin: 10,
    padding: 5,
    height: "auto",
  },
});
