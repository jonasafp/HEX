import express from "express";
import cors from "cors";
import { listPorts }
  from "./obd/listPorts";

import {
  simulatedVehicle,
} from "./simulator/vehicleSimulator";

import {
  bcmChannels,
} from "./simulator/bcmSimulator";

import {
  handleUDS,
} from "./simulator/udsSimulator";

import {
  canFrames,
} from "./simulator/canSimulator";

const app = express();

app.use(cors());

app.use(express.json());

app.get(
  "/status",
  (_, res) => {

    res.json({
      online: true,
      protocol: "OBD2",
      vehicle: null,
    });
  }
);

app.listen(
  3001,
  () => {

    console.log(
      "OBD Server Online"
    );
  }
);

app.get(
  "/ports",

  async (_, res) => {

    const ports =
      await listPorts();

    res.json(ports);
  }
);

app.get(
  "/vehicle",
  (_, res) => {

    res.json(
      simulatedVehicle
    );
  }
);

app.get(
  "/bcm",
  (_, res) => {

    res.json(
      bcmChannels
    );
  }
);

app.get(
  "/can",
  (_, res) => {

    res.json(
      canFrames
    );
  }
);

app.get(
  "/uds/:command",

  (req, res) => {

    const result =
      handleUDS(
        req.params.command
      );

    res.json(result);
  }
);