import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import Atividade from "./pages/atividades/Atividade";
import Cliente from "./pages/clientes/Cliente";
import ClienteForm from "./pages/clientes/ClienteForm";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/atividade/*' element={<Atividade />} />
      <Route path='/atividade/:id/cliente' element={<Cliente />} />
      <Route path='/cliente/*' element={<Cliente />} />
      <Route path='/cliente/:id/atividade' element={<Atividade />} />
      <Route path='/cliente/detalhe/' element={<ClienteForm />} />
      <Route path='/cliente/detalhe/:id' element={<ClienteForm />} />
      <Route element={<PageNotFound />} />
    </Routes>
  );
}


