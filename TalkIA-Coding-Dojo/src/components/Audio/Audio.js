import { AudioBotComponent, AudioUserComponent, Buttonplay } from "./AudioStyles"
import { AntDesign } from '@expo/vector-icons';

export const AudioBot = ({ value, onPress }) => {
    return (
        <AudioBotComponent value={value} >
            <Buttonplay onPress={onPress}>
                <AntDesign name="play" size={24} color="#002333" />
            </Buttonplay>
        </AudioBotComponent>
    )
}


export const AudioUser = ({ value }) => {
    return (
        <AudioUserComponent value={value}>
            <Buttonplay>
                <AntDesign name="play" size={24} color="#002333" />
            </Buttonplay>
        </AudioUserComponent>
    )
}