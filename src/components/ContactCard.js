  
import React from "react";

const ContactCard = (props) => (
    <div>
      <img src={props.info.imgUrl} alt="Not found"/>
      <h2>{props.info.name}</h2>
      <p>Telefono: {props.info.phone}</p>
      <p>Email: {props.info.email}</p>
    </div>
);

export default ContactCard;