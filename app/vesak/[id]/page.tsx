// app/vesak/[id]/page.tsx
interface PageProps {
    params: {
      id: string;
    };
  }
  
  const cardData: Record<string, { title: string; description: string; image: string }> = {
    card123: {
      title: "සුභ වෙසක්!",
      description: "ඔබට සහ ඔබගේ පවුලට සාමය පිරුණු වෙසක් උත්සවයක් වේවා!",
      image: "/card/img1.png",
    },
    card456: {
      title: "Happy Vesak!",
      description: "Wishing you a peaceful and joyful Vesak.",
      image: "/card/img1.png",
    },
  };
  
  
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
  