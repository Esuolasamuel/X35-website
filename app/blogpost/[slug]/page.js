import { notFound } from "next/navigation";
import Articles from "@/components/section/Articles";
import { blogCards } from "@/data/blogcard";
import { blogPosts } from "@/data/blogpost";
import Image from "next/image";
import Link from "next/link";
import linkedin from "@/assets/icons/link.svg";
import instagram from "@/assets/icons/instra.svg";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const card = blogCards.find((blog) => blog.slug === slug);
  if (!card) return { title: "Post Not Found" };
  return {
    title: card.title,
    description: card.excerpt,
    alternates: { canonical: `/blogpost/${slug}` },
    openGraph: {
      title: card.title,
      description: card.excerpt,
      url: `/blogpost/${slug}`,
      type: "article",
      publishedTime: card.dateISO,
      images: [
        {
          url: card.image.src,
          width: card.image.width,
          height: card.image.height,
          alt: card.title,
        },
      ],
    },
  };
}

export default async function BlogPost({ params }) {

  const moreblogs = [blogCards[4], ...blogCards.slice(2, 4)]; // last item first, rest in order

  const { slug } = await params;

  const card = blogCards.find(
    (blog) => blog.slug === slug
  );

  const post = blogPosts.find(
    (blog) => blog.slug === slug
  );

  if (!card || !post) notFound();

  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${base}/blogpost/${slug}`,
    },
    headline: card.title,
    description: card.excerpt,
    datePublished: card.dateISO,
    dateModified: card.dateISO,
    url: `${base}/blogpost/${slug}`,
    image: {
      "@type": "ImageObject",
      url: `${base}${card.image.src}`,
      width: card.image.width,
      height: card.image.height,
    },
    author: {
      "@type": "Organization",
      name: "X35 Projects",
      url: base,
    },
    publisher: {
      "@type": "Organization",
      name: "X35 Projects",
      url: base,
      logo: {
        "@type": "ImageObject",
        url: `${base}/x%2035.svg`,
      },
    },
  };

  return (
    <main className="w-full min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      {/* HERO */}

      <section className="w-full h-72 sm:h-96 md:h-120 lg:h-155 relative">
        <Image
          src={post.heroImage}
          alt={card.title}
          fill
           sizes="(max-width: 768px) 100vw, 80vw"
          className="object-cover"
        />
      </section>


      {/* ARTICLE */}

      <section className="max-w-233 mx-auto px-6 mt-8 sm:mt-10 flex flex-col gap-12">

        <div className="text-center flex flex-col items-center gap-6">

          <p className="text-[#0C0C1C]/60 font-body text-sm leading-6">
            {card.date} • {card.readTime}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-heading leading-tight lg:leading-14 font-bold">
            {card.title}
          </h1>

          <div className="flex items-center gap-4 text-xs sm:text-sm md:text-sm lg:text-sm">
            <a
              href="https://www.instagram.com/x35projects/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hover:opacity-80
                transition-opacity
                text-xs sm:text-sm md:text-sm lg:text-sm
                rounded-full
                w-10 h-10 items-center justify-center flex
                bg-[linear-gradient(45deg,#FAAD4F_14.61%,#DD2A7B_39.38%,#9537B0_58.49%,#515BD4_85.39%)]
              "
            >
              <Image
                src={instagram}
                alt="X35 Projects on Instagram"
                width={23}
                height={22}
              />
            </a>
            <a href="https://www.linkedin.com/company/x35-projects-ltd" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity rounded-full bg-[#007EBB] w-10 h-10 items-center justify-center flex">
              <Image src={linkedin} alt="X35 Projects on LinkedIn" width={23} height={22} />
            </a>
          </div>

          <p className="text-sm font-body text-[#0C0C1C]/60">
            Written by{" "}
            <Link href="/about" className="text-[#0C0C1C] font-medium hover:text-yellow-500 transition-colors">
              X35 Projects Editorial Team
            </Link>{" "}
            — Architecture &amp; Design, Lagos, Nigeria
          </p>

          <p className="max-w-200.5 font-body text-[#0C0C1C] text-[18px] leading-6.75">
            {card.excerpt}
          </p>

        </div>


        {/* CONTENT */}

        <div className="flex flex-col gap-12">

          {post.content.map((block, index) => {

            if (block.type === "image") {
              return (
                <div
                  key={index}
                  className="relative w-full h-56 sm:h-80 md:h-96 lg:h-126.5 rounded-[10px] overflow-hidden"
                >
                  <Image
                    src={block.src}
                    alt={block.alt ?? ""}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            }

            if (block.type === "paragraph") {
              return (
                <div key={index} className="max-w-200.5 mx-auto">

                  <h3 className="text-[26px] leading-7.5 font-body font-bold mb-4">
                    {block.heading}
                  </h3>

                  {block.text.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-[18px] leading-6.75 font-body text-[#0C0C1C] mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              );
            }

            if (block.type === "quote") {
              return (
                <div
                  key={index}
                  className="text-center max-w-200.5 mx-auto"
                >
                  <h2 className="text-[40px] leading-10 font-bold font-body text-[#0C0C1C]">
                    “{block.text}”
                  </h2>
                </div>
              );
            }

          })}

        </div>

      </section>
      <Articles blogs={moreblogs}/>

    </main>
  );
}