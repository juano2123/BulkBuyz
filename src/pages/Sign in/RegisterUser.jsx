import LOGO from "../../images/LOGO.png";
import styles from "../../pages/styles/Principal.module.css";
import "../styles/RegisterUser.css";
import Register from "../../shared/components/RegisterInput";
import { UserProvider } from "../../contex/UserProvider";

export const RegisterUser = () => {
  return (
    <div className="register">
      <header>
        <img className={styles.logo} alt="logo" src={LOGO}></img>
      </header>
      <div className="content-register">
        <h1>Crea una cuenta</h1>
        <div className="form-hdp">
          <UserProvider>
            <Register />
          </UserProvider>
        </div>
      </div>
    </div>
  );
};
