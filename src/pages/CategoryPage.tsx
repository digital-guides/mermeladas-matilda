import { useParams, Link, useNavigate } from "react-router-dom";
import { categories, recipes } from "@/data/recipes";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = categories.find((c) => c.id === categoryId);
  const categoryRecipes = recipes.filter((r) => r.category === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-muted-foreground mb-4">Categoría no encontrada</p>
          <Button onClick={() => navigate("/")}>Volver al inicio</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header con buscador */}
      <header className="bg-card border-b border-border py-6 px-4 sticky top-0 z-30 backdrop-blur-sm bg-card/95">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3">
              <span className="text-4xl">{category.icon}</span>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-primary">
                  {category.title}
                </h1>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
            </div>
          </div>
          <SearchBar />
        </div>
      </header>

      {/* Lista de recetas */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-3">
          {categoryRecipes.map((recipe, index) => (
            <Link
              key={recipe.id}
              to={`/receta/${recipe.id}`}
              className="block"
            >
              <div className="bg-card border border-border rounded-2xl p-5 hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-primary">
                    {index + 1}
                  </div>
                  <h2 className="text-base md:text-lg font-medium text-foreground flex-1">
                    {recipe.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Botón volver al inicio */}
        <div className="mt-8 text-center">
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            size="lg"
            className="rounded-full gap-2"
          >
            <Home className="h-5 w-5" />
            Volver al inicio
          </Button>
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
