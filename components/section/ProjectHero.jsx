const ProjectHero = () => {
  return (
    <section className="xl:p-24 lg:p-24 md:p-16 pt-24 pb-4 text-center">
      <h1 className="text-5xl md:text-6xl mx-auto max-w-xl font-heading font-bold leading-tight">
        The Work That{" "}
          <span className="relative inline-block"> 
            Defines
            <span
            aria-hidden="true"
            className="
              absolute -left-4 -bottom-2
                  h-24 w-56
                  bg-[url('/images/Fill-4.svg')]
                  bg-contain bg-no-repeat
                  -z-10
            "
          /></span>
          Us
      </h1>

      <p className="mt-6 max-w-sm mx-auto font-body text-neutral-500">
        A bold showcase of our projects transforming ideas into iconic spaces.
      </p>
    </section>
  );
};

export default ProjectHero;
