import type {
  CodingProfile,
} from "../../types/coding";

export function exportCoding(
  profile:
    CodingProfile
) {

  const blob =
    new Blob(
      [
        JSON.stringify(
          profile,
          null,
          2
        ),
      ],
      {
        type:
          "application/json",
      }
    );

  const url =
    URL.createObjectURL(
      blob
    );

  const a =
    document.createElement(
      "a"
    );

  a.href = url;

  a.download =
    `coding-${profile.vehicleId}.json`;

  a.click();

  URL.revokeObjectURL(
    url
  );
}