'use client'; // for React state on sidebar toggle

import Link from 'next/link';
import { useState } from 'react';
import "../../app/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col sm:flex-row bg-gray-100">
      {/* Header */}
      <header className="w-full bg-green-700 text-white flex items-center justify-between px-4 py-3 sm:hidden">
        <h1 className="text-xl font-bold">🌾 Farm App</h1>
        <button onClick={() => setOpen(!open)} className="text-white">
          ☰
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`${
          open ? 'block' : 'hidden'
        } sm:block w-full sm:w-64 bg-green-700 text-white p-4 space-y-2`}
      >
        <h2 className="text-xl font-bold mb-4 hidden sm:block">🌾 Farm App</h2>
        <Link href="/farmers" className="block hover:underline">👨‍🌾 Farmers</Link>
        <Link href="/veggies" className="block hover:underline">🥬 Veggies</Link>
        <Link href="/cropOrders" className="block hover:underline">📦 Orders</Link>
        <Link href="/cropHarvests" className="block hover:underline">🌽 Harvests</Link>
      </aside>

      {/* Main */}
      <main className="flex-1 p-4">
        <div className="mb-4 border-b pb-2">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
        </div>
        {children}
      </main>
    </div>
  );
}
