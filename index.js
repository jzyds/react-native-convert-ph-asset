
import { NativeModules } from 'react-native';

const { RNConvertPhAsset } = NativeModules;

RNConvertPhAsset.convertVideoFromUrl = (map) => {
  map.id = map.url.substring (5, 41);
  return RNConvertPhAsset.convertVideoFromId(map)
}

export default RNConvertPhAsset;
