# React Native ProgressHUD

 ![image]( https://github.com/follyxing/react-native-progresshud/blob/master/screenshots/1.gif)
 
 ![image]( https://github.com/follyxing/react-native-progresshud/blob/master/screenshots/2.gif)
 
  ![image]( https://github.com/follyxing/react-native-progresshud/blob/master/screenshots/3.gif)
 
 

## Install
```shell
npm install --save react-native-progresshud
```

## Usage
Using the HUD in your app will usually look like this:

```js
import ProgressHUD from 'react-native-progresshud';

class demo extends Component {
  render() {
    return (
      <View style={styles.container}>
      	...
        <ProgressHUD showHUD={true} showLoading ={true} text ='Loading...'/>
      </View>

    );
  }
}

```

