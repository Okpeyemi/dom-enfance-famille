import Hero from "@/components/Hero";
import Line from "@/components/Line";
import Mission from "@/components/Mission";
import ActionsPhares from "@/components/ActionsPhares";
import Partenaires from "@/components/Partenaires";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Line />
      <Mission />
      <Line />
      <ActionsPhares />
      <Line />
      <Partenaires />
    </div>
  );
}
