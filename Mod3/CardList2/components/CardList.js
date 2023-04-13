import React from "react";
import { View, Text, FlatList } from "react-native";
import Card from "./Card";

const CardList = ({items}) => {

    const renderCard = ({item}) => {
        return (
            <Card item={item}/>
        );
    }
    
    if (items != null)
    {
        return (
            <FlatList
                data={items}
                renderItem={renderCard}
                keyExtractor={item => item._id}
            />
        );
    } else {
        
    }

    
}

export default CardList;