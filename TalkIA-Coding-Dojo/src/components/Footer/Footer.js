import { ContainerInput } from "../Container/Container"
import { Input } from "../Input/Input"
import { ButtonAudio } from "../Input/InputStyles"
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const Footer = ({ value, messageValue }) => {
    return (
        <ContainerInput>

            <Input
                placeholder={"Digite o texto..."}
                placeholderTextColor={"#002333"}
                onChange
            />
            <ButtonAudio ><Ionicons name="send" size={24} color="black" onPress={() => {
                // messageValue != null ? 

            }} /></ButtonAudio>

            <ButtonAudio value={value}><Feather name="mic" size={24} color="#002333" onPress={() => {
                // messageValue != null ? 

            }} /></ButtonAudio>


        </ContainerInput>
    )
}