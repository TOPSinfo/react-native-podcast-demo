import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Button from '../../Components/Button';
import TextField from '../../Components/TextField';
import { colors } from '../../Utils/colors';
import { FontSize } from '../../Utils/util';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Header from '../../Components/Header';

const Signup = ({ navigation }) => {

    const [userData, setUserData] = useState({ firstName: '', lastName: '', email: '', password: '' })

    const onChange = (key, value) => {
        setUserData(prev => ({ ...prev, [key]: value }))
    }

    const onSignup = () => {
        console.log('USER DATA', userData)
    }

    let isEnable = (userData.firstName && userData.lastName && userData.email && userData.password)

    return (
        <View style={styles.constainer}>
            <Header back navigation={navigation} />
            <KeyboardAwareScrollView>
                <View style={{ padding: 20, marginTop: 25 }}>
                    <Text style={styles.title}>Sign Up</Text>
                </View>
                <View style={styles.form}>
                    <TextField placeholder={'First name'} onChange={(text) => onChange('firstName', text)} inputStyle={styles.inputStyle} />
                    <TextField placeholder={'Last name'} onChange={(text) => onChange('lastName', text)} inputStyle={styles.inputStyle} />
                    <TextField placeholder={'Email'} onChange={(text) => onChange('email', text)} inputStyle={styles.inputStyle} />
                    <TextField placeholder={'Password'} onChange={(text) => onChange('password', text)} inputStyle={styles.inputStyle} secure />
                </View>
                <View style={{ padding: 15, marginTop: 50 }}>
                    <Button title={'Signup'} onPress={onSignup} disabled={!isEnable} buttonStyle={{ opacity: isEnable ? 1 : 0.5 }} />
                </View>
            </KeyboardAwareScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: colors.darkBlue,
    },
    title: {
        fontSize: FontSize.giant,
        textAlign: 'center',
        color: colors.white1
    },
    form: {
        flex: 1,
        alignItems: 'center',
        padding: 15
    },
    inputStyle: {
        marginTop: 15
    }
});

export default Signup;
