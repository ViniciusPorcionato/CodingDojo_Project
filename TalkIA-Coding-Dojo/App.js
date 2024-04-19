import { StatusBar } from 'expo-status-bar';
import { useFonts, KumarOne_400Regular } from '@expo-google-fonts/kumar-one';
import { StyleSheet, Text, View } from 'react-native';
import { Container, ContainerTalk } from './src/components/Container/Container';
import { Header } from './src/components/Header/Header';
import { Footer } from './src/components/Footer/Footer';
import { AudioBot, AudioUser } from './src/components/Audio/Audio';
import { BoxTextBot, BoxTextUser } from './src/components/BoxText/BoxText';
import { HomePage } from './src/screens/HomePage';


export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    KumarOne_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    // <Container>

    //   <Header />

    //   <ContainerTalk>

    //     <AudioBot/>
    //     <AudioUser/>


    //   </ContainerTalk>

    //   <Footer />

    // </Container>

    <HomePage/>
  );
}

