import styles from './SignUp.module.css'
import blossom from '../../assets/blossom-flower.svg'
import googleLogo from '../../assets/icons-google-logo.svg'
import appleLogo from '../../assets/icons-apple-logo.svg'

function SignUp() {
  return (
    <div className={styles.page}>
      {/* LEFT SECTION */}
      <section className={styles.left}>
        <div className={styles.content}>
          <h1 className={styles.title}>Get Started Now</h1>

          <form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className={styles.input}
              />
            </div>

            <label className={styles.checkbox}>
              <input type="checkbox" />
              <span>
                I agree to the <a href="#" className={styles.underline}>terms &amp; policy</a>
              </span>
            </label>

            <button type="submit" className={styles.submit}>Signup</button>
          </form>

          {/* PART 3: DIVIDER AND BOTTOM SECTION */}
          <div className={styles.dividerContainer}>
            <div className={styles.line}></div>
            <span className={styles.orText}>or</span>
            <div className={styles.line}></div>
          </div>

          <div className={styles.socialButtons}>
            <button type="button" className={styles.socialButton}>
              <img src={googleLogo} alt="Google logo" className={styles.socialIcon} />
              <span>Sign in with Google</span>
            </button>
            <button type="button" className={styles.socialButton}>
              <img src={appleLogo} alt="Apple logo" className={styles.socialIcon} />
              <span>Sign in with Apple</span>
            </button>
          </div>

          <p className={styles.bottomText}>
            Have an account? <a href="#" className={styles.link}>Sign In</a>
          </p>
        </div>
      </section>

      {/* RIGHT SECTION */}
      <section className={styles.right}>
        <img src={blossom} alt="Blossom flower" className={styles.blossom} />
      </section>
    </div>
  )
}

export default SignUp