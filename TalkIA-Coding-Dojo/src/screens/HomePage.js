import { useState } from "react"
import { Container, ContainerTalk } from "../components/Container/Container"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"

// Import da api
import api from "../services/services"
import { AudioBot } from "../components/Audio/Audio"

export const HomePage = () => {
    const [text, setText] = useState();
    const [voiceAgent, setVoiceAgent] = useState();

    const [textBox, setTextBox] = useState();

    async function SpeechToText() {
        api.post()
            .then(response => {
                console.log(response.data);
                setText(response.data);
            })
            .catch(error => { console.log(error) });
    }

    async function TextToSpeech({ textInserted, voiceAgentInserted }) {

        api.post(`/FalarParaTexto?textToTalk=${textInserted}&voiceAgentName=${voiceAgentInserted}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => { console.log(error) });
    }

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(`C:\Users\\47423489824\Desktop\CodingDojo_Project\API-TalkIA\Audio\a8e6de70f9824e66bfd5212271dad46e.wav`);
        setSound(sound);
    
        console.log('Playing Sound');
        await sound.playAsync();
      }

    return (
        <Container>

            <Header />

            <ContainerTalk>


                <AudioBot
                onPress={() => playSound()}
                />

            </ContainerTalk>

            <Footer messageValue={setTextBox} />

        </Container>
    )
}