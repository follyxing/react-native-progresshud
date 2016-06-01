import React from 'react';
import styles from './styles';
import  {
    View,
    Text,
    ProgressBarAndroid,
    StyleSheet
} from 'react-native';
export default class loader extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    _activityindicator() {
        let showLoading = this.props.showLoading;
        if (showLoading) {
            return (<ProgressBarAndroid color="#fff" styleAttr="Large"/>);
        }
        return null;
    }

    _loadingText() {
        if (this.props.text) {
            return (<Text style={styles.loadingText} >{this.props.text} </Text> );
        } else {
            return;
        }

    }

    _containerStyle() {
        let {text} = this.props;
        if (text && (text.length > 7)) {
            return styles.loadingContainerAutoSize;
        } else {
            return styles.loadingContainer;
        }

    }

    render() {
        return (
            <View style={this._containerStyle()}>

                <View style={styles.spinnerContainer}>
                    {this._activityindicator()}
                    {this._loadingText()}
                </View>
            </View>
        );
    }
}
