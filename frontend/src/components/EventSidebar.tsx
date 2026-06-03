import {
  Lock,
  Unlock,
  Moon,
  Sunset,
} from "lucide-react";

import type { VehicleEvent } from "../types/lighting";
import "../styles/panel.css";

interface Props {
  selectedEvent: VehicleEvent;
  setSelectedEvent: (event: VehicleEvent) => void;
}

export function EventSidebar({
  selectedEvent,
  setSelectedEvent,
}: Props) {
  const events = [
    {
      id: "unlock_vehicle",
      label: "Destravar veículo",
      icon: <Unlock size={18} />,
    },
    {
      id: "lock_vehicle",
      label: "Travar veículo",
      icon: <Lock size={18} />,
    },
    {
      id: "coming_home",
      label: "Coming Home",
      icon: <Moon size={18} />,
    },
    {
      id: "leaving_home",
      label: "Leaving Home",
      icon: <Sunset size={18} />,
    },
  ];

  return (
    <div
      style={{
        width: 300,
        padding: 24,
        borderRight:
          "1px solid rgba(255,255,255,0.05)",

        background:
          "rgba(10,10,14,0.72)",

        backdropFilter:
          "blur(18px)",
      }}
    >
      <h2
        style={{
          marginBottom: 30,
          fontSize: 18,
          color: "#999",
        }}
      >
        EVENTOS
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {events.map((event) => {
          const active =
            selectedEvent === event.id;

          return (
            <button
              key={event.id}
              onClick={() =>
                setSelectedEvent(
                  event.id as VehicleEvent
                )
              }
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: active
                  ? "rgba(240,185,11,0.12)"
                  : "rgba(255,255,255,0.03)",
                border: active
                  ? "1px solid rgba(240,185,11,0.5)"
                  : "1px solid rgba(255,255,255,0.05)",
                transition: "0.25s",
                color: active
                  ? "#f0b90b"
                  : "white",
                padding: "16px",
                borderRadius: 12,
                cursor: "pointer",
              }}
            >
              {event.icon}
              {event.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}