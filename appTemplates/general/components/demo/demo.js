import styles from './demo.module.css'
import Time from '../time/time'

export default function Demo({ children = 'Demo page', userAgent }) {
  return (
    <section className={styles.container}>
      <p>{children}</p>
      <p>User agent: {userAgent}</p>
      <Time />
    </section>
  )
}
