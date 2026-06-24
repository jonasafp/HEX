import {
  bcmDatabase,
} from "./bcmDatabase";

export function getBCMById(
  id: string
) {

  return bcmDatabase.find(
    (bcm) =>
      bcm.id === id
  );
}