import React from 'react'
import '../styles/intro.css'

const Intro = () => {
  const imgUrl = `https://nmcdn.io/e186d21f8c7946a19faed23c3da2f0da/347bed083486499c98f1609efa95efbd/files/blog-interactivemaps-banner-process-s1440x-t1579023704.jpg?v=7aa6d54725`
  return (
    <section className='intro'>
      <img src={imgUrl} alt="" />

    </section>
  )
}

export default Intro