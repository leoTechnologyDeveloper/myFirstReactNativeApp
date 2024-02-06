import { StyleSheet, Text, View, Modal, Button } from "react-native";
import React from "react";

const ModalBorrar = ({
  modalState,
  borrarTarea,
  handleBorrarTarea,
  tareaSeleccionada,
}) => {
  return (
    <Modal visible={modalState} animationType="slide">
      <View style={styles.modalView}>
        <Text style={styles.text}>
          Esta seguro de eliminar la tarea
          <Text style={styles.titleModal}>{tareaSeleccionada.titulo}</Text> ?
        </Text>
        <Button
          title="YES"
          onPress={borrarTarea}
          color={"#009900"}
          style={styles.butonModal}
        />
        <Button
          title="NOP"
          onPress={handleBorrarTarea}
          color={"#000099"}
          style={styles.butonModal}
        />
      </View>
    </Modal>
  );
};

export default ModalBorrar;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  titleModal: {
    color: "red",
    fontSize: 50,
    fontWeight: "500",
  },
  modalView: {
    flex: 1,
  },
});
