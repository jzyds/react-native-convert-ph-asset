import {NativeModules, Platform} from 'react-native';
let RNConvertPhAsset = {};

if (Platform.OS === 'ios') {
  RNConvertPhAsset = NativeModules.RNConvertPhAsset;
  RNConvertPhAsset.convertVideoFromUrl = map => {
    map.id = map.url.substring (5, 41);
    return RNConvertPhAsset.convertVideoFromId (map);
  };
}

export default RNConvertPhAsset;
