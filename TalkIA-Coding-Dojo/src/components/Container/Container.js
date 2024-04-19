import styled from "styled-components"

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #002333;
    justify-content: space-between;
`

export const ContainerTalk = styled.ScrollView`
    flex: 1;
`

export const ContainerHeader = styled.SafeAreaView`
    width: 100%;
    background-color: #159A9C;
    height: 90px;
    flex-direction: row;
    border-radius: 0px 0px 15px 15px;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
`

export const ContainerInput = styled.SafeAreaView`
width: 100%;
background-color: #159A9C;
border-radius: 15px 15px 0px 0px;
flex-direction: row;
height: 100px;
justify-content: space-around;
align-items: center;
`
