
# react-native-convert-ph-asset

## Getting started

`$ npm install react-native-convert-ph-asset --save`

### Mostly automatic installation

`$ react-native link react-native-convert-ph-asset`

### Manual installation

#### iOS

If you are using Cocoapods add the following line to your Podfile:
```ruby
  pod 'RNConvertPhAsset', :path => '../node_modules/react-native-convert-ph-asset'
```

otherwise follow those steps:

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-convert-ph-asset` and add `RNConvertPhAsset.xcodeproj`
3. Run your project (`Cmd+R`)<

## Usage
```javascript
import RNConvertPhAsset from 'react-native-convert-ph-asset';

RNConvertPhAsset.convertVideoFromId({
	id: 'F1B091FF-0A55-5D4F-81E6-A3F7F28FC991/L0/001',
	convertTo: 'mov',
	quality: 'medium'
}).then((response) => {
	console.log(response);
}).catch((err) => {
   console.log(err)
});

// or

RNConvertPhAsset.convertVideoFromUrl({
	url: 'ph://F1B091FF-0A55-5D4F-81E6-A3F7F28FC991/L0/001',
	convertTo: 'mov',
	quality: 'medium'
}).then((response) => {
	console.log(response);
}).catch((err) => {
   console.log(err)
});
```

| Props        	| Type          	| Default | Notes  |
| ------------- 	|:-------------:	| :------:|:-----|
| url      		| String 			| | Video asset |
| id      		| String 			| | The id of the video asset | 
| convertTo      | String 	     	| |Can be mpeg4, m4v or mov |
| quality 		| String      	| original |Can be original, high, medium, low |

##### Response
```javascript
{
  mimeType: "video/quicktime",
  path: "file:///var/mobile/Containers/Data/Application/750FEB7F-97E7-49B7-87C2-6ADF301D189F/Documents/C56BC846-94D4-476A-BF33-7E62BC412F2B.mov",
  filename: "C38AD32D-839F-494A-915F-28E8199177A6.mov",
  type: "video",
  duration: 15.88
}
```

***

## Acknowledgements

- [`react-native-gallery-manager`](https://github.com/pentarex/react-native-gallery-manager) - original basis of this project