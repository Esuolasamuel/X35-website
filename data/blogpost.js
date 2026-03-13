import hero from "@/assets/images/blog-hero.png";
import img1 from "@/assets/images/blog-5.png";
import img2 from "@/assets/images/blog-6.png";
import img3 from "@/assets/images/blog-7.png";

export const blogPosts = [
  {
    slug: "designing-for-nobody",

    heroImage: hero,

    content: [
      {
        type: "image",
        src: img1,
      },

      {
        type: "paragraph",
        heading: "In the absence of a named patron, the brief dissolves.",
        text: ["There is no boardroom. No user workshops. No value engineering meeting trimming ambition back to budget lines. Instead, there is a site, a set of constraints, and a projection: someone will arrive here one day. Someone will live, work, gather, or rest within these walls."],
      },

      {
        type: "quote",
        text: "Because the truth is — sometimes there is no one.",
      },

      {
        type: "paragraph",
        heading: "But who?",
        text: ["Speculative architecture occupies a curious space between imagination and responsibility. Without a client, architects are released from negotiation — yet burdened with a different kind of accountability. They must anticipate needs without conversation. They must design for use without feedback. They must construct for a life that has not yet taken shape.",
       "The future inhabitant becomes an abstraction: not a person with habits and contradictions, but a composite of demographic forecasts, market assumptions, and cultural trends. A diagram of living.",]
      },

      {
        type: "image",
        src: img2,
      },

      {
        type: "paragraph",
        heading: "This abstraction can be liberating.",
        text: ["Freed from the preferences of a specific commissioner, architects can test spatial ideas more purely. Circulation can be generous. Thresholds can be ambiguous. Programs can overlap in ways that would rarely survive committee review. Speculative work often reveals a firm’s undiluted preoccupations — its formal language, its social aspirations, its stance on density, privacy, light, and community."],
      },

      {
        type: "image",
        src: img3,
      },

      {
        type: "paragraph",
        heading: "Yet the absence of a client introduces a quiet tension.",
        text: ["When no one is there to object, who defines necessity? When no single body claims ownership, how does a building avoid becoming generic — optimized for market appeal rather than lived experience?",
          "Speculative buildings often lean on neutrality: flexible floor plates, open plans, restrained material palettes. Adaptability becomes the design ethic. The assumption is that future occupants will customize the rest.", 
          "But flexibility can also flatten specificity. In trying to accommodate everyone, the architecture risks belonging to no one in particular.",
          "The three firms engaging this question approach the “invisible client” differently. One treats the future inhabitant as a civic subject, prioritizing collective spaces that anticipate shared rituals. Another focuses on environmental performance, designing as if the client were the climate itself. A third leans into narrative, crafting atmospheres that suggest possible ways of living rather than dictating them.", 
          "Across these approaches, a common thread emerges: designing without a client does not mean designing without intention. It demands a clearer articulation of values. In place of a commissioning voice, the architect’s own position becomes explicit", "Speculative architecture, then, is not merely development strategy. It is a form of projection — a built hypothesis about how life might unfold."],
      },
    ],
  },
];