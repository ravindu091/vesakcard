// app/vesak/[id]/generateMetadata.ts
import { Metadata } from "next";

const cardData: Record<string, { title: string; description: string; image: string }> = {
    card123: {
      title: "සුභ වෙසක්!",
      description: "ඔබට සහ ඔබගේ පවුලට සාමය පිරුණු වෙසක් උත්සවයක් වේවා!",
      image: "https://vesakcard-five.vercel.app/card/img1.png",
    },
    card456: {
      title: "Happy Vesak!",
      description: "Wishing you a peaceful and joyful Vesak.",
      image: "https://vesakcard-five.vercel.app/card/img1.png",
    },
  };
  

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const card = cardData[params.id];

  if (!card) {
    return {
      title: "Vesak Card",
      description: "Celebrate Vesak with a custom greeting.",
    };
  }

  return {
    title: card.title,
    description: card.description,
    openGraph: {
      title: card.title,
      description: card.description,
      images: [card.image],
      url: `https://yourdomain.com/vesak/${params.id}`,
      type: "website",
    },
  };
}
