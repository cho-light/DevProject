import React from 'react'
import { ListComments, ListTitle, Numbering, Slide2ListSection } from './Slide2ListStyle'
import Modalbutton from '../../../dropdownmenu/Modalbutton'

export default function Slide2List({id,value, title, comments, toggleList, src, git}) {

    return (
        <>
            <Numbering>{id}</Numbering>
            <Slide2ListSection value={value}>
                <ListTitle onClick={()=>toggleList(id)}>
                    {title}
                </ListTitle>
                <ListComments key={id} value={value} >
                    {comments}
                </ListComments>
                    {value && <Modalbutton key={id} src={src} git={git}/>}
                
            </Slide2ListSection>
        </>
    )
}
