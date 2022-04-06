import React from "react";
import { Button, View } from 'react-native';

export function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            onPress={() => navigation.navigate('Example')}
            title="Go to example screen"
          />
        </View>
      );
  }