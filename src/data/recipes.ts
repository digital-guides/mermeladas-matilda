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
  image: string;
}

export const categories: Category[] = [
  {
    id: "clasicas",
    title: "Mermeladas clásicas y caseras",
    description: "Sabores tradicionales en versiones naturales, dulces y sin azúcar refinada",
    icon: "🍓",
    image: "/src/assets/bloque-clasicas.jpg"
  },
  {
    id: "tropicales",
    title: "Compotas ligeras y de frutas tropicales",
    description: "Texturas suaves, sabores exóticos y endulzantes naturales",
    icon: "🥭",
    image: "/src/assets/bloque-tropicales.jpg"
  },
  {
    id: "funcionales",
    title: "Mermeladas funcionales y sin fructosa",
    description: "Diseñadas para quienes buscan controlar su glucemia o reducir azúcares simples",
    icon: "🫐",
    image: "/src/assets/bloque-funcionales.jpg"
  },
  {
    id: "gourmet",
    title: "Untables y conservas gourmet",
    description: "Para acompañar quesos, panes o postres. Sabores intensos y sofisticados",
    icon: "🍯",
    image: "/src/assets/bloque-gourmet.jpg"
  }
];

export const recipes: Recipe[] = [
  // BLOQUE 1 – Mermeladas clásicas y caseras
  {
    id: "clasicas-1",
    title: "Mermelada de fresa sin azúcar",
    category: "clasicas",
    ingredients: [
      "Fresas frescas: 500 g",
      "Jugo de limón: 2 cucharadas",
      "Eritritol o stevia: 2–3 cucharadas (ajustar al gusto)",
      "Semillas de chía: 1 cucharada (opcional para espesar)"
    ],
    instructions: [
      "Lava y corta las fresas en trozos pequeños para que liberen más jugo.",
      "Colócalas en una olla con el jugo de limón.",
      "Cocina a fuego medio 12–15 minutos, removiendo para evitar que se peguen.",
      "Cuando las fresas estén blandas y comiencen a deshacerse, agrega el endulzante.",
      "Cocina 8–10 minutos más hasta que reduzca y tome textura espesa.",
      "Si deseas una consistencia más firme y sin azúcar añadida, mezcla las semillas de chía y deja reposar 10 minutos.",
      "Enfría y guarda en frascos esterilizados."
    ],
    tips: "Si quieres mermelada extra suave, licúa 3 segundos antes de enfriar (no más, o quedará muy líquida)."
  },
  {
    id: "clasicas-2",
    title: "Mermelada de durazno natural",
    category: "clasicas",
    ingredients: [
      "Duraznos maduros pelados y picados: 600 g",
      "Jugo de limón: 1 cucharada",
      "Miel o eritritol: 3 cucharadas",
      "Agua: 50 ml"
    ],
    instructions: [
      "Coloca los duraznos en una olla con el agua y el jugo de limón.",
      "Cocina a fuego medio 15–20 minutos hasta que los trozos estén muy blandos.",
      "Añade el endulzante y continúa cocinando 10 minutos más.",
      "Tritura ligeramente si deseas una textura más cremosa.",
      "Cuando la mezcla reduzca y se vea brillante, retira y enfría."
    ],
    tips: "Una pizca de vainilla o canela transforma esta receta en un sabor \"tipo postre\"."
  },
  {
    id: "clasicas-3",
    title: "Mermelada de frambuesa y vainilla",
    category: "clasicas",
    ingredients: [
      "Frambuesas frescas o congeladas: 400 g",
      "Jugo de limón: 1 cucharada",
      "Eritritol o azúcar de coco: 2–3 cucharadas",
      "Esencia natural de vainilla: ½ cucharadita"
    ],
    instructions: [
      "Cocina las frambuesas con el jugo de limón 10 minutos.",
      "Añade el endulzante y mezcla.",
      "Cocina 5–8 minutos más hasta que espese ligeramente.",
      "Incorpora la vainilla fuera del fuego para conservar su aroma.",
      "Guarda en frascos limpios."
    ],
    tips: "Unas gotas de agua de rosas o ralladura de naranja realzan muchísimo el sabor."
  },
  {
    id: "clasicas-4",
    title: "Mermelada de manzana y canela",
    category: "clasicas",
    ingredients: [
      "Manzanas peladas y picadas: 500 g",
      "Agua: 100 ml",
      "Jugo de limón: 1 cucharada",
      "Canela en polvo: 1 cucharadita",
      "Miel o eritritol: 3 cucharadas"
    ],
    instructions: [
      "Cocina las manzanas con el agua y limón 10–12 minutos.",
      "Cuando estén tiernas, agrega canela y endulzante.",
      "Tritura parcialmente para lograr textura de compota espesa.",
      "Cocina 5 minutos más para que tome brillo y cuerpo."
    ],
    tips: "Si la quieres muy firme, agrega ½ cucharadita de agar-agar disuelto al final y mezcla 1 minuto."
  },
  {
    id: "clasicas-5",
    title: "Mermelada de mora con limón",
    category: "clasicas",
    ingredients: [
      "Moras frescas: 500 g",
      "Jugo y ralladura de ½ limón",
      "Eritritol o miel: 3 cucharadas",
      "Agua: 50 ml"
    ],
    instructions: [
      "Cocina las moras con el agua y limón 12–15 minutos.",
      "Cuando suelten jugo y ablanden, añade el endulzante.",
      "Cocina 10 minutos más hasta obtener textura espesa.",
      "Licúa ligeramente si prefieres una textura más lisa."
    ],
    tips: "Unas hojas de menta o romero fresco al final dan un toque gourmet aromático."
  },
  {
    id: "clasicas-6",
    title: "Mermelada de higo y miel",
    category: "clasicas",
    ingredients: [
      "Higos frescos troceados: 600 g",
      "Miel natural: 2 cucharadas",
      "Jugo de limón: 1 cucharada",
      "Agua: 30 ml"
    ],
    instructions: [
      "Cocina los higos con el agua y limón 15–20 minutos.",
      "Añade la miel y remueve.",
      "Cocina a fuego bajo otros 10 minutos hasta que tome brillo y cuerpo.",
      "Guarda caliente en frascos esterilizados."
    ],
    tips: "Agrégale canela o vainilla para una versión más cálida y elegante."
  },
  {
    id: "clasicas-7",
    title: "Mermelada de piña y jengibre",
    category: "clasicas",
    ingredients: [
      "Piña fresca troceada: 500 g",
      "Jugo de limón: 1 cucharada",
      "Jengibre rallado: ½ cucharadita",
      "Eritritol o miel: 3 cucharadas"
    ],
    instructions: [
      "Cocina la piña con el limón 12–15 minutos.",
      "Añade jengibre y endulzante.",
      "Cocina 8–10 minutos más hasta espesar.",
      "Enfría y guarda."
    ],
    tips: "La ralladura de lima al final intensifica su frescura."
  },
  {
    id: "clasicas-8",
    title: "Mermelada de frutos rojos mixtos",
    category: "clasicas",
    ingredients: [
      "Fresas, moras y frambuesas: 500 g total",
      "Jugo de limón: 1 cucharada",
      "Eritritol o miel: 3 cucharadas"
    ],
    instructions: [
      "Cocina todas las frutas juntas 15–20 minutos.",
      "Agrega el endulzante y mezcla.",
      "Cocina 8 minutos más hasta espesar.",
      "Si deseas textura con trozos, separa un poco de fruta antes de licuar y reincorpórala después."
    ],
    tips: "Perfecta para rellenar tartas o usar como topping de yogur."
  },
  {
    id: "clasicas-9",
    title: "Mermelada de pera y anís",
    category: "clasicas",
    ingredients: [
      "Peras maduras peladas: 500 g",
      "Agua: 50 ml",
      "Jugo de limón: 1 cucharada",
      "Miel o stevia: al gusto",
      "Semillas de anís: ¼ cucharadita"
    ],
    instructions: [
      "Cocina las peras con el agua y limón 10–12 minutos.",
      "Añade el anís y el endulzante.",
      "Cocina 10 minutos más hasta espesar.",
      "Enfría y guarda."
    ],
    tips: "Ideal con yogur natural, bizcochuelos o pan casero tibio."
  },
  {
    id: "clasicas-10",
    title: "Mermelada de cereza con toque cítrico",
    category: "clasicas",
    ingredients: [
      "Cerezas sin carozo: 500 g",
      "Jugo y ralladura de naranja: 1 unidad",
      "Eritritol o miel: 3 cucharadas",
      "Pizca de sal marina"
    ],
    instructions: [
      "Cocina las cerezas con el jugo de naranja 15–20 minutos.",
      "Añade el endulzante, la ralladura y la sal.",
      "Cocina 10 minutos más hasta que reduzca.",
      "Enfría antes de guardar."
    ],
    tips: "Unas gotas de extracto de almendra multiplican el sabor de la cereza."
  },

  // BLOQUE 2 – Compotas ligeras y de frutas tropicales
  {
    id: "tropicales-1",
    title: "Compota de mango y maracuyá",
    category: "tropicales",
    ingredients: [
      "Pulpa de mango maduro: 300 g",
      "Pulpa de maracuyá: 100 g",
      "Miel o eritritol: 2 cucharadas",
      "Jugo de limón: 1 cucharadita"
    ],
    instructions: [
      "Coloca ambas pulpas en una olla y cocina a fuego medio 8–10 minutos. Debe comenzar a burbujear y tomar cuerpo.",
      "Añade el endulzante y el jugo de limón, mezcla bien.",
      "Cocina 5 minutos más hasta que espese ligeramente.",
      "Enfría y guarda en frascos limpios."
    ],
    tips: "Si quieres una textura súper lisa, licúa 5 segundos antes de guardar."
  },
  {
    id: "tropicales-2",
    title: "Compota de guayaba sin azúcar",
    category: "tropicales",
    ingredients: [
      "Guayabas maduras: 500 g",
      "Agua: 100 ml",
      "Jugo de limón: 1 cucharada",
      "Stevia o eritritol: 3 cucharadas"
    ],
    instructions: [
      "Cocina las guayabas con el agua 10–12 minutos hasta ablandar.",
      "Cuela para retirar semillas y obtener textura fina.",
      "Regresa la mezcla a la olla, añade endulzante y jugo de limón.",
      "Cocina 10–15 minutos más hasta espesar y tomar color rosado profundo."
    ],
    tips: "Una pizca de canela realza el aroma y combina perfecto con guayaba."
  },
  {
    id: "tropicales-3",
    title: "Compota de papaya con limón",
    category: "tropicales",
    ingredients: [
      "Papaya madura en cubos: 500 g",
      "Jugo y ralladura de limón: 1 unidad",
      "Miel o eritritol: 2 cucharadas"
    ],
    instructions: [
      "Coloca la papaya con el limón en una olla y cocina 15–18 minutos.",
      "Tritura ligeramente si deseas una textura más uniforme.",
      "Cocina 5 minutos más para que reduzca.",
      "Enfría y guarda."
    ],
    tips: "Perfecta como topping de pancakes o waffles sin gluten."
  },
  {
    id: "tropicales-4",
    title: "Compota de piña y coco",
    category: "tropicales",
    ingredients: [
      "Piña fresca picada: 400 g",
      "Leche de coco: 100 ml",
      "Miel o stevia: 2 cucharadas",
      "Jugo de limón: 1 cucharadita"
    ],
    instructions: [
      "Cocina la piña con el limón 10 minutos.",
      "Añade la leche de coco y el endulzante.",
      "Cocina 8–10 minutos hasta obtener textura cremosa.",
      "Deja enfriar antes de guardar."
    ],
    tips: "Increíble sobre yogur frío o helado natural."
  },
  {
    id: "tropicales-5",
    title: "Compota de plátano y cacao",
    category: "tropicales",
    ingredients: [
      "Plátanos maduros: 3 unidades",
      "Cacao sin azúcar: 2 cucharadas",
      "Miel o eritritol: 1 cucharada",
      "Leche vegetal: 50 ml"
    ],
    instructions: [
      "Tritura los plátanos y colócalos en una sartén junto al resto de ingredientes.",
      "Cocina a fuego bajo 8–10 minutos, mezclando siempre.",
      "Debe quedar espesa y brillante.",
      "Enfría y guarda."
    ],
    tips: "Agrega una pizca de canela o 1 cucharadita de mantequilla de maní para una versión más energética."
  },
  {
    id: "tropicales-6",
    title: "Compota de kiwi y manzana verde",
    category: "tropicales",
    ingredients: [
      "Kiwis pelados: 4 unidades",
      "Manzana verde: 1 unidad",
      "Miel o eritritol: 2 cucharadas",
      "Jugo de limón: 1 cucharadita"
    ],
    instructions: [
      "Corta las frutas y colócalas en una olla con el limón.",
      "Cocina 12–15 minutos hasta que ablanden.",
      "Añade endulzante y cocina 5 minutos más.",
      "Guarda en frascos limpios."
    ],
    tips: "Ideal para desayunos ligeros con yogur vegetal."
  },
  {
    id: "tropicales-7",
    title: "Compota de melón y jengibre",
    category: "tropicales",
    ingredients: [
      "Melón maduro: 500 g",
      "Jengibre rallado: ½ cucharadita",
      "Miel o stevia: 1–2 cucharadas",
      "Jugo de limón: 1 cucharadita"
    ],
    instructions: [
      "Cocina el melón con el jengibre y limón 10–12 minutos.",
      "Añade el endulzante y mezcla.",
      "Cocina 5 minutos más y enfría."
    ],
    tips: "Queda espectacular sobre bizcochuelos o helados fríos."
  },
  {
    id: "tropicales-8",
    title: "Compota de frutos amarillos",
    category: "tropicales",
    ingredients: [
      "Durazno, mango y piña: 150 g de cada uno",
      "Jugo de limón: 1 cucharada",
      "Miel o eritritol: 3 cucharadas"
    ],
    instructions: [
      "Cocina todas las frutas con el limón 15–20 minutos.",
      "Cuando estén muy tiernas, agrega el endulzante.",
      "Cocina 5 minutos más hasta espesar.",
      "Enfría y guarda."
    ],
    tips: "Es deliciosa con yogur helado o como relleno de tartas frescas."
  },
  {
    id: "tropicales-9",
    title: "Compota de ciruelas con canela",
    category: "tropicales",
    ingredients: [
      "Ciruelas deshuesadas: 500 g",
      "Agua: 100 ml",
      "Canela: ½ cucharadita",
      "Eritritol o miel: 3 cucharadas"
    ],
    instructions: [
      "Cocina las ciruelas con el agua y la canela 12–15 minutos.",
      "Añade el endulzante.",
      "Cocina 8 minutos más hasta que espese y tome color intenso.",
      "Deja enfriar."
    ],
    tips: "Ideal para acompañar panes integrales o postres con avena."
  },
  {
    id: "tropicales-10",
    title: "Compota tropical \"energizante\" con chía",
    category: "tropicales",
    ingredients: [
      "Pulpa de mango: 200 g",
      "Piña: 100 g",
      "Maracuyá: 50 g",
      "Semillas de chía: 1 cucharada",
      "Miel o eritritol: 2 cucharadas"
    ],
    instructions: [
      "Cocina las frutas 10–12 minutos hasta que ablanden.",
      "Añade el endulzante y mezcla.",
      "Incorpora la chía, mezcla y deja reposar 10 minutos para espesar.",
      "Guarda una vez fría."
    ],
    tips: "Perfecta para desayunos, sobre tostadas o bowls de avena fría."
  },

  // BLOQUE 3 – Mermeladas funcionales y sin fructosa
  {
    id: "funcionales-1",
    title: "Mermelada de fresa con Stevia",
    category: "funcionales",
    ingredients: [
      "Fresas frescas: 400 g",
      "Agua: 50 ml",
      "Jugo de limón: 1 cucharada",
      "Stevia líquida o en polvo: al gusto",
      "Semillas de chía: 1 cucharada"
    ],
    instructions: [
      "Cocina las fresas con el agua y el limón por 15 minutos.",
      "Añade la stevia y mezcla bien.",
      "Incorpora las semillas de chía y deja reposar hasta espesar."
    ],
    tips: "Guarda en frascos pequeños y conserva refrigerada hasta por 10 días."
  },
  {
    id: "funcionales-2",
    title: "Mermelada de moras con eritritol",
    category: "funcionales",
    ingredients: [
      "Moras: 500 g",
      "Jugo de limón: 1 cucharada",
      "Eritritol: 3 cucharadas",
      "Agua: 50 ml"
    ],
    instructions: [
      "Cocina las moras con el agua y el limón por 20 minutos.",
      "Añade el eritritol y cocina 10 minutos más hasta lograr textura deseada.",
      "Enfría y guarda."
    ],
    tips: "Si prefieres más cuerpo, agrega ½ cucharadita de agar-agar disuelto en 2 cucharadas de agua caliente."
  },
  {
    id: "funcionales-3",
    title: "Mermelada de frambuesa y chía (sin cocción)",
    category: "funcionales",
    ingredients: [
      "Frambuesas frescas: 250 g",
      "Semillas de chía: 2 cucharadas",
      "Jugo de limón: 1 cucharadita",
      "Stevia o eritritol: al gusto"
    ],
    instructions: [
      "Tritura las frambuesas con el limón.",
      "Añade el endulzante y la chía.",
      "Mezcla y deja reposar 30 minutos hasta espesar."
    ],
    tips: "Ideal para conservar nutrientes; guárdala refrigerada y consúmela dentro de 5 días."
  },
  {
    id: "funcionales-4",
    title: "Mermelada de arándanos con limón",
    category: "funcionales",
    ingredients: [
      "Arándanos frescos o congelados: 400 g",
      "Jugo y ralladura de limón: 1 unidad",
      "Eritritol: 3 cucharadas",
      "Agua: 50 ml"
    ],
    instructions: [
      "Cocina todos los ingredientes a fuego medio 15–20 minutos.",
      "Tritura ligeramente y deja reducir hasta espesar."
    ],
    tips: "Puedes añadir una pizca de canela o jengibre para potenciar el sabor."
  },
  {
    id: "funcionales-5",
    title: "Mermelada de calabaza y naranja",
    category: "funcionales",
    ingredients: [
      "Puré de calabaza cocida: 300 g",
      "Jugo y ralladura de naranja: 1 unidad",
      "Eritritol o miel: 2 cucharadas",
      "Canela: ½ cucharadita"
    ],
    instructions: [
      "Mezcla todos los ingredientes en una olla.",
      "Cocina a fuego medio 15 minutos removiendo.",
      "Deja enfriar y guarda en frascos."
    ],
    tips: "Aromática, de textura cremosa y sin frutas ácidas fuertes."
  },
  {
    id: "funcionales-6",
    title: "Mermelada de manzana y jengibre",
    category: "funcionales",
    ingredients: [
      "Manzanas peladas y picadas: 400 g",
      "Agua: 100 ml",
      "Jengibre fresco rallado: ½ cucharadita",
      "Eritritol: 2 cucharadas",
      "Jugo de limón: 1 cucharadita"
    ],
    instructions: [
      "Cocina las manzanas con el agua y el jengibre hasta ablandar.",
      "Añade el endulzante y el limón.",
      "Cocina hasta obtener textura espesa."
    ],
    tips: "Ideal para acompañar pan de avena o galletas integrales."
  },
  {
    id: "funcionales-7",
    title: "Mermelada de ciruelas con linaza",
    category: "funcionales",
    ingredients: [
      "Ciruelas deshuesadas: 400 g",
      "Agua: 100 ml",
      "Linaza molida: 1 cucharada",
      "Eritritol: 2–3 cucharadas",
      "Jugo de limón: 1 cucharada"
    ],
    instructions: [
      "Cocina las ciruelas con el agua y el limón 15 minutos.",
      "Añade la linaza y el eritritol.",
      "Cocina 10 minutos más hasta espesar."
    ],
    tips: "Fibra natural y dulzor suave."
  },
  {
    id: "funcionales-8",
    title: "Mermelada de pera y canela con xilitol",
    category: "funcionales",
    ingredients: [
      "Peras maduras: 400 g",
      "Agua: 50 ml",
      "Xilitol: 2–3 cucharadas",
      "Canela: ½ cucharadita"
    ],
    instructions: [
      "Cocina las peras con el agua y la canela 15 minutos.",
      "Añade el xilitol y mezcla.",
      "Cocina 10 minutos más y deja enfriar."
    ],
    tips: "Sírvela sobre pan de avena o tortitas de arroz."
  },
  {
    id: "funcionales-9",
    title: "Mermelada de frutilla \"keto\" (baja en carbohidratos)",
    category: "funcionales",
    ingredients: [
      "Frutillas frescas: 300 g",
      "Eritritol: 2 cucharadas",
      "Semillas de chía: 1 cucharada",
      "Jugo de limón: 1 cucharadita"
    ],
    instructions: [
      "Cocina las frutillas con el limón 10 minutos.",
      "Añade el eritritol y mezcla.",
      "Agrega la chía y deja reposar 15 minutos."
    ],
    tips: "Guarda refrigerada; se conserva perfecta por una semana."
  },
  {
    id: "funcionales-10",
    title: "Mermelada antioxidante (arándanos + uvas + moras)",
    category: "funcionales",
    ingredients: [
      "Arándanos: 150 g",
      "Uvas sin semillas: 150 g",
      "Moras: 150 g",
      "Jugo de limón: 1 cucharada",
      "Eritritol o stevia: 3 cucharadas"
    ],
    instructions: [
      "Cocina todas las frutas con el jugo de limón durante 20 minutos.",
      "Añade el endulzante y mezcla hasta espesar.",
      "Deja enfriar y guarda."
    ],
    tips: "Excelente como topping antioxidante sobre yogur o bowl de avena fría."
  },

  // BLOQUE 4 – Untables y conservas gourmet
  {
    id: "gourmet-1",
    title: "Chutney de mango y jengibre",
    category: "gourmet",
    ingredients: [
      "Mango maduro picado: 400 g",
      "Cebolla morada: ½ unidad",
      "Jengibre fresco rallado: ½ cucharadita",
      "Vinagre de manzana: 2 cucharadas",
      "Eritritol o miel: 1 cucharada",
      "Sal marina: 1 pizca"
    ],
    instructions: [
      "Sofríe la cebolla y el jengibre en una cucharadita de aceite.",
      "Añade el mango, el vinagre y el endulzante.",
      "Cocina 20 minutos a fuego bajo hasta que tome textura espesa."
    ],
    tips: "Ideal para acompañar carnes blancas, quesos vegetales o panes salados."
  },
  {
    id: "gourmet-2",
    title: "Mermelada de cebolla caramelizada sin azúcar",
    category: "gourmet",
    ingredients: [
      "Cebollas moradas en juliana: 500 g",
      "Aceite de oliva: 1 cucharada",
      "Vinagre balsámico: 1 cucharada",
      "Eritritol o miel: 1 cucharada",
      "Sal marina: 1 pizca"
    ],
    instructions: [
      "Cocina las cebollas en el aceite a fuego bajo durante 30 minutos.",
      "Añade el vinagre y el endulzante, mezcla y cocina 10 minutos más.",
      "Guarda en frascos esterilizados."
    ],
    tips: "Perfecta para sándwiches, hamburguesas o tablas de quesos."
  },
  {
    id: "gourmet-3",
    title: "Mermelada de tomate especiada",
    category: "gourmet",
    ingredients: [
      "Tomates maduros pelados: 500 g",
      "Jugo de limón: 1 cucharada",
      "Eritritol o miel: 2 cucharadas",
      "Clavo de olor molido: 1 pizca",
      "Pimienta negra: al gusto"
    ],
    instructions: [
      "Cocina los tomates con el limón hasta reducir.",
      "Agrega el endulzante y las especias.",
      "Cocina 10 minutos más y guarda."
    ],
    tips: "Va increíble con pan de masa madre, quesos suaves o carnes frías."
  },
  {
    id: "gourmet-4",
    title: "Mermelada de zanahoria y naranja",
    category: "gourmet",
    ingredients: [
      "Zanahorias ralladas finas: 300 g",
      "Jugo y ralladura de 1 naranja",
      "Miel o eritritol: 2 cucharadas",
      "Agua: 50 ml"
    ],
    instructions: [
      "Cocina todos los ingredientes a fuego medio por 20 minutos.",
      "Tritura ligeramente si prefieres textura más lisa.",
      "Guarda en frascos limpios."
    ],
    tips: "Añade jengibre rallado para una versión más especiada."
  },
  {
    id: "gourmet-5",
    title: "Mermelada de pimiento rojo y vinagre balsámico",
    category: "gourmet",
    ingredients: [
      "Pimientos rojos: 400 g",
      "Vinagre balsámico: 2 cucharadas",
      "Eritritol o miel: 2 cucharadas",
      "Aceite de oliva: 1 cucharadita",
      "Sal: al gusto"
    ],
    instructions: [
      "Asa los pimientos y pélalos.",
      "Cocina con el resto de ingredientes 20 minutos.",
      "Tritura hasta obtener consistencia deseada."
    ],
    tips: "Excelente para bruschetta, carnes o quesos."
  },
  {
    id: "gourmet-6",
    title: "Mermelada de higos y vino tinto",
    category: "gourmet",
    ingredients: [
      "Higos frescos: 400 g",
      "Vino tinto seco: 100 ml",
      "Eritritol o miel: 2 cucharadas",
      "Canela: ¼ cucharadita"
    ],
    instructions: [
      "Cocina los higos con el vino y la canela 20 minutos.",
      "Añade el endulzante y mezcla.",
      "Reduce hasta lograr consistencia espesa."
    ],
    tips: "Ideal para acompañar postres o quesos curados."
  },
  {
    id: "gourmet-7",
    title: "Mermelada de frutos del bosque y cacao",
    category: "gourmet",
    ingredients: [
      "Frutos del bosque (moras, arándanos, frambuesas): 400 g",
      "Cacao sin azúcar: 2 cucharadas",
      "Eritritol: 2 cucharadas",
      "Jugo de limón: 1 cucharadita"
    ],
    instructions: [
      "Cocina las frutas con el limón 15 minutos.",
      "Añade el cacao y el eritritol.",
      "Mezcla y cocina 10 minutos más."
    ],
    tips: "Perfecta para tartas, helados o como relleno de crepes."
  },
  {
    id: "gourmet-8",
    title: "Mermelada de limón con miel (tipo lemon curd sin mantequilla)",
    category: "gourmet",
    ingredients: [
      "Jugo y ralladura de 2 limones",
      "Huevos: 2 unidades",
      "Miel o eritritol: 2 cucharadas",
      "Aceite de coco: 1 cucharadita"
    ],
    instructions: [
      "Mezcla todos los ingredientes en olla a baño maría.",
      "Cocina 10 minutos revolviendo hasta espesar.",
      "Deja enfriar y guarda refrigerado."
    ],
    tips: "Deliciosa para rellenar tartas o untar sobre pan de vainilla."
  },
  {
    id: "gourmet-9",
    title: "Chutney de piña y curry suave",
    category: "gourmet",
    ingredients: [
      "Piña fresca picada: 400 g",
      "Cebolla: ½ unidad",
      "Vinagre de manzana: 2 cucharadas",
      "Curry suave: ½ cucharadita",
      "Eritritol o miel: 1 cucharada",
      "Sal: 1 pizca"
    ],
    instructions: [
      "Sofríe la cebolla con un poco de aceite.",
      "Agrega la piña, el vinagre, el curry y el endulzante.",
      "Cocina a fuego medio 20 minutos hasta que espese."
    ],
    tips: "Ideal para acompañar carnes blancas o tofu grillado."
  },
  {
    id: "gourmet-10",
    title: "Untable de manzana asada y canela (tipo \"apple butter\")",
    category: "gourmet",
    ingredients: [
      "Manzanas asadas: 500 g",
      "Canela: 1 cucharadita",
      "Jugo de limón: 1 cucharadita",
      "Eritritol o miel: 2 cucharadas"
    ],
    instructions: [
      "Asa las manzanas hasta que estén tiernas.",
      "Tritura con el resto de ingredientes.",
      "Cocina a fuego muy bajo 30 minutos, removiendo.",
      "Guarda caliente en frascos esterilizados."
    ],
    tips: "Perfecto para acompañar panes, galletas o postres de cuchara."
  }
];
