import Hero from "@/components/actualites/Hero";
import ArticlesList from "@/components/actualites/ArticlesList";
import Line from "@/components/Line";
import ReseauxSociaux from "@/components/actualites/ReseauxSociaux";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actualités",
  description: "Suivez les actualités, événements et ateliers de Dom'Enfance & Famille. Restez informé de nos actions en Guadeloupe.",
};

export default function Actualites() {
  const articles = [
    {
      id: 1,
      image: "/actualite-1.png",
      titre: "« Atelier parentalité : gérer les écrans »",
      lien: "/actualites/atelier-parentalite-ecrans",
    },
    // Vous pouvez ajouter d'autres articles ici
  ];

  return (
    <div className="bg-white">
      <Hero />
      <ArticlesList className="-mt-80" articles={articles} />
      <Line />
      <ArticlesList articles={articles} />
      <Line />
      <ArticlesList articles={articles} />
      <Line />
      <ReseauxSociaux />
    </div>
  );
}
