"use client";
import React from "react"
import "./main.css"
import Head from "next/head"
import HoverImage from "./components/HoverImage"
import Image from "next/image"

export default function Home() {
  return (
    <div className="home">
      <div class="square linkedin">
        <span></span>
        <span></span>
        <span></span>
        <main>
        <div className="content">
        <HoverImage
          src1="/asset/profil-1.jpg"
          src2="/asset/profil-2.jpeg" 
          alt="Gambar 3D Rotate"
        />
        </div>
        </main>
      </div>

    </div>
  )
}
