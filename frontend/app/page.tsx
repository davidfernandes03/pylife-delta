"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("carregando...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("erro ao conectar com o backend"));
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">
        Status do backend: <span className="text-green-600">{status}</span>
      </h1>
    </main>
  );
}