import React, { useState, useEffect } from "react";
import api from "../api";

export default (data) => {
  const [isReady, setIsReady] = useState(false);
  useEffect((value) => {
    loadAsset();
    console.log(value);
  }, []);
  const loadAsset = async () => {
    try {
      const data = await api.getStockCode();
      console.log(data);
      setIsReady(true);
    } catch (e) {
      console.log(e);
    }
  };
  return isReady ? (
    <div>
      <span>My Portfolio</span>
    </div>
  ) : (
    <div>
      <span>Loading...</span>
    </div>
  );
};
