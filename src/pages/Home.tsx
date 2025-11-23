import { Link } from "react-router-dom";
import { categories } from "@/data/recipes";
import { SearchBar } from "@/components/SearchBar";
import logo from "@/assets/logo.png";
import bloqueClasicas from "@/assets/bloque-clasicas.jpg";
import bloqueTropicales from "@/assets/bloque-tropicales.jpg";
import bloqueFuncionales from "@/assets/bloque-funcionales.jpg";
import bloqueGourmet from "@/assets/bloque-gourmet.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border py-6 px-4 sticky top-0 z-30 backdrop-blur-sm bg-card/95">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <img src={logo} alt="Logo" className="h-12 md:h-16 w-auto" />
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Mermeladas Sin Azúcar
            </h1>
          </div>
          <p className="text-sm md:text-base text-muted-foreground text-center mb-6">
            El arte de conservar el sabor natural de las frutas, sin culpa y con dulzura consciente
          </p>
          <SearchBar />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Grid 2x2 de categorías */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {categories.map((category) => {
            const imageMap: Record<string, string> = {
              clasicas: bloqueClasicas,
              tropicales: bloqueTropicales,
              funcionales: bloqueFuncionales,
              gourmet: bloqueGourmet
            };
            
            return (
              <Link
                key={category.id}
                to={`/categoria/${category.id}`}
                className="group"
              >
                <div className="bg-card rounded-3xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Imagen de la categoría */}
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={imageMap[category.id]} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-5xl md:text-6xl drop-shadow-lg">
                        {category.icon}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {category.title}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            40 recetas · Sin azúcar refinada · Conservas naturales
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
