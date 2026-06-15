"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Modal from "./Modal";

export default function Navbar() {
  const searchParams = useSearchParams();
  const showModal = searchParams.get("help");

  return (
    <>
      <div className="navbar">
        <div className="flex justify-between">
          <div className="bg-white rounded-full shadow grow p-4.5">
            <h1 className="text-red font-semibold">bus-arrival</h1>
          </div>
        </div>
      </div>
    </>
  );
}
