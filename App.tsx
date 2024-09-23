/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { LogBox } from 'react-native';
import VmHome from './src/screens/vm/VmHome';

LogBox.ignoreAllLogs();
const App: React.FC = () => {

  return <VmHome />;

};


export default App;
