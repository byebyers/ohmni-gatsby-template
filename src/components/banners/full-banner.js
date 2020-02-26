import React from "react"
import './banners.scss'

const Fullban = () => {
  return (
    <section
      style={{
        backgroundImage: `url(https://res.cloudinary.com/db4y7ocbu/image/upload/v1528328041/sample.jpg)`
      }}
    class="big-banner display-banner">
      <div className="cover-background">
        <div className="title-wrap">
          <h1>Big Headline</h1>
          <p className="big-content">Little Headline</p>
        </div>
      </div>
    </section>
  )
}

export default Fullban
