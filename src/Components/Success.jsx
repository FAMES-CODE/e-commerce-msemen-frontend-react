import React from "react";
import { useParams , useNavigate} from "react-router-dom";

function Success() {
  let navigate = useNavigate();
  const { oid } = useParams();
  if (oid.length == 36) {
    return (
      <div class="h-screen">
        <div class="h-full flex flex-col items-center justify-evenly">
          <h1>Merci pour votre commande </h1>
          <div class="flex flex-col items-center">
            <h1>L'identifiant de votre commande : </h1>
            <span>{oid}</span>
          </div>
        </div>
      </div>
    );
  }  
  if(oid.length < 36) {
    return  navigate(`/`); 
  }
}

export default Success;
