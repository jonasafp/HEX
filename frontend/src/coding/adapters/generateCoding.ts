import type {
    CodingProfile,
} from "../../types/coding";

import type {
    EventConfig,
} from "../../types/lighting";

import type {
    VehicleProfile,
} from "../../types/vehicle";

import {
    mqbChannels,
} from "../bcm/mqbChannels";

export function generateCoding(
    vehicle:
        VehicleProfile,

    config:
        EventConfig
): CodingProfile {

    const values = [];

    for (
        const light
        of config.lights
    ) {

        const channel =
            mqbChannels.find(
                (c) =>
                    c.light ===
                    light.type
            );

        if (!channel) {
            continue;
        }

        values.push({

            channelId:
                channel.id,

            value:
                light.config.enabled
                    ? (
                        light.config
                            .animation ||
                        "steady"
                    )
                    : "off",
        });
    }

    return {

        vehicleId:
            vehicle.id,

        bcm:
            vehicle.bcm,

        values,
    };
}