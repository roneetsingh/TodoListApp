import React, { useState } from "react";
import { Text } from "react-native";
import Header from "./Header";
import InputModal from "./InputModal";
import ListItems from "./ListItems";

const Home = ({todos, setTodos}) => {
    
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

    const [todoToBeEdited, setTodoToBeEdited] = useState(null);

    const handleTriggerEdit = (item) => {
        setTodoToBeEdited(item);
        setModalVisible(true);
        setTodoInputValue(item.title);
    }

    const handleEditTodo = (editedTodo) => {
        const newTodos = [...todos];
        const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key);
        newTodos.splice(todoIndex, 1, editedTodo);
        setTodos(newTodos);
        setTodoToBeEdited(null);
        setModalVisible(false);
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
            todoToBeEdited={todoToBeEdited}
            setTodoToBeEdited={setTodoToBeEdited}
            handleEditTodo={handleEditTodo}
            todos={todos}
        />
        </>
    );
}

export default Home;