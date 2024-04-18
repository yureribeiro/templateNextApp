'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import styles from './nav.module.css'

export default function Nav() {
  const router = usePathname()
  console.log('rota atual:',router)

  return (
    <nav className={styles.nav}>
      <Link
        href="/dashboard"
        className={router === '/dashboard' ? styles.linkActive : styles.link}
      >
        Painel
      </Link>
      <Link
        href="/exemple"
        className={router === '/exemple' ? styles.linkActive : styles.link}
      >Exemplo
      </Link>
    </nav>
  )
}