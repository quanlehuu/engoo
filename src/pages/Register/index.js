import styles from "./Register.module.scss"
import RegisterForm from "../../component/RegisterForm"
import Footer from "../../component/Footer";

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