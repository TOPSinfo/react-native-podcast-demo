import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Button from '../../Components/Button';
import { colors } from '../../Utils/colors';
import { FontSize } from '../../Utils/util';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const CategorySelection = ({ navigation }) => {

    const [categoryList, setCategoryList] = useState([
        { lable: 'Category 1', isSelected: false },
        { lable: 'Category 2', isSelected: false },
        { lable: 'Category 3', isSelected: false },
        { lable: 'Category 4', isSelected: false },
        { lable: 'Category 5', isSelected: false },
    ])

    const onChange = (index) => {
        let list = [...categoryList]
        list[index].isSelected = !list[index].isSelected
        setCategoryList(list)
    }

    const onSignup = () => {
        console.log('USER DATA', categoryList)
    }

    let isEnable = categoryList.find((i) => i.isSelected)

    return (
        <View style={styles.constainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Select Category</Text>
            </View>
            <View style={styles.form}>
                <ScrollView bounces={false}>
                    {categoryList.map((item, index) =>
                        <TouchableOpacity key={index} onPress={() => onChange(index)} style={styles.optionContainer}>
                            <MaterialCommunityIcons name={item.isSelected ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'} color={colors.white1} size={25} />
                            <Text style={styles.option}>{item.lable}</Text>
                        </TouchableOpacity>
                    )}
                </ScrollView>
            </View>
            <View style={{ padding: 15, marginTop: 50 }}>
                <Button title={'Continue'} disabled={!isEnable} onPress={onSignup} buttonStyle={{ opacity: isEnable ? 1 : 0.5 }} />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: colors.darkBlue,
    },
    titleContainer: {
        padding: 20,
        marginTop: 25,
        alignItems: 'center'
    },
    title: {
        fontSize: FontSize.huge,
        color: colors.white,
    },
    optionContainer: {
        borderBottomWidth: 0.5,
        borderColor: colors.white1,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    option: {
        fontSize: FontSize.medium,
        color: colors.white1,
        marginLeft: 20
    },
    form: {
        flex: 1,
        padding: 15
    },
    inputStyle: {
        marginTop: 15
    }
});

export default CategorySelection;
