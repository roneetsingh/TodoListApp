import React, { useState } from "react";
import { Text } from "react-native";
import Header from "./Header";
import InputModal from "./InputModal";
import ListItems from "./ListItems";

const Home = () => {
    
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
    
    const handleClearTodos = () => {
        setTodos([]);
    }

    const [modalVisible, setModalVisible] = useState(false);
    const [todoInputValue, setTodoInputValue] = useState();

    return(
        <>
        <Header handleClearTodos={handleClearTodos} />
        <ListItems
            todos={todos}
            setTodos={setTodos}
        />
        <InputModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            todoInputValue={todoInputValue}
            setTodoInputValue={setTodoInputValue}
        />
        </>
    );
}

export default Home;