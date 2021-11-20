import React, { useState } from "react";
import { Text } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { colors, HiddenButton, ListView, ListViewHidden, SwipedTodoText, TodoDate, TodoText } from "../styles/appStyles";
import { Entypo } from "@expo/vector-icons";

const ListItems = ({todos, setTools}) => {

    const [swipedRow, setSwipedRow] = useState(null);

    return(
        <SwipeListView
            data={todos}
            renderItem={(data) => {
                const RowText = data.item.key == swipedRow ? SwipedTodoText : TodoText;
                return(
                    <ListView>
                        <>
                            <RowText>{data.item.title}</RowText>
                            <TodoDate>{data.item.date}</TodoDate>
                        </>
                    </ListView>
                )
            }}
            renderHiddenItem={() => {
                return(
                <ListViewHidden>
                    <HiddenButton>
                        <Entypo name="trash" size={25} color={colors.secondary}/>
                    </HiddenButton>
                </ListViewHidden>
                )
            }}
            leftOpenValue={80}
            previewRowKey={"1"}
            previewOpenValue={80}
            previewOpenDelay={3000}
            disableLeftSwipe={true}
            showsVerticalScrollIndicator={false}
            style={{
                flex: 1, paddingBottom: 30,marginBottom: 40
            }}
        />
    );
}

export default ListItems;