/**
 * node_modules
 */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/timetable" element={<TimeTable />} />
          <Route path="/monsterlist" element={<MonsterList />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
};

export default App;
