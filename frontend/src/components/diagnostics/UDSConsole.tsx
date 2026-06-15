import {
  useState,
} from "react";

import {
  sendUDS,
} from "../../uds/udsClient";

import type {
  UDSResponse,
} from "../../types/uds";

export function UDSConsole() {

  const [
    command,
    setCommand,
  ] = useState("");

  const [
    response,
    setResponse,
  ] =
    useState<
      UDSResponse | null
    >(null);

  async function execute() {

    const result =
      await sendUDS(
        command
      );

    setResponse(
      result
    );
  }

  return (

    <div
      style={{
        marginTop: 24,

        padding: 24,

        borderRadius: 20,

        background:
          "rgba(255,255,255,0.03)",
      }}
    >

      <h2>
        UDS Console
      </h2>

      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        <input
          value={command}
          onChange={(e) =>
            setCommand(e.target.value)
          }
          placeholder="22F190"
          style={{
            flex: 1,
            height: 44,
            padding: "0 14px",
            borderRadius: 10,
            border:
              "1px solid rgba(255,255,255,0.08)",
            background:
              "rgba(255,255,255,0.03)",
            color: "white",
            outline: "none",
            fontSize: 14,
          }}
        />

        <button
          onClick={execute}
          style={{
            height: 44,
            minWidth: 90,
            borderRadius: 10,
            border:
              "1px solid rgba(240,185,11,0.35)",
            background:
              "rgba(240,185,11,0.12)",
            color: "#f0b90b",
            fontWeight: 600,
            cursor: "pointer",
            transition: "0.2s",
          }}
        >
          Enviar
        </button>
      </div>

      {response && (
        <div
          style={{
            marginTop: 20,
            padding: 16,
            borderRadius: 12,
            background:
              "rgba(255,255,255,0.03)",
            border:
              "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div>
            <strong>Service:</strong>{" "}
            {response.service}
          </div>

          <div>
            <strong>Status:</strong>{" "}
            {response.success
              ? "SUCESSO"
              : "ERRO"}
          </div>

          <div>
            <strong>Data:</strong>{" "}
            {response.data}
          </div>

          <div>
            <strong>Timestamp:</strong>{" "}
            {new Date(
              response.timestamp
            ).toLocaleTimeString()}
          </div>
        </div>
      )}

    </div>
  );
}