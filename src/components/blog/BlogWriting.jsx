import React, { useEffect, useState } from 'react'
import { BlogContentsInput, BlogContentsTest, BlogTitleInput, BlogTitleTest, BlogWritingContainer, BlogWritingSection, BlogWritingTestSection } from './BlogWritingStyle'
import MDEditor from '@uiw/react-md-editor';


export default function BlogWriting() {
  const mkdText = `## 여러분의 이야기를 적어주세요
  **당신만의 공간이에요!!**
  `;

  const [postTitle, setPostTitle] = useState("");
  const [postContents, setPostContents] = useState(mkdText);
  
  useEffect(() => {
    console.log(postTitle)
  },[postTitle])

  

  return (
    <BlogWritingContainer>
      <BlogWritingSection>
        <BlogTitleInput
          placeholder='제목을 입력하세요'
          value={postTitle}
          onChange={(e)=> {
            setPostTitle(e.target.value)
          }}
          ></BlogTitleInput>
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
            <MDEditor
              
              width={'100%'}
              height={'100%'}
              value={postContents}
              onChange={setPostContents}/>
      </BlogWritingSection>
   
      {/* <BlogWritingTestSection>
        <BlogTitleTest>{postTitle}</BlogTitleTest>
        <BlogContentsTest>{postContents}</BlogContentsTest>
      </BlogWritingTestSection> */}
    </BlogWritingContainer>
  )
}
