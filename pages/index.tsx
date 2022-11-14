import { BodyShort, Heading } from "@navikt/ds-react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <article>
      <Heading level="1" size="xlarge" spacing>
        Guaranteed income app
      </Heading>
      <BodyShort>Some info about our app</BodyShort>
    </article>
  );
}
