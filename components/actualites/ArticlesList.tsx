import Image from "next/image";
import Link from "next/link";

interface Article {
  id: number;
  image: string;
  titre: string;
  lien: string;
}

interface ArticlesListProps {
  articles: Article[];
  className?: string;
}

export default function ArticlesList({ articles, className = "" }: ArticlesListProps) {
  return (
    <section className={`w-full bg-white py-16 ${className}`}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Liste des articles */}
        <div className="space-y-12">
          {articles.map((article) => (
            <div
              key={article.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* Image à gauche */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src={article.image}
                  alt={article.titre}
                  fill
                  className="object-cover rounded-[50%]"
                />
              </div>

              {/* Texte à droite */}
              <div className="flex flex-col gap-4">
                <h4 className="text-2xl md:text-4xl font-normal text-black leading-tight">
                  {article.titre}
                </h4>
                <Link
                  href={article.lien}
                  className="text-[#1E88E5] text-lg font-medium hover:underline inline-flex items-center gap-2"
                >
                  Voir plus →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
