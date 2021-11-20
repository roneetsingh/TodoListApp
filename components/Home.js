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

    const handleAddTodo = (todo) => {
        const newTodos =[...todos, todo];
        setTodos(newTodos);
        setModalVisible(false);
    }

    const handleTriggerEdit = () => {
        alert("Edit Triggered");
    }

    return(
        <>
        <Header handleClearTodos={handleClearTodos} />
        <ListItems
            todos={todos}
            setTodos={setTodos}
            handleTriggerEdit={handleTriggerEdit}
        />
        <InputModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            todoInputValue={todoInputValue}
            setTodoInputValue={setTodoInputValue}
            handleAddTodo={handleAddTodo}
            todos={todos}
        />
        </>
    );
}

export default Home;