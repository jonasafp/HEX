import { useMemo, useState } from "react";

import type {
  VehicleEvent,
  LightType,
  EventConfig,
  LightState,
} from "./types/lighting";

import type {
  VehicleProfile,
} from "./types/vehicle";

import { defaultProfiles } from "./data/defaultProfiles";
import { vwVehicles } from "./data/vehicles/vwVehicles";

import { EventSidebar } from "./components/EventSidebar";
import { VehicleCanvas } from "./components/vehicle/VehicleCanvas";
import { LightsPanel } from "./components/LightsPanel";
import { ConfigurationSummary } from "./components/ConfigurationSummary";
import { EffectsPanel } from "./components/EffectsPanel";
import { VehicleSelector } from "./components/vehicle/VehicleSelector";
import { BCMPanel } from "./components/bcm/BCMPanel";
import { VehicleInfoPanel } from "./components/VehicleInfoPanel";
import { CANMonitor } from "./components/diagnostics/CANMonitor";

import { useLocalProfiles } from "./hooks/useLocalProfiles";
import { useBackend } from "./hooks/useBackend";

import { generateCoding } from "./coding/adapters/generateCoding";
import { exportCoding } from "./coding/export/exportCoding";

import { UDSConsole } from "./components/diagnostics/UDSConsole";
import { BCMEditor } from "./components/BCMEditor";

import {
  defaultVehicleState,
  type VehicleState,
} from "./state/vehicleState";

import { VehicleStatePanel, } from "./components/vehicle/VehicleStatePanel";

import { applyVehicleLogic, } from "./engine/smartLightEngine";

function App() {

  const [
    selectedEvent,
    setSelectedEvent,
  ] = useState<VehicleEvent>(
    "unlock_vehicle"
  );

  const [
    selectedLightType,
    setSelectedLightType,
  ] = useState<LightType | null>(
    null
  );

  const [
    selectedVehicle,
    setSelectedVehicle,
  ] = useState<VehicleProfile>(
    vwVehicles[0]
  );

  const [
    vehicleState,
    setVehicleState,
  ] = useState<VehicleState>(
    defaultVehicleState
  );

  const [
    profiles,
    setProfiles,
  ] = useState<EventConfig[]>(() => {

    const saved =
      localStorage.getItem(
        "vw-light-profiles"
      );

    if (saved) {
      return JSON.parse(saved);
    }

    return defaultProfiles;
  });

  useLocalProfiles(profiles);

  const baseProfile =
    useMemo(() => {

      return profiles.find(
        (profile) =>
          profile.event ===
          selectedEvent
      )!;

    }, [
      profiles,
      selectedEvent,
    ]);

  const currentProfile =
    useMemo(() => {

      return applyVehicleLogic(
        structuredClone(
          baseProfile
        ),
        vehicleState
      );

    }, [
      baseProfile,
      vehicleState,
    ]);

  const selectedLight:
    | LightState
    | null =
    currentProfile.lights.find(
      (light) =>
        light.type ===
        selectedLightType
    ) || null;

  const codingProfile =
    generateCoding(
      selectedVehicle,
      currentProfile
    );

  const backend =
    useBackend();

  function toggleLight(
    type: LightType
  ) {

    setSelectedLightType(type);

    setProfiles((prev) =>
      prev.map((profile) => {

        if (
          profile.event !==
          selectedEvent
        ) {
          return profile;
        }

        return {
          ...profile,

          lights:
            profile.lights.map(
              (light) =>
                light.type === type
                  ? {
                    ...light,

                    config: {
                      ...light.config,

                      enabled:
                        !light.config
                          .enabled,
                    },
                  }
                  : light
            ),
        };
      })
    );
  }

  function updateAnimation(
    animation:
      | "steady"
      | "blink"
      | "fade"
      | "sequential"
  ) {

    if (!selectedLight) {
      return;
    }

    setProfiles((prev) =>
      prev.map((profile) => {

        if (
          profile.event !==
          selectedEvent
        ) {
          return profile;
        }

        return {
          ...profile,

          lights:
            profile.lights.map(
              (light) =>
                light.type ===
                  selectedLight.type
                  ? {
                    ...light,

                    config: {
                      ...light.config,

                      animation,
                    },
                  }
                  : light
            ),
        };
      })
    );
  }

  function updateVehicleState(
    key: keyof VehicleState
  ) {

    setVehicleState((prev) => ({

      ...prev,

      [key]: !prev[key],
    }));
  }

  return (

    <div
      style={{
        display: "flex",

        minHeight: "100vh",

        background:
          "radial-gradient(circle at top, #16161d 0%, #09090d 45%, #050507 100%)",
      }}
    >

      <EventSidebar
        selectedEvent={
          selectedEvent
        }

        setSelectedEvent={
          setSelectedEvent
        }
      />

      <div
        style={{
          flex: 1,

          padding: 30,

          overflowY: "auto",
        }}
      >

        <h1
          style={{
            marginBottom: 12,

            fontSize: 46,

            fontWeight: 700,

            letterSpacing: -1,
          }}
        >
          VW Light Studio
        </h1>

        <p
          style={{
            color: "#8a8a95",

            fontSize: 16,

            marginBottom: 30,
          }}
        >
          Plataforma de
          configuração de
          iluminação veicular
        </p>

        <VehicleSelector
          vehicles={vwVehicles}

          selectedVehicle={
            selectedVehicle
          }

          onSelect={
            setSelectedVehicle
          }
        />

        <VehicleInfoPanel
          vehicle={
            backend.vehicle
          }
        />

        <VehicleStatePanel
          state={vehicleState}

          updateState={
            updateVehicleState
          }
        />

        <VehicleCanvas
          lights={
            currentProfile.lights
          }

          toggleLight={
            toggleLight
          }
        />

        <EffectsPanel
          selectedLight={
            selectedLight
          }

          updateAnimation={
            updateAnimation
          }
        />

        <ConfigurationSummary
          lights={
            currentProfile.lights
          }
        />

        <BCMPanel
          coding={
            codingProfile
          }
        />

        <button
          onClick={() =>
            exportCoding(
              codingProfile
            )
          }

          style={{
            marginTop: 20,

            padding:
              "14px 20px",

            borderRadius: 14,

            border:
              "1px solid rgba(240,185,11,0.4)",

            background:
              "rgba(240,185,11,0.12)",

            color: "white",

            cursor: "pointer",

            fontSize: 15,
          }}
        >
          Exportar Coding
        </button>

        <CANMonitor
          frames={
            backend.canFrames
          }
        />

        <UDSConsole />

        <BCMEditor />

      </div>

      <LightsPanel
        lights={
          currentProfile.lights
        }

        supportedLights={
          selectedVehicle
            .supportedLights
        }

        toggleLight={
          toggleLight
        }
      />

    </div>
  );
}

export default App;