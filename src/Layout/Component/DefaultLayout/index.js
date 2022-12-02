import styles from './DefaultLayout.module.scss';
import Header from "../Header/Header"

function DefaultLayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
