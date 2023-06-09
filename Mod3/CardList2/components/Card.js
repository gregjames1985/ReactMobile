import React from "react";
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({item}) => {
    const navigation = useNavigation();
    return (
        <View style={[styles.container]}>
            <View style={[styles.card]}>
                <Image
                    style={styles.cardImage}
                    source={{ uri:item.image }}
                />
                <View style={styles.cardContent}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <Text style={styles.description}>{item.desc}</Text>
                    <Button title='Details' onPress={() => {navigation.navigate(item.title)}}/>
                </View>
            </View>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    card: {
        borderWidth: 0,
        minHeight: 300,
        width:350,
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginVertical: 12,
        marginTop: 0,
        backgroundColor: '#FFFFFF',
        marginRight: 0,
        alignSelf: "stretch"
    },
    cardImage: {
        flex: 1,
        height: 150,
        borderRadius: 3
    },
    cardContent: {
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    cardHeader: {
        paddingBottom: 5
    },
    title: {
        fontSize: 28
    },
    description: {
        fontSize: 15
    },
});
