import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { colors, HeaderTitle, ModalAction, ModalActionGroup, ModalButton, ModalContainer, ModalIcon, ModalView, StyledInput } from "../styles/appStyles";
import { Modal } from "react-native";

const InputModal = ({modalVisible, setModalVisible, todoInputValue, setTodoInputValue, handleAddTodo,todoToBeEdited, setTodoToBeEdited, handleEditTodo,todos}) => {
    
    const handleCloseModal = () => {
        setModalVisible(false);
        setTodoInputValue("");
        setTodoToBeEdited(null);
    }

    const handleSubmit = () => {

        if(!todoToBeEdited){
                handleAddTodo({
                title: todoInputValue,
                date: new Date().toLocaleString(),
                key: `${(todos[todos.length-1] && parseInt(todos[todos.length-1].key)+1) || 1}` 
            });
        } else {
            handleEditTodo({
                title: todoInputValue,
                date: todoToBeEdited.date,
                key: todoToBeEdited.key
            })
        }
        setTodoInputValue("");
    }
    
    return (
        <>
            <ModalButton onPress={() => {setModalVisible(true)}}>
                <AntDesign name="plus" size={30} color={colors.secondary}/>
            </ModalButton>

            <Modal
                animationType="slide" transparent={true} visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <ModalContainer>
                    <ModalView>
                        <ModalIcon>
                            <HeaderTitle>To-Do</HeaderTitle>
                            <AntDesign name="edit" size={30} color={colors.tertiary}/>
                    </ModalIcon>

                    <StyledInput
                        placeholder="Add a To-Do"
                        placeholderTextColor={colors.alternative}
                        selectionColor={colors.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setTodoInputValue(text)}
                        value={todoInputValue}
                        onSubmitEditing={handleSubmit}
                    />

                    <ModalActionGroup>
                        <ModalAction color={colors.primary} onPress={handleCloseModal}>
                            <AntDesign name="close" size={28} color={colors.tertiary}/>
                        </ModalAction>
                        <ModalAction color={colors.tertiary} onPress={handleSubmit}>
                            <AntDesign name="check" size={28} color={colors.secondary}/>
                        </ModalAction>
                    </ModalActionGroup>

                    </ModalView>
                </ModalContainer>

            </Modal>
        </>
    );
}

export default InputModal;