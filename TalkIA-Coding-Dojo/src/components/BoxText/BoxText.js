import { BoxTexUserComponent, BoxTextBotComponent } from "./BoxTextStyles"

export const BoxTextBot = ({value, editable = false}) => {
    <BoxTextBotComponent value={value} editable={editable}/>

}

export const BoxTextUser = ({value, editable = false}) => {
    <BoxTexUserComponent value={value} editable={editable}/>
}