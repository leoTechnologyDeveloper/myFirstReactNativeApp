import React from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

const SumarTarea = ({
  nuevoTitulo,
  handleTitleText,
  nuevaDescripcion,
  handleDescripcionText,
  handleBotonAñadirTarea,
}) => {
  return (
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
  );
};

export default SumarTarea;

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: "white",
    color: "black",
    fontWeight: "500",
    fontSize: 30,
  },
  containerInput: {
    gap: 10,
  },
});
