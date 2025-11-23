export interface Recipe {
  id: string;
  title: string;
  category: string;
  ingredients: string[];
  instructions: string[];
  tips?: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: "clasicas",
    title: "Mermeladas clásicas y caseras",
    description: "Sabores tradicionales en versiones naturales, dulces y sin azúcar refinada",
    icon: "🍓"
  },
  {
    id: "tropicales",
    title: "Compotas ligeras y de frutas tropicales",
    description: "Texturas suaves, sabores exóticos y endulzantes naturales",
    icon: "🥭"
  },
  {
    id: "funcionales",
    title: "Mermeladas funcionales y sin fructosa",
    description: "Diseñadas para quienes buscan controlar su glucemia o reducir azúcares simples",
    icon: "🫐"
  },
  {
    id: "gourmet",
    title: "Untables y conservas gourmet",
    description: "Para acompañar quesos, panes o postres. Sabores intensos y sofisticados",
    icon: "🍯"
  }
];

// Recetas iniciales con títulos - contenido completo será agregado después
export const recipes: Recipe[] = [
  // BLOQUE 1 – Mermeladas clásicas y caseras
  { id: "clasicas-1", title: "Mermelada de fresa sin azúcar", category: "clasicas", ingredients: [], instructions: [], tips: "" },
  { id: "clasicas-2", title: "Mermelada de durazno natural", category: "clasicas", ingredients: [], instructions: [], tips: "" },
  { id: "clasicas-3", title: "Mermelada de frambuesa y vainilla", category: "clasicas", ingredients: [], instructions: [], tips: "" },
  { id: "clasicas-4", title: "Mermelada de manzana y canela", category: "clasicas", ingredients: [], instructions: [], tips: "" },
  { id: "clasicas-5", title: "Mermelada de mora con limón", category: "clasicas", ingredients: [], instructions: [], tips: "" },
  { id: "clasicas-6", title: "Mermelada de higo y miel", category: "clasicas", ingredients: [], instructions: [], tips: "" },
  { id: "clasicas-7", title: "Mermelada de piña y jengibre", category: "clasicas", ingredients: [], instructions: [], tips: "" },
  { id: "clasicas-8", title: "Mermelada de frutos rojos mixtos", category: "clasicas", ingredients: [], instructions: [], tips: "" },
  { id: "clasicas-9", title: "Mermelada de pera y anís", category: "clasicas", ingredients: [], instructions: [], tips: "" },
  { id: "clasicas-10", title: "Mermelada de cereza con toque cítrico", category: "clasicas", ingredients: [], instructions: [], tips: "" },

  // BLOQUE 2 – Compotas ligeras y de frutas tropicales
  { id: "tropicales-1", title: "Compota de mango y maracuyá", category: "tropicales", ingredients: [], instructions: [], tips: "" },
  { id: "tropicales-2", title: "Compota de guayaba sin azúcar", category: "tropicales", ingredients: [], instructions: [], tips: "" },
  { id: "tropicales-3", title: "Compota de papaya con limón", category: "tropicales", ingredients: [], instructions: [], tips: "" },
  { id: "tropicales-4", title: "Compota de piña y coco", category: "tropicales", ingredients: [], instructions: [], tips: "" },
  { id: "tropicales-5", title: "Compota de plátano y cacao", category: "tropicales", ingredients: [], instructions: [], tips: "" },
  { id: "tropicales-6", title: "Compota de kiwi y manzana verde", category: "tropicales", ingredients: [], instructions: [], tips: "" },
  { id: "tropicales-7", title: "Compota de melón y jengibre", category: "tropicales", ingredients: [], instructions: [], tips: "" },
  { id: "tropicales-8", title: "Compota de frutos amarillos (durazno + mango + piña)", category: "tropicales", ingredients: [], instructions: [], tips: "" },
  { id: "tropicales-9", title: "Compota de ciruelas con canela", category: "tropicales", ingredients: [], instructions: [], tips: "" },
  { id: "tropicales-10", title: "Compota tropical \"energizante\" con chía", category: "tropicales", ingredients: [], instructions: [], tips: "" },

  // BLOQUE 3 – Mermeladas funcionales y sin fructosa
  { id: "funcionales-1", title: "Mermelada de fresa con stevia", category: "funcionales", ingredients: [], instructions: [], tips: "" },
  { id: "funcionales-2", title: "Mermelada de moras con eritritol", category: "funcionales", ingredients: [], instructions: [], tips: "" },
  { id: "funcionales-3", title: "Mermelada de frambuesa y chía (sin cocción)", category: "funcionales", ingredients: [], instructions: [], tips: "" },
  { id: "funcionales-4", title: "Mermelada de arándanos con limón", category: "funcionales", ingredients: [], instructions: [], tips: "" },
  { id: "funcionales-5", title: "Mermelada de calabaza y naranja (sin fruta ácida)", category: "funcionales", ingredients: [], instructions: [], tips: "" },
  { id: "funcionales-6", title: "Mermelada de manzana y jengibre", category: "funcionales", ingredients: [], instructions: [], tips: "" },
  { id: "funcionales-7", title: "Mermelada de ciruelas con linaza", category: "funcionales", ingredients: [], instructions: [], tips: "" },
  { id: "funcionales-8", title: "Mermelada de pera y canela con xilitol", category: "funcionales", ingredients: [], instructions: [], tips: "" },
  { id: "funcionales-9", title: "Mermelada de frutilla \"keto\" (baja en carbohidratos)", category: "funcionales", ingredients: [], instructions: [], tips: "" },
  { id: "funcionales-10", title: "Mermelada mixta antioxidante (arándanos + uva + moras)", category: "funcionales", ingredients: [], instructions: [], tips: "" },

  // BLOQUE 4 – Untables y conservas gourmet
  { id: "gourmet-1", title: "Chutney de mango y jengibre", category: "gourmet", ingredients: [], instructions: [], tips: "" },
  { id: "gourmet-2", title: "Mermelada de cebolla caramelizada sin azúcar", category: "gourmet", ingredients: [], instructions: [], tips: "" },
  { id: "gourmet-3", title: "Mermelada de tomate especiada", category: "gourmet", ingredients: [], instructions: [], tips: "" },
  { id: "gourmet-4", title: "Mermelada de zanahoria y naranja", category: "gourmet", ingredients: [], instructions: [], tips: "" },
  { id: "gourmet-5", title: "Mermelada de pimiento rojo y vinagre balsámico", category: "gourmet", ingredients: [], instructions: [], tips: "" },
  { id: "gourmet-6", title: "Mermelada de higos y vino tinto", category: "gourmet", ingredients: [], instructions: [], tips: "" },
  { id: "gourmet-7", title: "Mermelada de frutos del bosque y cacao", category: "gourmet", ingredients: [], instructions: [], tips: "" },
  { id: "gourmet-8", title: "Mermelada de limón con miel (tipo lemon curd sin mantequilla)", category: "gourmet", ingredients: [], instructions: [], tips: "" },
  { id: "gourmet-9", title: "Chutney de piña y curry suave", category: "gourmet", ingredients: [], instructions: [], tips: "" },
  { id: "gourmet-10", title: "Untable de manzana asada y canela (tipo \"apple butter\")", category: "gourmet", ingredients: [], instructions: [], tips: "" }
];
