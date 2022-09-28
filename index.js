/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import tabview from './tabview'
AppRegistry.registerComponent(appName, () => tabview);
