import {
  useEffect,
  useState,
} from "react";

import { apiGet }
  from "../api/client";

import type {
  BackendStatus,
  BackendVehicle,
  BCMValue,
  CANFrame,
} from "../types/backend";

export function
useBackend() {

  const [
    status,
    setStatus,
  ] = useState<
    BackendStatus | null
  >(null);

  const [
    vehicle,
    setVehicle,
  ] = useState<
    BackendVehicle | null
  >(null);

  const [
    bcm,
    setBcm,
  ] = useState<
    BCMValue[]
  >([]);

  const [
    canFrames,
    setCanFrames,
  ] = useState<
    CANFrame[]
  >([]);

  useEffect(() => {

    load();

  }, []);

  async function load() {

    try {

      const [
        statusData,
        vehicleData,
        bcmData,
        canData,
      ] = await Promise.all([
        apiGet<BackendStatus>(
          "/status"
        ),

        apiGet<BackendVehicle>(
          "/vehicle"
        ),

        apiGet<BCMValue[]>(
          "/bcm"
        ),

        apiGet<CANFrame[]>(
          "/can"
        ),
      ]);

      setStatus(
        statusData
      );

      setVehicle(
        vehicleData
      );

      setBcm(
        bcmData
      );

      setCanFrames(
        canData
      );

    } catch (error) {

      console.error(
        error
      );
    }
  }

  return {

    status,

    vehicle,

    bcm,

    canFrames,

    reload: load,
  };
}