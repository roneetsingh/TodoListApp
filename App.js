import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import Home from './components/Home';

import { Container } from "./styles/appStyles";

import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

export default function App() {
  
  const [ready, setReady] = useState(false);

  const initialTodos = [{
    title: "Get some snacks",
    date: "Fri, 21 Nov 2021 01:37 AM IST",
    key: "1"
},
{
    title: "Get some code",
    date: "Fri, 21 Nov 2021 01:37 AM IST",
    key: "2"
},
{
    title: "Get some sense",
    date: "Fri, 21 Nov 2021 01:37 AM IST",
    key: "3"
}]

const [todos, setTodos] = useState(initialTodos);
  
  return (
    <Container>
      <Home todos={todos} setTodos={setTodos}/>
      <StatusBar style="light" />
    </Container>
  );
}
