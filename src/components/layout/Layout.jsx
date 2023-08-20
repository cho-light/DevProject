import React from 'react';
import {LayoutBox} from "./LayoutStyle"

export default function Layout(props) {
  return (
    <LayoutBox>{props.children}</LayoutBox>
  )
};

