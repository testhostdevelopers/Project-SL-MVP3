import React, { useState } from "react";
import "./style.css";
import { Menu, Dropdown, Select } from "antd";
import { motion } from "framer-motion";
import StarlBanner from "./StarlBanner";
import UpcomingCollectionsSec from "./UpcomingCollectionsSec";

const index = () => {
  return (
    <>
      <StarlBanner />
      <UpcomingCollectionsSec />
    </>
  );
};

export default index;
