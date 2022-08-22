import axios from 'axios';
import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView
} from 'react-native';
import Button from '../../Components/Button';
import { getWorkouts } from '../../Utils/api';
import { colors } from '../../Utils/colors';
import { FontSize } from '../../Utils/util';

const WelcomeScreen = ({ navigation }) => {

    const onLogin = () => {
        navigation.navigate('Login')
    }

    const onSignup = () => {
        navigation.navigate('Signup')
    }

    const getUsers = async () => {
        const user = await getWorkouts();
        if (user) {
            console.log('Users', user.data)
        }

        // getRequest('/workouts').then((res) => {

        //     console.log('Users', res.data)
        // }).catch((e) => console.log('Err', e.message))
        // let res = await axios.get('http://localhost:3000/api/v1/workouts')
        // console.log('REs', res)
        // if (res.status == 200) {
        //     // let workouts = await res.data.json()
        //     console.log('Workouts', res.data)
        // }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <View style={styles.mainContainer}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container1}>
                    <Text style={styles.title} onPress={() => navigation.navigate('Login')}>Podcast App</Text>
                </View>
                <View style={styles.container2}>
                    <Button title={'Login'} onPress={onLogin} />
                    <Button title={'Sign Up'} onPress={onSignup} buttonStyle={{ marginTop: 10 }} />
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.darkBlue
    },
    container1: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container2: {
        flex: 0.2,
        padding: 15,
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: FontSize.giant,
        color: colors.white
    }
});

export default WelcomeScreen;
