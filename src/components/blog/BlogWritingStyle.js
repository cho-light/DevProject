import { styled } from "styled-components";

export const BlogWritingContainer = styled.div`
    width:100%;
    height:100%;
    background-color:green;
    display:flex;
`

export const BlogTitleInput = styled.input`
    width:100%;
    height:40px;
    border:none;
`
export const BlogContentsInput = styled.textarea`
    width:100%;
    height:40px;
    font-size:20px;
`

export const BlogWritingSection = styled.div`
    width:100%;
    height:100%;
    .w-md-editor-text-pre > code,
    .w-md-editor-text-input {
        font-size: 2px !important;
        line-height: 24px !important;
    }

`
export const BlogWritingTestSection = styled.div`
    width:50%;
    height:100%;
    background-color:whitesmoke;
`
export const BlogTitleTest = styled.div`
    width:100%;
    height:40px;

`
export const BlogContentsTest = styled.div`
    width:100%;
    height:40px;
`