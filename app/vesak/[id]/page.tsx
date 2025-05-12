import { Metadata } from "next";

interface CardData {
  [key: string]: {
    title: string;
    description: string;
    image: string;
  };
}

const cardData: CardData = {
  card123: {
    title: "සුභ වෙසක්!",
    description: "ඔබට සහ ඔබගේ පවුලට සාමය පිරුණු වෙසක් උත්සවයක් වේවා!",
    image: "https://yourdomain.com/images/card123.jpg",
  },
  card456: {
    title: "Happy Vesak!",
    description: "Wishing you a peaceful and joyful Vesak.",
    image: "https://yourdomain.com/images/card456.jpg",
  },
};

// 👇 Correctly typed params object
type PageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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

export default function VesakCardPage({ params }: PageProps) {
  const card = cardData[params.id];

  if (!card) {
    return <div className="p-8 text-center">Card not found.</div>;
  }

  return (
    <main className="p-8 text-center">
      <h1 className="text-4xl mb-4">{card.title}</h1>
      <p className="mb-6">{card.description}</p>
      <img src={card.image} alt="Vesak Card" className="mx-auto rounded-lg shadow" />
    </main>
  );
}
