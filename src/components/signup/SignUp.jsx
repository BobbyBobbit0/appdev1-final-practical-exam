import styles from './SignUp.module.css'
import blossom from '../../assets/blossom-flower.svg'


function SignUp() {
    return (
        <div className={styles.page}>
            {/* LEFT SECTION */}
            <section className={styles.left}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Get Started Now</h1>
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