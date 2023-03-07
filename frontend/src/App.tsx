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
/**
 * private modules
 */
import "./App.css";

const App = () => {
  return (
    <MainLayout>
      <MonsterList />
    </MainLayout>
  );
};

export default App;
