import type {
  EventConfig,
} from "../types/lighting";

export const defaultProfiles: EventConfig[] =
  [
    {
      event: "unlock_vehicle",

      lights: [
        {
          type: "drl",

          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },

        {
          type: "low_beam",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },

        {
          type: "high_beam",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },

        {
          type: "fog_light",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },

        {
          type: "left_indicator",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },

        {
          type: "right_indicator",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },
      ],
    },

    {
      event: "lock_vehicle",

      lights: [
        {
          type: "drl",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },

        {
          type: "low_beam",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },

        {
          type: "high_beam",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },

        {
          type: "fog_light",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },

        {
          type: "left_indicator",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },

        {
          type: "right_indicator",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },
      ],
    },

    {
      event: "coming_home",

      lights: [
        {
          type: "drl",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },

        {
          type: "low_beam",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },

        {
          type: "high_beam",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },

        {
          type: "fog_light",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },

        {
          type: "left_indicator",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },

        {
          type: "right_indicator",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },
      ],
    },

    {
      event: "leaving_home",

      lights: [
        {
          type: "drl",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },

        {
          type: "low_beam",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },

        {
          type: "high_beam",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },

        {
          type: "fog_light",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },

        {
          type: "left_indicator",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },

        {
          type: "right_indicator",
          config: {
            enabled: true,

            animation: "steady",

            intensity: 100,
          },
        },
      ],
    },
  ];