export default function CTA({title, text, paragraph, id}) {
    return (
        <section id={`${id ? id : ''}`} className="xl:p-32 lg:p-24 md:p-16 p-8 bg-[url(@/public/images/image-9.svg)] bg-[#C9C9DC] z-auto">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-5xl leading-12 font-bold pt-12 px-32 font-heading mb-14">
                    {title}
                </h2>
                {text && <button className="bg-yellow-400 px-8 py-3 rounded-full font-body font-medium">{text}</button>}
                {paragraph && <p
                className="text-[16px] lg:text-2xl leading-[1.8] text-gray-400 mb-8 last:mb-0 font-body font-normal tracking-wide"
              >
                {paragraph}
              </p>}
            </div>
        </section>
    );
}