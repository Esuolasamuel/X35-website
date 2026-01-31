export default function VisionMission() {
  return (
    <section
      className="
        w-full bg-black
        px-6 py-16
        md:px-30 md:py-30
      "
    >
      <div
        className="
          flex flex-col md:flex-row
          gap-6
        "
      >
        {/* Vision Card */}
        <div
          className="
            flex-1
            rounded-2xl
            bg-linear-to-b from-[#14124A] to-[#0E0C3C]
            p-8 md:p-10
          "
        >
          <h3
            className="
              text-white
              text-[32px]
              leading-[35.2px]
              font-semibold
              mb-4
            "
          >
            Our Vision
          </h3>

          <p
            className="
              text-white/80
              text-[14px]
              leading-[25.5px]
            "
          >
            To democratize architecture and interior within the design and build
            space for people worldwide.
          </p>
        </div>

        {/* Mission Card */}
        <div
          className="
            flex-1
            rounded-2xl
            bg-linear-to-b from-[#14124A] to-[#0E0C3C]
            p-8 md:p-10
          "
        >
          <h3
            className="
              text-white
              text-[32px]
              leading-[35.2px]
              font-semibold
              mb-4
            "
          >
            Our Mission
          </h3>

          <p
            className="
              text-white/80
              text-[14px]
              leading-[25.5px]
            "
          >
            To mobilize and enable highly creative individuals to design and
            build impactful solutions for businesses and residences worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
