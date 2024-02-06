import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import React from "react";

const ListadoTareas = ({ tareas, handleBorrarTarea }) => {
  return (
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
    </View>
  );
};

export default ListadoTareas;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  tareaOnTheList: {
    backgroundColor: "whitesmoke",
    color: "black",
    margin: 10,
    padding: 5,
    height: "auto",
  },
});
