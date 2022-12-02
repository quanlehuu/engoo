import { Link } from "react-router-dom";
import FacebookIcon from "../Icon/FacebookIcon";
import styles from "./RegisterForm.module.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useState } from "react";

function RegisterForm() {
  const [edit, setEdit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleEdit = () => {
    setEdit(true)
  }
  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerTitle}>
        <span className={styles.signChoice}>Sign Up as a Student</span>
        <span>
          or <Link className={styles.signNow}>Sign In</Link>
        </span>
      </div>
      <div className={styles.RegisterForm}>
        <div className={styles.facebookBtn}>
          <span className={styles.fbIcon}>
            <FacebookIcon />
          </span>
          Sign Up with Facebook
        </div>
        <div className={styles.differentChoice}>
          <span className={styles.crossbar}></span>or fill out the form below
          <span className={styles.crossbar}></span>
        </div>
        <form>
          <div className={styles.RegisterFormItem}>
            <label type="text" className={styles.registerFormTitle}>
              Name
            </label>
            <input className={styles.registerFormContent} required />
            <div className={styles.registerFormNote}>
              Your name, used for support and communication
            </div>
          </div>
          <div className={styles.RegisterFormItem}>
            <label className={styles.registerFormTitle}>Display Name</label>
            <input
              type="text"
              className={styles.registerFormContent}
              required
            />
            <div className={styles.registerFormNote}>
              How you want to be addressed during lessons
            </div>
          </div>
          <div className={styles.RegisterFormItem}>
            <label className={styles.registerFormTitle}>Email</label>
            <input
              type="email"
              className={styles.registerFormContent}
              required
            />
          </div>
          <div className={styles.RegisterFormItem}>
            <label className={styles.registerFormTitle}>PassWord</label>
            <div className={styles.managePassword}>
              <input
                type={showPassword ? "string" : "password"}
                className={styles.registerFormContent}
                required
              />
              <div className={styles.eyeIcon} onClick={handleShowPassword}>
                {showPassword ? (
                  <Tippy content="Hide PassWord">
                    <svg
                      viewBox="0 0 30 30"
                      aria-hidden="true"
                      class="css-h5l7gj"
                      fill="rgb(0, 157, 255)"
                    >
                      <circle cx="29" cy="15" r="1"></circle>
                      <circle cx="1" cy="15" r="1"></circle>
                      <circle cx="15" cy="15" r="3"></circle>
                      <path d="M29.8 14.4S24 5 15 5 .2 14.4.2 14.4l-.04 1.14S5 25 15 25s14.84-9.46 14.84-9.46l-.04-1.13zM15 22a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"></path>
                    </svg>
                  </Tippy>
                ) : (
                  <Tippy content="Show PassWord">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </Tippy>
                )}
              </div>
            </div>
          </div>
          <div className={styles.RegisterFormItem}>
            {edit ? <div>
              <div className={styles.RegisterFormItem}>
                <label className={styles.registerFormTitle}>Language</label>
                <select className={styles.registerFormContent}>
                  <option className={styles.languageOption}>English</option>
                  <option className={styles.languageOption}>Japanese</option>
                  <option className={styles.languageOption}>Korean</option>
                </select>
              </div>
              <div className={styles.RegisterFormItem}>
                <label className={styles.registerFormTitle}>Timezone</label>
                <select className={styles.registerFormContent}>
                  <option className={styles.languageOption}>(GMT +07:00) Asia/Bangkok</option>
                  <option className={styles.languageOption}>(GMT +06:00) Etc/GMT-6</option>
                  <option className={styles.languageOption}>(GMT +06:00) Indian/Chagos</option>
                </select>
              </div>
            </div>: <div className={styles.manageLanguage}>
              <div className={styles.manageLanguageItem}>
                <label className={styles.registerFormTitle}>Language</label>
                <span>English</span>
              </div>
              <div className={styles.manageLanguageItem}>
                <label className={styles.registerFormTitle}>Timezone</label>
                <span>Asia/Bangkok</span>
              </div>
              <span className={styles.highlight} onClick={handleEdit}>
                <h4>Edit</h4>
              </span>
            </div>}
          </div>
          <div className={styles.RegisterFormItem}>
            <div className={styles.manageRules}>
              <span className={styles.checkboxItem}>
                <input type="checkbox" id="checkbox" />
              </span>
              <label className={styles.registerRules} for="checkbox">
                I agree to Engoo's{" "}
                <span className={styles.highlight}>Terms of Service</span> and{" "}
                <span className={styles.highlight}>Privacy Policy</span>.
              </label>
            </div>
          </div>
          <div className={styles.RegisterFormItem}>
            <div className={styles.manageRules}>
              <span className={styles.checkboxItem}>
                <input type="checkbox" id="checkbox1" />
              </span>
              <label className={styles.registerRules} for="checkbox1">
                I want to receive news and promotions from Engoo.
              </label>
            </div>
          </div>
          <div className={styles.RegisterFormItem}>
            <div className={styles.loginBtn}>
              <button className={styles.loginBtnItem}>Sign Up</button>
            </div>
          </div>
          <div
            className={styles.RegisterFormItem}
            style={{ textAlign: "center", paddingBottom: "0" }}
          >
            Looking for the{" "}
            <span className={styles.highlight}>tutor sign up</span> page?
          </div>
        </form>
      </div>
      <div className={styles.owner}>
        <p>Protected by reCAPTCHA</p>
        <div className={styles.highlight}>
          Privacy Policy - Terms of Service
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
