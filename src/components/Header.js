import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>Home staff</span>
            <ul className='nav'>
                <li>About</li>
                <li>Contacts</li>
                <li>Personal area</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
