import React, { useEffect, useState } from 'react'
import { BlogMainComments, BlogMainDate, BlogMainSlideContainer, BlogMainText, Today } from './BlogMainSlide1Style'
import ScrollIndicator from '../../scrollindicator/ScrollIndicator'

export default function BlogMainSlide1() {
  const [date, setDate] = useState()
  const [month, setMonth] = useState()
  const [year , setYear] = useState()
  
  useEffect(()=> {
    const date = new Date();
    // const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu','Fri', 'Sat'];
    const month = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August','September','October', 'November', 'December'];
    // const todayWeek = week[date.getDay()]
    const todayMonth = month[date.getMonth()];
    setDate(date.getDate())
    setMonth(todayMonth)
    setYear(date.getFullYear())
  })

  return (
    <BlogMainSlideContainer>

      <BlogMainDate>
        <Today>
          {month} {date} , {year}
          </Today>
      </BlogMainDate>

      <BlogMainText>
        DEVelog
      </BlogMainText>

      <BlogMainComments>
        DEVelog can see the path I've walked.
        <br/>
        Would you like to walk step by step together?
        <br/>
        God bless you always.
      </BlogMainComments>

      <ScrollIndicator color='whitesmoke'/>
      
    </BlogMainSlideContainer>
  )
}
