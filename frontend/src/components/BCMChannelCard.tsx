import type {
    BCMValue,
} from "../types/backend";

import {
  CustomDropdown,
} from "./ui/CustomDropdown";

interface Props {

    channel: BCMValue;

    onChange: (
        value: string
    ) => void;
}

export function
    BCMChannelCard({
        channel,
        onChange,
    }: Props) {

    return (

        <div
            style={{
                background:
                    "rgba(255,255,255,0.03)",

                border:
                    "1px solid rgba(255,255,255,0.05)",

                borderRadius: 16,

                padding: 18,
            }}
        >

            <div
                style={{
                    marginBottom: 10,

                    fontSize: 14,

                    color: "#888",
                }}
            >
                {channel.id}
            </div>

            <div
                style={{
                    fontWeight: 600,

                    marginBottom: 16,
                }}
            >
                {channel.label}
            </div>

            <CustomDropdown
                value={channel.value}

                onChange={onChange}

                options={[
                    {
                        label: "Off",
                        value: "off",
                    },

                    {
                        label: "Steady",
                        value: "steady",
                    },

                    {
                        label: "Blink",
                        value: "blink",
                    },

                    {
                        label: "Fade",
                        value: "fade",
                    },

                    {
                        label: "Sequential",
                        value: "sequential",
                    },
                ]}
            />

        </div>
    );
}