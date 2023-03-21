import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  Modal,
  Linking,
} from "react-native";

// Import the shoeImages array
import shoeImages from "../../theme/shoeImages/shoeImages";

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedShoe, setSelectedShoe] = useState(null);

  const handleLongPress = (shoe) => {
    setSelectedShoe(shoe);
    setModalVisible(true);
  };

  const handleStockXSearch = () => {
    if (selectedShoe && selectedShoe.searchTerm) {
      const stockXSearchUrl = `https://stockx.com/search?s=${encodeURIComponent(
        selectedShoe.searchTerm
      )}`;
      Linking.openURL(stockXSearchUrl);
    }
  };

  const renderImageItem = ({ item }) => (
    <TouchableOpacity
      style={styles.imageItem}
      onLongPress={() => {
        handleLongPress(item);
      }}
    >
      <Image source={item.source} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={shoeImages}
        renderItem={renderImageItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Search on StockX:</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleStockXSearch();
              }}
            >
              <Text style={styles.buttonText}>Search on StockX</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  columnWrapper: {
    justifyContent: "space-evenly",
  },
  imageItem: {
    flex: 1,
    aspectRatio: 1,
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
    width: "30%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#B20000",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomeScreen;
