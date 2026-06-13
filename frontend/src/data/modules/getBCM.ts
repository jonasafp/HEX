import {
  bcmModules,
} from "./index";

export function
getBCMById(
  id: string
) {

  return bcmModules.find(
    (module) =>
      module.id === id
  );
}