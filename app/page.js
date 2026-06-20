import X35Content from './x35/x35Content';

export const metadata = {
  title: {
    absolute: "Architecture, Interior Design & Construction Company in Lagos, Nigeria | X35 Projects",
  },
  description:
    "X35 Projects is a Lagos-based architecture, interior design, and construction company delivering commercial office fit-outs, residential renovations, and turnkey builds across Nigeria. We Design. We Build. We Deliver.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "X35 Projects – Architecture, Interior Design & Construction in Lagos, Nigeria",
    description:
      "Lagos-based architecture and interior design firm delivering commercial office fit-outs, residential renovations, and turnkey construction projects across Nigeria.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
    return (
        <X35Content />
    );
}