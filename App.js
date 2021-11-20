import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Container } from "./styles/appStyles";

export default function App() {
  return (
    <Container>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </Container>
  );
}
