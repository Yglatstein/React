import React, { useEffect, useState } from "react";
import Card from "./../components/card/Card";
import { Link, Route, Routes, useParams } from "react-router-dom";
import axios from "axios";

interface TDLProps {
  userId: string;
}

const TDL = () => {
  console.log("use params is: ", useParams());
  const [tdlList, setTdlList] = useState<string>();


  async function getList() {
    
  }

  useEffect(() => {
    
    getList()
  }, []);

  return (
    <div className="tdl_wrapper">
     
    </div>
  );
};

export default TDL;
