import "@navikt/ds-css";
import type { AppProps } from "next/app";
import { initAmplitude } from "../lib/amplitude";

initAmplitude();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
