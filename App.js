import uuid from "react-native-uuid";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import ModalBorrar from "./src/components/ModalBorrar";

import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import SumarTarea from "./src/components/SumarTarea";
import ListadoTareas from "./src/components/ListadoTareas";

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
      <SumarTarea
        nuevoTitulo={nuevoTitulo}
        handleTitleText={handleTitleText}
        nuevaDescripcion={nuevaDescripcion}
        handleDescripcionText={handleDescripcionText}
        handleBotonAñadirTarea={handleBotonAñadirTarea}
      />
      <View>
        <ListadoTareas tareas={tareas} handleBorrarTarea={handleBorrarTarea} />
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
    backgroundColor: "navy",
    alignItems: "start",
  },

  text: {
    fontSize: 30,
  },

  botonAdicionar: {
    fontSize: 50,
    backgroundColor: "green",
  },
});
