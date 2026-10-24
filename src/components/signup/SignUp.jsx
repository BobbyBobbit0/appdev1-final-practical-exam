import styles from './SignUp.module.css'
import blossom from '../../assets/blossom-flower.svg'

function SignUp() {
  return (
    <div className={styles.page}>
      {/* LEFT SECTION (empty for now) */}
      <section className={styles.left}></section>

      {/* RIGHT SECTION */}
      <section className={styles.right}>
        <img src={blossom} alt="Blossom flower" className={styles.blossom} />
      </section>
    </div>
  )
}

export default SignUp