import { InputText } from "./InputStyles"

export const Input = ({
    placeholder,
    value,
    placeholderTextColor,
    editable = true,
    onChangeText = null,
}) => {
    return(
        <InputText
        placeholder={placeholder}
        value={value}
        placeholderTextColor={placeholderTextColor}
        editable={editable}
        onChangeText={onChangeText}
        />
    )

}