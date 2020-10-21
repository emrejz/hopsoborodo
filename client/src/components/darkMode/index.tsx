import React from 'react'
import { Block,Text } from 'styledComps'

import "./index.scss"

interface IProps{
    isDark:boolean
    setIsDark:React.Dispatch<React.SetStateAction<boolean>>
}
const Index:React.FC<IProps>=({isDark,setIsDark})=> {
    const _onClick=()=>setIsDark(prev=>!prev)

    return (
        <Block className="darkModeContainer" onClick={_onClick}>
            <Text as="label">dark mode:</Text> 
            <Block as="input" type="checkbox" checked={isDark}/>
        </Block>
    )
}
export default Index