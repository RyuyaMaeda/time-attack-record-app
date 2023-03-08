/**
 * node_modules
 */
import React, { useState } from "react";
/**
 * project modules
 */
import { MainLayout } from "./components/MainLayout";
import { TimeTable } from "./pages/TimeTable";
import { MonsterList } from "./pages/MonsterList";
import { Top } from "./pages/Top";
/**
 * private modules
 */
import "./App.css";

const App = () => {
  return (
    <MainLayout>
      <Top />
    </MainLayout>
  );
};

export default App;
