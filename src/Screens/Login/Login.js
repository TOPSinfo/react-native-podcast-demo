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
import { loading } from '../../Redux/Actions/Actions'
import { useDispatch } from 'react-redux'

const Login = ({ navigation }) => {

    const [userData, setUserData] = useState({ email: '', password: '' })
    const dispatch = useDispatch()
    const onChange = (key, value) => {
        setUserData(prev => ({ ...prev, [key]: value }))
    }

    const onLogin = () => {
        console.log('Login data', userData)
        // dispatch(loading(true))
    }

    let isEnable = (userData.email && userData.password)

    return (
        <View style={styles.constainer}>
            <Header back navigation={navigation} />
            <KeyboardAwareScrollView>
                <View style={{ padding: 20, marginTop: 25 }}>
                    <Text style={styles.title}>Login</Text>
                </View>
                <View style={styles.form}>
                    <TextField placeholder={'Email'} onChange={(text) => onChange('email', text)} inputStyle={styles.inputStyle} />
                    <TextField placeholder={'Password'} onChange={(text) => onChange('password', text)} inputStyle={styles.inputStyle} secure />
                </View>
                <View style={{ padding: 15, marginTop: 50 }}>
                    <Button title={'Login'} onPress={onLogin} disabled={!isEnable} buttonStyle={{ opacity: isEnable ? 1 : 0.5 }} />
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

export default Login;
