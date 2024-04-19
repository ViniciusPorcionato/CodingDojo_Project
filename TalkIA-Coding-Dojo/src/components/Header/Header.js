import { ContainerHeader } from "../Container/Container"
import { TitleLogoIA, TitleLogoTalk } from "../Text/Text"

export const Header = () => {
    return(
        <ContainerHeader>
            <TitleLogoTalk>Talk</TitleLogoTalk><TitleLogoIA>IA</TitleLogoIA>
        </ContainerHeader>
    )
}