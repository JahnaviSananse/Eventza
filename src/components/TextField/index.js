import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './style';

const TextField = (props: any) => {
    const [text, setText] = React.useState('');
    const { value, placeholder, title, onChangeText, style, maxLength, keyboardType } = props;
    let keyType = props.keyboardType ? props.keyboardType : 'default'
    let length = maxLength ? maxLength : 60
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.placeholderText}>{title}</Text>
            <View style={[style, styles.extraPadding]}>
                <TextInput
                    maxLength={length}
                    keyboardType={keyType}
                    secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
                    style={[styles.textInput, { fontStyle: text.trim().length > 0 ? "normal" : "italic" }]}
                    underlineColorAndroid={'transparent'}
                    placeholderStyle={styles.placeHolderStyle}
                    onChangeText={(text) => {
                        setText(text)
                        onChangeText(text)
                    }}
                    value={value}
                    placeholder={placeholder}
                />
            </View>
        </View>
    );


}
export default TextField;