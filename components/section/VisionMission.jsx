export default function VisionMission() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          max-w-360
          mx-auto
          px-6 py-12
          md:px-12 md:py-20
          lg:px-30 lg:py-30
        "
      >
        <div
          className="
            flex flex-col md:flex-row
            gap-6
            justify-center
          "
        >
          {/* Vision Card */}
          <div
            className="
              flex-1
              min-w-147
              min-h-70.75
              bg-[#0B0B2A]
              rounded-[15px]
              p-10 md:p-14 lg:p-20
              transition-all duration-300 ease-out
              hover:-translate-y-3
              hover:shadow-[0_20px_40px_rgba(11,11,42,0.3)]
            "
          >
            <h3 className="text-white text-[16px] md:text-[32px] leading-[1.1] font-extrabold font-heading mb-6">
              Our Vision
            </h3>

            <p className="text-white/89 font-normal text-[16px] md:text-[17px] leading-[1.6] font-body">
              To democratize architecture and interior within the design and build
              space for people worldwide.
            </p>
          </div>

          {/* Mission Card */}
          <div
            className="
              flex-1
              max-w-147
              min-h-70.75
              bg-[#0B0B2A]
              rounded-[15px]
              p-10 md:p-14 lg:p-20
              transition-all duration-300 ease-out
              hover:-translate-y-3
              hover:shadow-[0_20px_40px_rgba(11,11,42,0.3)]
            "
          >
            <h3 className="text-white text-[16px] md:text-[32px] leading-[1.1] font-extrabold font-heading mb-6">
              Our Mission
            </h3>

            <p className="text-white/89 font-normal text-[16px] md:text-[17px] leading-[1.6] font-body">
              To mobilize and enable highly creative individuals to design and
              build impactful solutions for businesses and residences worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
