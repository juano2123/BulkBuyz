import MenuBarR from "../../shared/components/menuBar";
import "../styles/InfoAccount.css";
/*


   PREGUNTAR AL PROFESOR 

*/
const InfoAccount = () => {
  return (
    <div className="infoMenu">
      <header>
        <MenuBarR />
      </header>

      <div className="account">
        <h1>CUENTA</h1>
      </div>
      <div className="information_big">
        <div className="information_1">
          <span>Upload foto</span>
          <span>Your member id:</span>
          <span>A4543tfwfee</span>
          <span>Email:</span>
          <span>example@gmail.com</span>
          <span>Telephone:</span>
          <span>302555555</span>
        </div>
      <div className="information_2">
        <div className="left">
        <span>Personal information</span>

        <span> My Profile</span>
        <span>Upload my foto</span>
          </div>
         <div className="right">
          <span>Account Security</span>
          <span>Change Email</span>
          <span>Change Password</span>
          <span>Set security questions</span>
          </div> 
       
        </div>  



      </div>
    </div>
  );
};
export default InfoAccount;
