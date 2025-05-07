import Link from "next/link";
import React from "react";

export default function Card({ href, title }) {
  return (
    <Link href={href} className="stat-card">
      <div className="card-content">
        <h3>{title}</h3>
      </div>
    </Link>
  );
}