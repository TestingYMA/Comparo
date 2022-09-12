import * as React from 'react';
import { View, Text, Button } from 'react-native';

function HomeDashboardScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Dashboard Screen</Text>
      <Button
        title="F1"
        onPress={() => navigation.navigate('F1HomeTab')}
      />
    </View>
  );
}

export default HomeDashboardScreen;