
 import React from 'react';
 import { SafeAreaProvider} from 'react-native-safe-area-context'
 import routeparamsNavigator from './navigators/routeparamsNavigator';

 
 export default function App() {

   return (

    <SafeAreaProvider>
    <routeparamsNavigator/>
    </SafeAreaProvider>
   );
 }

