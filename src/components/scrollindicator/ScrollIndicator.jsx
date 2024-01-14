import React from 'react'
import { ScrollButton, ScrollButtonAnimation, ScrollButtonTag, ScrollIndicatorContainer } from './ScrollIndicatorStyle'

export default function ScrollIndicator(props) {
  return (
    <ScrollIndicatorContainer>
        <ScrollButton color={props.color}>
            <ScrollButtonAnimation color={props.color}>
            </ScrollButtonAnimation>
        </ScrollButton>
        <ScrollButtonTag color={props.color}>
            SCROLL
        </ScrollButtonTag>
    </ScrollIndicatorContainer>
  )
}
