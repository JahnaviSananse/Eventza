import React from 'react';
import { View, ActivityIndicator, Modal } from 'react-native';
import styles from './style';
import * as colors from '../../constants/colors';

interface ILoaderProps {
    isLoading: boolean;
}
const Loader = (props: ILoaderProps) => {
    const { isLoading } = props;
    if (!isLoading) return null;
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={isLoading}
            onRequestClose={() => {
                // onClose()
            }}>
            <View
                pointerEvents={'auto'}
                style={styles.loader}
            >
                <ActivityIndicator
                    size='large'
                    color={colors.THEME.WHITE}
                />
            </View>
        </Modal>
    );

}
export default Loader;