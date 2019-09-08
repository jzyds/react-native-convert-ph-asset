
import { NativeModules } from 'react-native';

const { RNConvertPhAsset } = NativeModules;

RNConvertPhAsset.convertVideoFromUrl = (url) => {
  const id = url.substring (5, 41);
  return RNConvertPhAsset.convertVideoFromId(id)
}

export default RNConvertPhAsset;
