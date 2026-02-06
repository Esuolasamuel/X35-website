export default function VisionMission() {
  return (
    <section
      className="
        w-full bg-white
        px-4 py-12
        sm:px-8 sm:py-16
        md:px-16 md:py-24
        lg:px-24 lg:py-32
        xl:px-40 xl:py-40
      "
    >
      <div
        className="
          flex flex-col md:flex-row 
          gap-6 md:gap-8
          max-w-350 mx-auto
        "
      >
        {/* Vision Card */}
        <div
          className="
            flex-1
            bg-[#0B0B2A] 
            rounded-sm md:rounded-md lg:rounded-lg
            p-10 md:p-14 lg:p-20
            /* Lift Effect Logic */
            transition-all duration-300 ease-out
            hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(11,11,42,0.3)]
            cursor-default
          "
        >
          <h3 className="text-white text-[32px] md:text-[40px] leading-[1.1] font-extrabold font-heading mb-6">
            Our Vision
          </h3>

          <p className="text-white/80 text-[16px] md:text-[18px] leading-[1.6] font-body max-w-100">
            To democratize architecture and interior within the design and build
            space for people worldwide.
          </p>
        </div>

        {/* Mission Card */}
        <div
          className="
            flex-1
            bg-[#0B0B2A] 
            rounded-3xl
            p-10 md:p-14 lg:p-20
            /* Lift Effect Logic */
            transition-all duration-300 ease-out
            hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(11,11,42,0.3)]
            cursor-default
          "
        >
          <h3 className="text-white text-[32px] md:text-[40px] leading-[1.1] font-extrabold font-heading mb-6">
            Our Mission
          </h3>

          <p className="text-white/80 text-[16px] md:text-[18px] leading-[1.6] font-body max-w-100">
            To mobilize and enable highly creative individuals to design and
            build impactful solutions for businesses and residences worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}