import { BodyShort, Button, Heading } from "@navikt/ds-react";
import { logAmplitudeEvent } from "../lib/amplitude";

export default function Home() {
  return (
    <article>
      <Heading level="1" size="xlarge" spacing>
        Guaranteed income app
      </Heading>
      <BodyShort>Some info about our app</BodyShort>
      <Button
        variant="primary"
        onClick={() => logAmplitudeEvent("button click")}
      >
        Amplitude button
      </Button>
    </article>
  );
}
