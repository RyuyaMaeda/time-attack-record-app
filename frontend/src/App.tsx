/**
 * node_modules
 */
import React, { useState } from "react";
/**
 * project modules
 */
import { MainLayout } from "./components/MainLayout";
import { TimeTable } from "./components/TimeTable";
/**
 * private modules
 */
import "./App.css";

const App = () => {
  return (
    <MainLayout>
      <TimeTable />
    </MainLayout>
  );
};

export default App;
