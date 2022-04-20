import React from "react";
import StarlBanner from "./StarlBanner";
import PrimedandReady from "./PrimedandReady";
import WeAreHereSec from "./WeAreHereSec";
import TheStarlightDAOSec from "./TheStarlightDAOSec";
import ClimeworksSec from "./ClimeworksSec";
// import { Menu, Dropdown, Select } from "antd";
// import { motion } from "framer-motion";
// import CreateCollectibleMultiplePopup from "../../Components/Popup/CreateCollectibleMultiplePopup";
import "./style.css";

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
