import React from "react";
import { Text } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { ListView, TodoDate, TodoText } from "../styles/appStyles";

const ListItems = ({todos, setTools}) => {
    return(
        <SwipeListView
            data={todos}
            renderItem={(data) => {
                return(
                    <ListView>
                        <>
                            <TodoText>{data.item.title}</TodoText>
                            <TodoDate>{data.item.date}</TodoDate>
                        </>
                    </ListView>
                )
            }}
        />
    );
}

export default ListItems;