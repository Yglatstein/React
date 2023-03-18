import React, { useState, FC } from "react";
import axios from "axios";
import "./card.scss";
import { Link , useParams } from "react-router-dom";


interface DogsProps {
    src: string;
    breed: string;
}


const Card: FC<DogsProps> = ({src , breed}) => {
    return (
    <div className="card_wrapper">
        <li className="card">
            <img src={src} className="card_img"/>
            <Link to={`/Dog/${breed}`}>{breed}</Link>
        </li>
    </div>
  );
};

export default Card;
