import {
  useState,
} from "react";

import type {
  BCMChannel,
} from "../types/bcmChannel";

interface Props {

  channels:
    BCMChannel[];
}

export function BCMEditor({
  channels,
}: Props) {

  const [
    values,
    setValues,
  ] = useState<
    Record<string,string>
  >({});

  function updateValue(
    channelId: string,
    value: string
  ) {

    setValues((prev) => ({

      ...prev,

      [channelId]:
        value,
    }));
  }

  return (

    <div
      style={{
        marginTop: 24,

        padding: 24,

        borderRadius: 24,

        background:
          "rgba(10,10,14,0.75)",

        border:
          "1px solid rgba(255,255,255,0.05)",
      }}
    >

      <h2>
        BCM Adaptations
      </h2>

      {channels.map(
        (channel) => (

          <div
            key={channel.id}
            style={{
              marginTop: 18,
            }}
          >

            <div
              style={{
                marginBottom: 6,
              }}
            >
              {channel.label}
            </div>

            <select

              value={
                values[
                  channel.id
                ] || ""
              }

              onChange={(e) =>
                updateValue(
                  channel.id,
                  e.target.value
                )
              }

              style={{
                width: "100%",
                padding: 10,
                borderRadius: 10,
                background:
                  "#111",
                color:
                  "white",
              }}
            >

              <option value="">
                Selecione
              </option>

              {channel.values.map(
                (value) => (

                  <option
                    key={value}
                    value={value}
                  >
                    {value}
                  </option>
                )
              )}

            </select>

          </div>
        )
      )}

    </div>
  );
}