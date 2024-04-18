import Nav from './nav'
import styles from './sidebar.module.css'
import SwithTheme from './swithTheme'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.topContent}>
        <h2>Menu</h2>
        <Nav />
      </div>
      <SwithTheme />
    </aside>
  )
}