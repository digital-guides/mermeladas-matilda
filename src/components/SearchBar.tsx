import { Search, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { recipes } from "@/data/recipes";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const filteredRecipes = query.trim()
    ? recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelectRecipe = (recipeId: string) => {
    navigate(`/receta/${recipeId}`);
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar receta..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="pl-10 pr-10 h-12 rounded-full bg-card border-border text-base"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <X className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </button>
        )}
      </div>

      {isOpen && filteredRecipes.length > 0 && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-2xl shadow-lg z-50 max-h-96 overflow-y-auto">
            {filteredRecipes.map((recipe) => (
              <button
                key={recipe.id}
                onClick={() => handleSelectRecipe(recipe.id)}
                className="w-full text-left px-4 py-3 hover:bg-accent transition-colors border-b border-border last:border-0 first:rounded-t-2xl last:rounded-b-2xl"
              >
                <p className="font-medium text-foreground">{recipe.title}</p>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
