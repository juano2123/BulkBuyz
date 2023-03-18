import MenuBarR from "../../shared/components/menuBar";
import "../styles/InfoAccount.css";

const Uploadphoto = () => {
    return (
      <div className="infoUpload">
        <header>
          <MenuBarR />
        </header>

     <div className="info_photo">   

         <div className="Upload_text">
         <h1>Upload my photo</h1>
            </div> 

    <div className="Text_bar">
        <span>Your photo will be displayed within 24 hours</span>
        </div> 
     <div className="left">
        <img src="#" alt="" width={400} height={300} />
        <span>Clck the button or drag the image onto the dotted box to upload</span>
        <small>Upload JPG format, sized no larger than 3MB</small>
        </div>  
     <div className="right"> 
        <span>Uploading Rules:</span>
        <ul>
            
        <li>Please upload a photo that matches the gender, age and status details in your personal profile.</li>
        <li>Use a photo that is appropriate for a business setting. Group photos are not allowed.</li>
        <li>Photos violating the rules stated in the Terms of User will be removed without notice.</li>
        </ul>
        </div>    

     </div>      

    </div>
);
};
export default Uploadphoto;

