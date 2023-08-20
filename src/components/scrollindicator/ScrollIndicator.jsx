import React from 'react'
import { ScrollButton, ScrollButtonAnimation, ScrollButtonTag, ScrollIndicatorContainer } from './ScrollIndicatorStyle'

export default function ScrollIndicator() {
  return (
    <ScrollIndicatorContainer>
        <ScrollButton>
            <ScrollButtonAnimation>
            </ScrollButtonAnimation>
        </ScrollButton>
        <ScrollButtonTag>
            SCROLL
        </ScrollButtonTag>
    </ScrollIndicatorContainer>
  )
}
