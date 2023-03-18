import React from "react";
import MenuBarR from "../../shared/components/menuBar";
import Securquestion from "../../shared/components/Securquestion";
import { Button } from "antd";

const Setquestions = () => {
    return (

     <div className="questions">

        <header>
          <MenuBarR />
        </header>
    <div className="Set_Question">
        <h1>Set Security questions</h1>

        <div className="anuncio">
            <span>Please set carefully!</span>   
        </div>

        <div className="Preguntas_respuesta">

            <span> Question 1</span>
            <Securquestion/>
            <span> Answer</span>
            <span> Question 2</span>
            <Securquestion/>
            <span> Answer</span>
            <span> Question 3</span>
            <Securquestion/>
            <span> Answer</span>

        </div>
        <div className="Button">
        <Button className="btn-forget" type="primary">
          Submit
        </Button>
        </div>
        


    </div>
    </div>



    );

};
export default Setquestions;

