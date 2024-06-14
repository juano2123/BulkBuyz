import React, { useState } from "react";
import MenuBarR from "../../shared/components/menuBar";
import { Input, Rate } from "antd";
import { Button } from "antd";
import "../styles/CalificarServicio.css";

export const CalificarServicio = () => {
  const { TextArea } = Input;
  const [value, setValue] = useState();
  return (
    <div className="Serivcio_todo">
      <header>
        <MenuBarR />
      </header>

      <div className="input">
        <div className="todi">
          <h1>Calificar el servicio</h1>
          <br></br>
          <span>
            <Rate onChange={setValue} value={value} />
          </span>

          {/* Aqui van las estrellas */}

          <>
            <TextArea
              style={{ width: "90%", marginTop: "30px" }}
              rows={4}
              placeholder="Type your opinion here..."
            />
            <br />
          </>

          <Button className="btn-submit" type="primary">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CalificarServicio;
