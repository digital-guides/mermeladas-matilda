import { useParams, useNavigate } from "react-router-dom";
import { recipes, categories } from "@/data/recipes";
import { ArrowLeft, Home, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

const RecipePage = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find((r) => r.id === recipeId);
  const category = recipe ? categories.find((c) => c.id === recipe.category) : null;

  if (!recipe || !category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-muted-foreground mb-4">Receta no encontrada</p>
          <Button onClick={() => navigate("/")}>Volver al inicio</Button>
        </div>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const hasContent = recipe.ingredients.length > 0 || recipe.instructions.length > 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header - oculto al imprimir */}
      <header className="bg-card border-b border-border py-4 px-4 print:hidden sticky top-0 z-30 backdrop-blur-sm bg-card/95">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button
              onClick={() => navigate(`/categoria/${recipe.category}`)}
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <Home className="h-5 w-5" />
            </Button>
          </div>
          <Button
            onClick={handlePrint}
            className="rounded-full gap-2"
          >
            <Printer className="h-5 w-5" />
            Imprimir receta
          </Button>
        </div>
      </header>

      {/* Contenido de la receta */}
      <main className="max-w-4xl mx-auto px-4 py-8 print:py-4">
        {/* Título y categoría */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-5xl">{category.icon}</span>
            <span className="text-sm font-medium text-primary bg-secondary px-4 py-1 rounded-full">
              {category.title}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {recipe.title}
          </h1>
        </div>

        {hasContent ? (
          <>
            {/* Ingredientes */}
            {recipe.ingredients.length > 0 && (
              <div className="bg-card border border-border rounded-3xl p-6 md:p-8 mb-6 print:border-2">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  🥄 Ingredientes
                </h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span className="text-base leading-relaxed">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Instrucciones */}
            {recipe.instructions.length > 0 && (
              <div className="bg-card border border-border rounded-3xl p-6 md:p-8 mb-6 print:border-2">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  👨‍🍳 Preparación
                </h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <span className="text-base text-foreground leading-relaxed pt-1">
                        {instruction}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Tips/Consejos */}
            {recipe.tips && (
              <div className="bg-secondary/30 border border-primary/20 rounded-3xl p-6 md:p-8 mb-6 print:border-2">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  💡 Tips y Consejos
                </h2>
                <p className="text-base text-foreground leading-relaxed">
                  {recipe.tips}
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="bg-muted/50 border border-border rounded-3xl p-8 text-center">
            <p className="text-lg text-muted-foreground">
              Esta receta será agregada pronto. Vuelve más tarde para ver los ingredientes y la preparación completa.
            </p>
          </div>
        )}

        {/* Botones de navegación - ocultos al imprimir */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 print:hidden">
          <Button
            onClick={() => navigate(`/categoria/${recipe.category}`)}
            variant="outline"
            size="lg"
            className="rounded-full gap-2 flex-1"
          >
            <ArrowLeft className="h-5 w-5" />
            Volver al bloque
          </Button>
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            size="lg"
            className="rounded-full gap-2 flex-1"
          >
            <Home className="h-5 w-5" />
            Inicio
          </Button>
        </div>
      </main>

      {/* Estilos de impresión */}
      <style>{`
        @media print {
          body {
            background: white !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:border-2 {
            border-width: 2px !important;
          }
          .print\\:py-4 {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default RecipePage;
