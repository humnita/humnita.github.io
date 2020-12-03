import React from "react"
import { Link } from "gatsby"


export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                <Link to="/about/">About</Link>
                </li>
            </ul>
        </nav>
    )
}