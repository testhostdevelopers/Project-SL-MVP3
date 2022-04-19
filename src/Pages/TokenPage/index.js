import React, { useState } from "react";
import "./style.css";
import { Menu, Dropdown, Select } from "antd";
import { motion } from "framer-motion";
import StarlBanner from "./StarlBanner";
import PrimedandReady from "./PrimedandReady";
import WeAreHereSec from "./WeAreHereSec";
import TheStarlightDAOSec from "./TheStarlightDAOSec";
import ClimeworksSec from "./ClimeworksSec";
import CreateCollectibleMultiplePopup from "../../Components/Popup/CreateCollectibleMultiplePopup";

const index = () => {
  return (
    <>
      <StarlBanner />
      <PrimedandReady />
      <TheStarlightDAOSec />
      <ClimeworksSec />
      <WeAreHereSec />
      {/* <CreateCollectibleMultiplePopup /> */}
    </>
  );
};

export default index;
