import React, { useEffect, useState } from 'react'
import { BlogContentsInput, BlogContentsTest, BlogTitleInput, BlogTitleTest, BlogWritingContainer, BlogWritingSection, BlogWritingTestSection } from './BlogWritingStyle'

export default function BlogWriting() {
  const [postTitle, setPostTitle] = useState("");
  const [postContents, setPostContents] = useState("");
  
  useEffect(() => {
    console.log(postTitle)
  },[postTitle])



  return (
    <BlogWritingContainer>
      <BlogWritingSection>
        {/* <BlogTitleInput
          value={postTitle}
         onChange={(e)=>{
          setPostTitle(e.target.value)
        }}
         type='text'
         placeholder='제목을 입력하세요'></BlogTitleInput>
        <BlogContentsInput
          value={postContents}
          onChange={(e) => {
            setPostContents(e.target.value)
          }}
          type='text'
          placeholder='내용을 입력하세요'></BlogContentsInput> */}
      </BlogWritingSection>

      {/* <BlogWritingTestSection>
        <BlogTitleTest>{postTitle}</BlogTitleTest>
        <BlogContentsTest>{postContents}</BlogContentsTest>
      </BlogWritingTestSection> */}
    </BlogWritingContainer>
  )
}
