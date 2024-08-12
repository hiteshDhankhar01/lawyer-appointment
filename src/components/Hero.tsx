"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useAuth } from '@/context/authContext';
import AppointmentCard from "./AppointmentCard";
import { AppointmentType } from "@/lib/type";

const Hero = () => {
  const { state } = useAuth();
  const [appointment, setAppointment] = useState<AppointmentType| null>(null);
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    if (state.user) {
      setUserId(state.user._id);
    }
  }, [state.user]);

  useEffect(() => {
    if (userId) {
      fetchAppointment();
    }
  }, [userId]);

  const fetchAppointment = async () => {
    try {
      const response = await fetch(`/api/appointments/${userId}`);
      const data = await response.json();

      if (!response.ok) {
        console.error("Error fetching appointment:", data.message || "Unknown error");
        return;
      }

      setAppointment(data.data);
    } catch (error) {
      console.error("Failed to fetch appointment:", error);
    }
  };

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/bg.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
        <div className="w-full">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            We Fight for Right
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Talk to our best lawyers and book appointments online effortlessly.
          </p>
          {appointment ? (
            <AppointmentCard appointment={appointment} />
          ) : (
            <Link
              href="/book-appointment"
              className="bg-transparent border-[.1px] border-white text-white px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 hover:text-black transition duration-500 backdrop-blur-sm"
            >
              Book Appointment
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;