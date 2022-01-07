import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import React from 'react';

export default function App() {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
          <View style={styles.container}>
            <Text>Hi this is my modal.</Text>
            <Button title="Hide Modal" onPress={() => setModalVisible(false)}/>
          </View>
      </Modal>
      <Button title="Show Modal" onPress={() => setModalVisible(true)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
