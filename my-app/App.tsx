import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';



export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />

      <SafeAreaView style={styles.safeArea}>
        <WebView
          source={{ uri: 'http://localhost:4200' }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  }
})