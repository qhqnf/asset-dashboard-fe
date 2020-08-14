import React, { useState, useEffect } from "react";
import DashboardPresenter from "./DashboardPresenter";
import api from "../../api";

const DashboardContainer = ({ id, token, setAsset, asset }) => {
  const [isLoading, setIsLoading] = useState(false);
  const getAsset = async (id, token) => {
    try {
      const { data } = await api.loadAsset(id, token);
      setAsset(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAsset(id, token);
    setIsLoading(false);
  }, [id, token]);
  return <DashboardPresenter isLoading={isLoading} asset={asset} />;
};

export default DashboardContainer;
