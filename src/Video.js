import React from 'react'
import { forwardRef } from 'react'

const Video =(props, ref) => {

    console.log(ref)
    
  return (
    <>
      <video ref={ref} controls src='https://files.fullstack.edu.vn/f8-tiktok/videos/2439-648027d172651.mp4'></video>
    </>
  )
}


export default forwardRef(Video)