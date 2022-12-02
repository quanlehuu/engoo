import styles from "./Register.module.scss"
import RegisterForm from "../../../Layout/Component/RegisterForm"
import Footer from "../../../Layout/Component/Footer";

function Register() {
    return ( 
        <div className={styles.container}>
            <div className={styles.RegisterContent}>
                <RegisterForm/>
            </div>
            <Footer/>
        </div>
    );
}

export default Register;