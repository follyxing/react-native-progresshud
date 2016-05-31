'use strict';

import styles  from'./styles';
import LoadingIndicator  from './loader';
import React from 'react';
import {
    View,
    Text,
    ActivityIndicatorIOS,
    StyleSheet
} from 'react-native';
export default class index extends React.Component {

    static propTypes = {
        text: React.PropTypes.string,
        showHUD: React.PropTypes.bool,
    };


    render() {
        if (this.props.showHUD) {
            return (
                <View style={styles.container}>
                    <LoadingIndicator text={this.props.text} showLoading={this.props.showLoading}/>
                </View>
            );
        } else {
            return null;
        }
    }
}

