// app/vesak/[id]/page.tsx
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

// Simulate fetching Vesak card data by ID
const cardData: Record<string, { title: string; description: string; image: string }> = {
  card123: {
    title: "සුභ වෙසක්!",
    description: "ඔබට සහ ඔබගේ පවුලට සාමය පිරුණු වෙසක් උත්සවයක් වේවා!",
    image: "https://vesakcard-five.vercel.app/card/img1.jpg",
  },
  card456: {
    title: "Happy Vesak!",
    description: "Wishing you a peaceful and joyful Vesak.",
    image: "https://vesakcard-five.vercel.app/card/img1.jpg",
  },
};

// Dynamic OG metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const card = cardData[params.id];

  if (!card) {
    return {
      title: "Vesak Card",
      description: "Celebrate Vesak with a custom message.",
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

export default function VesakCardPage({ params }: Props) {
  const card = cardData[params.id];

  if (!card) return <p>Card not found</p>;

  return (
    <main className="p-8 text-center">
      <h1 className="text-4xl mb-4">{card.title}</h1>
      <p className="mb-6">{card.description}</p>
      <img src={card.image} alt="Vesak Card Image" className="mx-auto" />
    </main>
  );
}
