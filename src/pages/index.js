import React from "react"
import { Link } from "gatsby"

export default function Home() {
    
  return (

    <main>
      <h1>Hello Gatsby!</h1>
      <p>
        <Link to="/about/">About</Link>
      </p>
    </main>

  )
}