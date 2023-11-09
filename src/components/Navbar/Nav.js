import './Nav.css'

import React from 'react'

import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <a href="/" className="brand">
          <h1>Cooking Ninja</h1>
        </a>
        <a href="/create">Create Recipe</a>
      </nav>
    </div>
  )
}