import { StyleSheet, Text, View, Modal, Button } from "react-native";
import React from "react";

const ModalBorrar = ({
  modalState,
  borrarTarea,
  handleBorrarTarea,
  tareaSeleccionada,
}) => {
  return (
    <Modal visible={modalState}>
      <View>
        <Text>
          Esta seguro de eliminar esta tarea ? {tareaSeleccionada.titulo}
        </Text>
        <Button title="YES" onPress={borrarTarea} color={"#009900"} />
        <Button title="NOP" onPress={handleBorrarTarea} color={"#000099"} />
      </View>
    </Modal>
  );
};

export default ModalBorrar;

const styles = StyleSheet.create({});
