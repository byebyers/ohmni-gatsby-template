import React from "react"
import './banners.scss'

const Fullban = () => {
  return (
    <section
      style={{
        backgroundImage: `url(https://res.cloudinary.com/db4y7ocbu/image/upload/v1528328041/sample.jpg)`
      }}
    class="big-banner display-banner">
      <div class="cover-background">
        <div class="title-wrap">
          <h1><span class="big-title">Big Headline</span></h1>
          <p class="big-content">Little Headline</p>
        </div>
      </div>
    </section>
  )
}

export default Fullban
