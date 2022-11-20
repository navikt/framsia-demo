import { init, track } from "@amplitude/analytics-browser";

export const initAmplitude = () => {
  init("default", undefined, {
    serverUrl: "https://amplitude.nav.no/collect-auto",
  });
};

export const logAmplitudeEvent = (
  event: string,
  properties?: Record<string, any>
) => {
  console.log("tracking amplitude event");
  track(event, properties);
};
