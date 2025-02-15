"use client";
import React from "react";
import { FaStar } from "react-icons/fa";

interface Props {
  rating: number;
}

const StarRating = ({ rating }: Props) => {
  return (
    <div className="flex items-center space-x-2">
      {/* Icono de estrella */}
      <FaStar className="text-yellow-500 text-xl" />
      <span className="text-lg font-semibold">{rating.toFixed(2)}</span>
    </div>
  );
};

export default StarRating;
