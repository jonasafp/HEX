import {
  useState,
} from "react";

import {
  sendUDSCommand,
} from "../api/uds";

import type {
  UDSResponse,
} from "../api/uds";

export function
UDSConsole() {

  const [
    command,
    setCommand,
  ] = useState("");

  const [
    response,
    setResponse,
  ] = useState<
    UDSResponse | null
  >(null);

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function execute() {

    if (!command) {
      return;
    }

    try {

      setLoading(true);

      const result =
        await sendUDSCommand(
          command
        );

      setResponse(
        result
      );

    } catch (error) {

      console.error(
        error
      );

    } finally {

      setLoading(false);
    }
  }

  return (

    <div
      style={{
        marginTop: 24,

        background:
          "rgba(15,15,20,0.72)",

        border:
          "1px solid rgba(255,255,255,0.05)",

        borderRadius: 24,

        padding: 24,
      }}
    >

      <h2
        style={{
          marginBottom: 20,
        }}
      >
        UDS Console
      </h2>

      <div
        style={{
          display: "flex",

          gap: 12,
        }}
      >

        <input
          value={command}

          onChange={(e) =>
            setCommand(
              e.target.value
            )
          }

          placeholder="22F190"

          style={{
            flex: 1,

            background:
              "rgba(255,255,255,0.04)",

            border:
              "1px solid rgba(255,255,255,0.08)",

            borderRadius: 12,

            padding:
              "14px 16px",

            color: "white",

            outline: "none",
          }}
        />

        <button
          onClick={execute}

          disabled={loading}

          style={{
            padding:
              "14px 20px",

            borderRadius: 12,

            border:
              "1px solid rgba(240,185,11,0.4)",

            background:
              "rgba(240,185,11,0.12)",

            color: "white",

            cursor: "pointer",
          }}
        >
          {loading
            ? "Executando..."
            : "Enviar"}
        </button>

      </div>

      {response && (

        <div
          style={{
            marginTop: 20,

            background:
              "rgba(255,255,255,0.03)",

            borderRadius: 14,

            padding: 18,
          }}
        >

          {response.error ? (

            <div
              style={{
                color:
                  "#ff6b6b",
              }}
            >
              {response.error}
            </div>

          ) : (

            <>

              <div
                style={{
                  marginBottom: 12,
                }}
              >
                <strong>
                  Serviço:
                </strong>{" "}

                {
                  response.service
                }
              </div>

              <div>

                <strong>
                  Resposta:
                </strong>{" "}

                {
                  response.response
                }

              </div>

            </>
          )}

        </div>
      )}

    </div>
  );
}