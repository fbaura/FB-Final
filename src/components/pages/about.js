import React from "react";
import profilePicture from "../../../static/assets/images/Foto_Perfil_Fer.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        Consultor informático
        Full stack
        Director de proyectos
      </div>
    </div>
  );
}
