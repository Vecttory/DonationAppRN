import React from 'react';
import style from "./style";
import {TextInput, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const Search = () => {
    return (
        <View>
            <FontAwesomeIcon icon={faSearch} />
            <TextInput style={style.searchInput}/>
        </View>
    );
};

export default Search;
