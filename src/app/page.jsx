import React from "react"
import "./main.css"
import Head from "next/head"

export default function Home() {
  return (
    <div className="home">
      <div class="square linkedin">
        <span></span>
        <span></span>
        <span></span>
        <div class="content">
          <h2>
            LinkedIn
          </h2>
          <p>This is where I network and build my professional portfolio</p>
          <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_adamdipinto</a>
        </div>
      </div>

      <div class="square twitter">
        <span></span>
        <span></span>
        <span></span>
        <div class="content">
          <h2>
            Twitter
          </h2>
          <p>This is where I read news and network with different social groups</p>
          <a href="https://twitter.com/AdamDipinto" target="_blank">@AdamDipinto</a>
        </div>
      </div>

      <div class="square github">
        <span></span>
        <span></span>
        <span></span>
        <div class="content">
          <h2>
            Github
          </h2>
          <p>This is where I share code and work on projects</p>
          <a href="https://github.com/atom888" target="_blank">atom888</a>
        </div>
      </div>
    </div>
  )
}
