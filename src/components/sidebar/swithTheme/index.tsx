'use client'
import Image from 'next/image'
import styles from './swithTheme.module.css'
import {useState} from 'react'
import toggleLeft from '../../../../public/toggle-left.svg'
import toggleRight from '../../../../public/toggle-right.svg'

export default function SwithTheme() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  return (
    <div className={styles.container}>
      <select
        name="theme"
        id="theme"
        className={styles.themeSelect}
        value={theme}
        onChange={toggleTheme}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <div
        onClick={toggleTheme}
        aria-hidden="true"
      >
        <Image src={theme === 'light' ? toggleLeft : toggleRight} alt="mudar tema" width={40} height={40} />
      </div>
    </div>
  )
}