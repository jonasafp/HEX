import { useEffect } from "react";

import type {
  EventConfig,
} from "../types/lighting";

export function useLocalProfiles(
  profiles: EventConfig[]
) {
  useEffect(() => {
    localStorage.setItem(
      "vw-light-profiles",

      JSON.stringify(profiles)
    );
  }, [profiles]);
}