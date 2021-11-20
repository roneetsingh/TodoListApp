import React from "react";
import { colors, HeaderButton, HeaderTitle, HeaderView } from "../styles/appStyles";

import { Entypo } from "@expo/vector-icons";

const Header = () => {
    return(
        <HeaderView>
            <HeaderTitle>ToDo List</HeaderTitle>
            <HeaderButton>
                <Entypo name="trash" size={25} color={colors.tertiary}/>
            </HeaderButton>
        </HeaderView>
    );
}

export default Header;