# FairAppFrontend_Test
For Test Usage

###### Environment (For IOS) Setup ######
# React-Native:
	- sudo npm install -g react-native-cli
	- sudo npm install expo-cli --global
	- npm i -g create-react-native-app
	- npm install -g react-devtools
	- create-react-native-app FairAppTest
	- npm install @react-navigation/native

	// authentication use
	- npm install --save @react-native-firebase/app
	- npm install --save @react-native-firebase/auth

	// install both in RN and ios
	- expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
	- cd ios && pod install
	- pod install --repo-update

	// for icon usage
	- npm install react-native-elements


	- npm run ios
	- npm start
