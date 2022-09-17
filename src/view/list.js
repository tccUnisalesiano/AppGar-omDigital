import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";

const DATA = [
  {
    title: "Cardápio",
    data: ["Pizza", "Hamburger", "Filé à Parmegiana", "Arroz com Ovo"]
  },
  {
    title: "Porções",
    data: ["Batata Frita", "Onion Rings", "Kibe com Queijo", "Frango à Passarinho"]
  },
  {
    title: "Bebidas",
    data: ["Agua", "Coca-Cola", "Chopp Claro, Cerveja", "Paulistinha"]
  },
  {
    title: "Sobremesa",
    data: ["Cheese Cake", "Sorvete", "Brownie", "Pettit Gateu"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function lista() {
    return <>
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
      </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#d3d3d3",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#ffa500"
  },
  title: {
    fontSize: 24,
    marginHorizontal: 10
  }
});