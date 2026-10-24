import styles from './Login.module.css'
import blossom from '../../assets/blossom-flower.svg'
import googleLogo from '../../assets/icons-google-logo.svg'
import appleLogo from '../../assets/icons-apple-logo.svg'

function Login() {
  return (
    <div className={styles.page}>
      {/* LEFT SECTION */}
      <section className={styles.left}>
        <div className={styles.content}>
          {/* Part 1: Title & Subtitle */}
          <h1 className={styles.title}>Welcome back!</h1>
          <p className={styles.subtitle}>Enter your Credentials to access your account</p>

          <form className={styles.form}>
            {/* Part 2: Form */}
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
              <div className={styles.passwordHeader}>
                <label htmlFor="password" className={styles.label}>Password</label>
                <a href="#" className={styles.forgotPassword}>forgot password</a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className={styles.input}
              />
            </div>

            <label className={styles.checkbox}>
              <input type="checkbox" />
              <span>Remember for 30 days</span>
            </label>

            <button type="submit" className={styles.submit}>Login</button>
          </form>

          {/* Part 3: Divider and Bottom Section */}
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
            Don't have an account? <a href="#" className={styles.link}>Sign Up</a>
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

export default Login