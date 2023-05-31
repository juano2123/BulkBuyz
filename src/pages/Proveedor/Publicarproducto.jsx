import React from "react";
import MenuBarR from "../../shared/components/MenuBar";
import PublicarProducto from "../../shared/components/PubProductoInput";

export const Publicarproducto = () => {
  return (
    <div className="P_T">
      <div className="Barra_A">
        <MenuBarR />
      </div>

      <div className="Publicar_Todo"></div>

      <div className="Info_producto">
        <h1>Publicar tu Producto</h1>
        <div className="Input-Data">
          <PublicarProducto />
        </div>
      </div>
    </div>
  );
};
export default Publicarproducto;
