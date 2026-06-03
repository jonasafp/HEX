import {
  useEffect,
  useState,
} from "react";

import {
  getBCMChannels,
} from "../api/bcm";

import type {
  BCMValue,
} from "../types/backend";

import {
  BCMChannelCard,
} from "./BCMChannelCard";

export function
BCMEditor() {

  const [
    channels,
    setChannels,
  ] = useState<
    BCMValue[]
  >([]);

  useEffect(() => {

    load();

  }, []);

  async function load() {

    try {

      const data =
        await getBCMChannels();

      setChannels(
        data
      );

    } catch (error) {

      console.error(
        error
      );
    }
  }

  function updateChannel(
    channelId: string,
    value: string
  ) {

    setChannels((prev) =>
      prev.map((channel) =>

        channel.id ===
        channelId

          ? {
            ...channel,
            value,
          }

          : channel
      )
    );
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
          marginBottom: 24,
        }}
      >
        BCM Live Editor
      </h2>

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(260px, 1fr))",

          gap: 18,
        }}
      >

        {channels.map(
          (channel) => (

            <BCMChannelCard
              key={channel.id}

              channel={channel}

              onChange={(
                value
              ) =>
                updateChannel(
                  channel.id,
                  value
                )
              }
            />
          )
        )}

      </div>

    </div>
  );
}