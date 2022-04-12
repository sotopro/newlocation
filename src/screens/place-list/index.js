import React from "react";
import { FlatList } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import PlaceItem from "../../components/molecules/place-item";

const PlaceList = ({ navigation }) => {
    const places = useSelector(state => state.places.places);


    const onSelectDetail = () => {
        navigation.navigate('PlaceDetail');
    }

    const renderItem = ({ item }) => (
        <PlaceItem
            name={item.name}
            address='123 street, city, country'
            onSelect={() => onSelectDetail()}
            />
    )

    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    )
}

export default PlaceList;