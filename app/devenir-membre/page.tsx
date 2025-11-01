import Hero from "@/components/devenir-membre/Hero";
import Line from "@/components/Line";
import PourquoiAdherer from "@/components/devenir-membre/PourquoiAdherer";
import Gouvernance from "@/components/devenir-membre/Gouvernance";
import FaireUnDon from "@/components/devenir-membre/FaireUnDon";

export default function DevenirMembre() {
  return (
    <div className="bg-white">
      <Hero />
      <Line />
      <PourquoiAdherer />
      <Line />
      <Gouvernance />
      <Line />
      <FaireUnDon />
    </div>
  );
}
