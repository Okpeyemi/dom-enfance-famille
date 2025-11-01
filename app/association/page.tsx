import Hero from "@/components/association/Hero";
import Line from "@/components/Line";
import Valeurs from "@/components/association/Valeurs";
import Avantages from "@/components/association/Avantages";
import Gouvernance from "@/components/association/Gouvernance";

export default function Association() {
  return (
    <div className="bg-white">
      <Hero />
      <Line />
      <Valeurs />
      <Line />
      <Gouvernance />
      <Line />
      <Avantages />
    </div>
  );
}
