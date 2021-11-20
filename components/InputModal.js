import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { colors, ModalAction, ModalActionGroup, ModalButton, ModalContainer, ModalIcon, ModalView, StyledInput } from "../styles/appStyles";
import { Modal } from "react-native";

const InputModal = ({modalVisible, setModalVisible, todoInputvalue, setTodoInputValue}) => {
    
    const handleCloseModal = () => {
        setModalVisible(false);
    }

    const handleSubmit = () => {
        alert("Submitted")
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
                    <AntDesign name="edit" size={30} color={colors.tertiary}/>
                    </ModalIcon>

                    <StyledInput
                        placeholder="Add a ToDo"
                        placeholderTextColor={colors.alternative}
                        selectionColor={colors.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setTodoInputValue(text)}
                        value={todoInputvalue}
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