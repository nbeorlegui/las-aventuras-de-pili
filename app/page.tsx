'use client';

import { useEffect, useMemo, useState } from 'react';

type Screen = 'home' | 'englishMap' | 'level';
type LevelKind = 'theory' | 'choice' | 'sequence' | 'mock' | 'builder';

type BaseLevel = {
  id: number;
  title: string;
  subtitle: string;
  world: string;
  icon: string;
  kind: LevelKind;
};

type ChoiceStep = {
  type: 'choice';
  prompt: string;
  spanish?: string;
  options: string[];
  answer: string;
  hint: string;
  explain: string;
};

type TheoryStep = {
  type: 'theory';
  title: string;
  blocks: { en: string; es: string; example?: string }[];
};

type SequenceStep = {
  type: 'sequence';
  prompt: string;
  spanish?: string;
  options: string[];
  answer: string[];
  hint: string;
  explain: string;
};

type MockStep = {
  type: 'mock';
  textTitle: string;
  text: string[];
  questions: ChoiceStep[];
};

type BuilderStep = {
  type: 'builder';
  prompt: string;
  ingredients: string[];
  instructions: string[];
  wrongItems: string[];
  hint: string;
};

type Step = ChoiceStep | TheoryStep | SequenceStep | MockStep | BuilderStep;

type Level = BaseLevel & { steps: Step[] };

type Progress = {
  lives: number;
  coins: number;
  stars: number;
  gems: number;
  englishUnlocked: number;
  englishStars: Record<number, number>;
};

const defaultProgress: Progress = {
  lives: 5,
  coins: 0,
  stars: 0,
  gems: 0,
  englishUnlocked: 1,
  englishStars: {},
};

const levels: Level[] = [
  {
    id: 1,
    title: 'Food Vocabulary',
    subtitle: 'Comidas pp.87-89',
    world: 'Food Island',
    icon: '🍎',
    kind: 'choice',
    steps: [
      { type: 'theory', title: 'Food = Comida', blocks: [
        { en: 'Fruit', es: 'Fruta', example: 'apple, banana, orange, kiwi, strawberry, cherry' },
        { en: 'Food for recipes', es: 'Comida para recetas', example: 'bread, ham, cheese, lettuce, tomato' },
        { en: 'Baking food', es: 'Ingredientes para hornear', example: 'eggs, flour, milk, sugar, butter' },
        { en: 'Drinks', es: 'Bebidas', example: 'water, milk, lemonade, milkshake' },
      ] },
      { type: 'choice', prompt: 'apple', spanish: '¿Qué significa?', options: ['manzana', 'lechuga', 'harina'], answer: 'manzana', hint: 'Es una fruta roja o verde.', explain: 'Apple = manzana.' },
      { type: 'choice', prompt: 'flour', spanish: '¿Qué significa?', options: ['harina', 'banana', 'vaso'], answer: 'harina', hint: 'Se usa para hacer muffins o tortas.', explain: 'Flour = harina.' },
      { type: 'choice', prompt: 'lettuce', spanish: '¿Qué significa?', options: ['lechuga', 'queso', 'huevo'], answer: 'lechuga', hint: 'Es verde y puede ir en un sandwich.', explain: 'Lettuce = lechuga.' },
    ],
  },
  {
    id: 2,
    title: 'Recipe Parts',
    subtitle: 'Title · Ingredients · Instructions',
    world: 'Recipe Forest',
    icon: '📖',
    kind: 'theory',
    steps: [
      { type: 'theory', title: '¿Cómo se compone una receta?', blocks: [
        { en: 'Recipe', es: 'Receta completa', example: 'Fruit Salad, Vanilla Milkshake, Healthy Sandwich' },
        { en: 'Title', es: 'Título / nombre de la receta', example: 'Vanilla Milkshake' },
        { en: 'Ingredients', es: 'Ingredientes: cosas que necesito', example: 'milk, apple, sugar, eggs, flour' },
        { en: 'Instructions', es: 'Instrucciones: pasos con acciones', example: 'Wash, Peel, Mix, Pour, Serve' },
      ] },
      { type: 'choice', prompt: 'Fruit Salad', spanish: '¿Qué parte de la receta es?', options: ['Title', 'Ingredients', 'Instructions'], answer: 'Title', hint: 'Es el nombre de la receta.', explain: 'Fruit Salad es el título.' },
      { type: 'choice', prompt: 'Apple, banana, milk', spanish: 'manzana, banana, leche', options: ['Title', 'Ingredients', 'Instructions'], answer: 'Ingredients', hint: 'Son cosas que necesito para preparar.', explain: 'Van en Ingredients porque son alimentos/cosas.' },
      { type: 'choice', prompt: 'Wash the fruit.', spanish: 'Lavar la fruta.', options: ['Title', 'Ingredients', 'Instructions'], answer: 'Instructions', hint: 'Empieza con un verbo: Wash.', explain: 'Es una Instruction porque indica un paso.' },
    ],
  },
  {
    id: 3,
    title: 'Ingredients Detective',
    subtitle: 'Cosas, no acciones',
    world: 'Recipe Forest',
    icon: '🍓',
    kind: 'choice',
    steps: [
      { type: 'choice', prompt: '2 scoops of vanilla ice cream', spanish: '2 bochas de helado de vainilla', options: ['Ingredient', 'Instruction'], answer: 'Ingredient', hint: 'Es algo que necesito.', explain: 'Es Ingredient porque es una cosa/comida.' },
      { type: 'choice', prompt: 'strawberries', spanish: 'frutillas', options: ['Ingredient', 'Instruction'], answer: 'Ingredient', hint: '¿Es una comida o una acción?', explain: 'Strawberries son ingredientes.' },
      { type: 'choice', prompt: 'Pour the milk.', spanish: 'Verter la leche.', options: ['Ingredient', 'Instruction'], answer: 'Instruction', hint: 'Pour es una acción.', explain: 'Es Instruction porque indica qué hacer.' },
      { type: 'choice', prompt: 'Chop the banana.', spanish: 'Cortar la banana.', options: ['Ingredient', 'Instruction'], answer: 'Instruction', hint: 'Chop es un verbo.', explain: 'Es una instrucción porque empieza con una acción.' },
    ],
  },
  {
    id: 4,
    title: 'Cooking Verbs',
    subtitle: 'Verbos de cocina pp.94-95',
    world: 'Cooking Castle',
    icon: '👩‍🍳',
    kind: 'choice',
    steps: [
      { type: 'theory', title: 'Cooking verbs = acciones de cocina', blocks: [
        { en: 'Wash · Peel · Chop · Slice', es: 'Lavar · Pelar · Cortar · Cortar en rodajas' },
        { en: 'Add · Mix · Stir · Pour', es: 'Agregar · Mezclar · Revolver · Verter' },
        { en: 'Crack · Bake · Squeeze · Serve', es: 'Romper · Hornear · Exprimir · Servir' },
        { en: 'Rule', es: 'Las instrucciones suelen empezar con un cooking verb.', example: 'Mix everything. / Pour the milk.' },
      ] },
      { type: 'choice', prompt: 'Peel', spanish: 'Elegí el significado', options: ['Pelar', 'Mezclar', 'Servir'], answer: 'Pelar', hint: 'Lo hacemos con la cáscara.', explain: 'Peel = pelar.' },
      { type: 'choice', prompt: 'Pour', spanish: 'Elegí el significado', options: ['Verter', 'Cortar', 'Pelar'], answer: 'Verter', hint: 'Como poner leche en un vaso.', explain: 'Pour = verter.' },
      { type: 'choice', prompt: 'Crack the eggs', spanish: '¿Qué significa?', options: ['Romper los huevos', 'Lavar los huevos', 'Servir los huevos'], answer: 'Romper los huevos', hint: 'Crack = romper.', explain: 'Crack the eggs = romper los huevos.' },
      { type: 'choice', prompt: 'Squeeze the lemon', spanish: '¿Qué significa?', options: ['Exprimir el limón', 'Hornear el limón', 'Cortar en rodajas'], answer: 'Exprimir el limón', hint: 'Se hace para sacar jugo.', explain: 'Squeeze = exprimir.' },
    ],
  },
  {
    id: 5,
    title: 'Kitchen Equipment',
    subtitle: 'Utensilios p.94',
    world: 'Cooking Castle',
    icon: '🥄',
    kind: 'choice',
    steps: [
      { type: 'theory', title: 'Kitchen equipment = utensilios de cocina', blocks: [
        { en: 'fridge', es: 'heladera' },
        { en: 'cup · glass', es: 'taza · vaso' },
        { en: 'spoon · plate · bowl', es: 'cuchara · plato · bowl/recipiente' },
        { en: 'blender', es: 'licuadora', example: 'We use a blender for a milkshake.' },
      ] },
      { type: 'choice', prompt: 'blender', spanish: '¿Qué es?', options: ['Licuadora', 'Heladera', 'Plato'], answer: 'Licuadora', hint: 'Sirve para preparar milkshake.', explain: 'Blender = licuadora.' },
      { type: 'choice', prompt: 'spoon', spanish: '¿Qué es?', options: ['Cuchara', 'Vaso', 'Taza'], answer: 'Cuchara', hint: 'Se usa para revolver o comer sopa.', explain: 'Spoon = cuchara.' },
      { type: 'choice', prompt: 'fridge', spanish: '¿Qué es?', options: ['Heladera', 'Bowl', 'Vaso'], answer: 'Heladera', hint: 'Sirve para enfriar.', explain: 'Fridge = heladera.' },
      { type: 'choice', prompt: 'You serve food on a...', spanish: 'Servís comida en un...', options: ['plate', 'fridge', 'blender'], answer: 'plate', hint: 'Es un plato.', explain: 'Plate = plato.' },
    ],
  },
  {
    id: 6,
    title: 'Food Adjectives',
    subtitle: 'Describir comida p.97',
    world: 'Food Kingdom',
    icon: '🍋',
    kind: 'choice',
    steps: [
      { type: 'theory', title: 'Adjectives describe food', blocks: [
        { en: 'fresh · healthy · unhealthy', es: 'fresco · saludable · poco saludable' },
        { en: 'bitter · sour · sweet', es: 'amargo · ácido · dulce' },
        { en: 'soft · crispy', es: 'suave/blando · crocante' },
        { en: 'light · heavy · tasty · yummy', es: 'liviano · pesado · rico · delicioso' },
      ] },
      { type: 'choice', prompt: 'lemon', spanish: '¿Cómo es?', options: ['sour', 'sweet', 'crispy'], answer: 'sour', hint: 'El limón es ácido.', explain: 'Lemon is sour.' },
      { type: 'choice', prompt: 'candy', spanish: '¿Cómo es?', options: ['sweet', 'bitter', 'heavy'], answer: 'sweet', hint: 'Los caramelos son dulces.', explain: 'Candy is sweet.' },
      { type: 'choice', prompt: 'salad', spanish: 'Puede ser...', options: ['healthy', 'unhealthy', 'bitter'], answer: 'healthy', hint: 'Una ensalada suele ser saludable.', explain: 'Salad is healthy.' },
      { type: 'choice', prompt: 'chips', spanish: 'Pueden ser...', options: ['crispy', 'sour', 'soft'], answer: 'crispy', hint: 'Hacen crunch.', explain: 'Chips are crispy.' },
    ],
  },
  {
    id: 7,
    title: 'A or AN',
    subtitle: 'p.93 booklet',
    world: 'Grammar Mountain',
    icon: '🔠',
    kind: 'choice',
    steps: [
      { type: 'theory', title: 'A / AN', blocks: [
        { en: 'A', es: 'Se usa antes de sonido consonante.', example: 'a banana, a cherry, a spoon' },
        { en: 'AN', es: 'Se usa antes de sonido vocal.', example: 'an apple, an orange, an egg' },
      ] },
      { type: 'choice', prompt: '___ apple', spanish: 'Completá', options: ['a', 'an'], answer: 'an', hint: 'Apple empieza con vocal.', explain: 'Se escribe an apple.' },
      { type: 'choice', prompt: '___ banana', spanish: 'Completá', options: ['a', 'an'], answer: 'a', hint: 'Banana empieza con consonante.', explain: 'Se escribe a banana.' },
      { type: 'choice', prompt: '___ orange', spanish: 'Completá', options: ['a', 'an'], answer: 'an', hint: 'Orange empieza con vocal.', explain: 'Se escribe an orange.' },
      { type: 'choice', prompt: '___ egg', spanish: 'Completá', options: ['a', 'an'], answer: 'an', hint: 'Egg empieza con vocal.', explain: 'Se escribe an egg.' },
    ],
  },
  {
    id: 8,
    title: 'Plurals',
    subtitle: 's, es/oes, ies p.92',
    world: 'Grammar Mountain',
    icon: '🍒',
    kind: 'choice',
    steps: [
      { type: 'theory', title: 'Plural Rules', blocks: [
        { en: '+ S', es: 'La mayoría suma S.', example: 'apple → apples / banana → bananas' },
        { en: '+ ES', es: 'Algunas palabras suman ES.', example: 'tomato → tomatoes / potato → potatoes' },
        { en: 'Y → IES', es: 'Si termina en consonante + Y, cambia a IES.', example: 'cherry → cherries / strawberry → strawberries' },
      ] },
      { type: 'choice', prompt: 'apple →', spanish: 'Plural correcto', options: ['apples', 'applees', 'applies'], answer: 'apples', hint: 'La mayoría suma S.', explain: 'apple → apples.' },
      { type: 'choice', prompt: 'tomato →', spanish: 'Plural correcto', options: ['tomatos', 'tomatoes', 'tomaties'], answer: 'tomatoes', hint: 'Tomato suma ES.', explain: 'tomato → tomatoes.' },
      { type: 'choice', prompt: 'cherry →', spanish: 'Plural correcto', options: ['cherrys', 'cherries', 'cherryes'], answer: 'cherries', hint: 'Consonante + y cambia a ies.', explain: 'cherry → cherries.' },
      { type: 'choice', prompt: 'strawberry →', spanish: 'Plural correcto', options: ['strawberries', 'strawberrys', 'strawberryes'], answer: 'strawberries', hint: 'Termina con consonante + Y.', explain: 'strawberry → strawberries.' },
    ],
  },
  {
    id: 9,
    title: 'Tricky Words 1',
    subtitle: 'I · the · he · she · they',
    world: 'Tricky Woods',
    icon: '🧠',
    kind: 'choice',
    steps: [
      { type: 'theory', title: 'Tricky Words', blocks: [
        { en: 'I · the · he · she · they', es: 'yo · el/la · él · ella · ellos' },
        { en: 'my · like · no · go · to', es: 'mi · gustar · no · ir · a/para' },
        { en: 'we · you · your', es: 'nosotros · vos/ustedes · tu/tus' },
      ] },
      { type: 'choice', prompt: '___ like apples.', spanish: 'Yo = ?', options: ['I', 'the', 'go'], answer: 'I', hint: 'Yo en inglés se escribe I.', explain: 'I like apples.' },
      { type: 'choice', prompt: '___ sandwich is yummy.', spanish: 'El sandwich...', options: ['The', 'He', 'No'], answer: 'The', hint: 'El/La = The.', explain: 'The sandwich is yummy.' },
      { type: 'choice', prompt: '___ is my mum.', spanish: 'Ella es mi mamá.', options: ['She', 'He', 'They'], answer: 'She', hint: 'Ella = She.', explain: 'She is my mum.' },
    ],
  },
  {
    id: 10,
    title: 'Tricky Words 2',
    subtitle: 'my · like · no · go · to · we · you · your',
    world: 'Tricky Woods',
    icon: '✨',
    kind: 'choice',
    steps: [
      { type: 'choice', prompt: 'This is ___ book.', spanish: 'Tu libro.', options: ['your', 'you', 'no'], answer: 'your', hint: 'Tu/tus = your.', explain: 'This is your book.' },
      { type: 'choice', prompt: '___ are friends.', spanish: 'Nosotros somos amigos.', options: ['We', 'Go', 'My'], answer: 'We', hint: 'Nosotros = We.', explain: 'We are friends.' },
      { type: 'choice', prompt: 'I ___ lemonade.', spanish: 'Me gusta la limonada.', options: ['like', 'to', 'your'], answer: 'like', hint: 'Me gusta = I like.', explain: 'I like lemonade.' },
      { type: 'choice', prompt: 'I go ___ school.', spanish: 'Voy a la escuela.', options: ['to', 'the', 'no'], answer: 'to', hint: 'A/para = to.', explain: 'I go to school.' },
    ],
  },
  {
    id: 11,
    title: 'Phonics 1st Form A',
    subtitle: 'S A T P I N M D G O C K CK',
    world: 'Phonics Island',
    icon: '🔊',
    kind: 'choice',
    steps: [
      { type: 'theory', title: 'Phonics sounds', blocks: [
        { en: 'S A T P I N', es: 'Sonidos iniciales para leer palabras cortas.', example: 'sat, pin, tin, tap' },
        { en: 'M D G O C K CK', es: 'Más sonidos para formar palabras.', example: 'dog, mop, cat, kick' },
      ] },
      { type: 'choice', prompt: '¿Cuál palabra empieza con S?', spanish: 'S sound', options: ['sun', 'apple', 'dog'], answer: 'sun', hint: 'Sun empieza con S.', explain: 'sun empieza con S.' },
      { type: 'choice', prompt: '¿Cuál palabra empieza con P?', spanish: 'P sound', options: ['plate', 'milk', 'egg'], answer: 'plate', hint: 'Plate empieza con P.', explain: 'plate empieza con P.' },
      { type: 'choice', prompt: '¿Cuál palabra tiene CK?', spanish: 'CK sound', options: ['duck', 'chair', 'rain'], answer: 'duck', hint: 'Duck termina con CK.', explain: 'duck tiene CK.' },
    ],
  },
  {
    id: 12,
    title: 'Phonics 1st Form B',
    subtitle: 'E U R H B F FF L LL LE SS J V W X Z Y',
    world: 'Phonics Island',
    icon: '🎧',
    kind: 'choice',
    steps: [
      { type: 'choice', prompt: '¿Cuál palabra tiene FF?', spanish: 'FF sound', options: ['muffin', 'dog', 'apple'], answer: 'muffin', hint: 'Muffin tiene FF.', explain: 'muffin tiene FF.' },
      { type: 'choice', prompt: '¿Cuál palabra termina con LL?', spanish: 'LL sound', options: ['bell', 'boat', 'rain'], answer: 'bell', hint: 'Bell termina con LL.', explain: 'bell tiene LL.' },
      { type: 'choice', prompt: '¿Cuál palabra tiene SS?', spanish: 'SS sound', options: ['glass', 'cherry', 'moon'], answer: 'glass', hint: 'Glass tiene SS.', explain: 'glass tiene SS.' },
      { type: 'choice', prompt: '¿Cuál palabra empieza con W?', spanish: 'W sound', options: ['water', 'egg', 'lemon'], answer: 'water', hint: 'Water empieza con W.', explain: 'water empieza con W.' },
    ],
  },
  {
    id: 13,
    title: 'Phonics 1st Form C',
    subtitle: 'CH · SH · TH',
    world: 'Phonics Island',
    icon: '🌈',
    kind: 'choice',
    steps: [
      { type: 'choice', prompt: '¿Cuál palabra tiene CH?', spanish: 'CH sound', options: ['cherry', 'ship', 'three'], answer: 'cherry', hint: 'CH como cherry.', explain: 'cherry tiene CH.' },
      { type: 'choice', prompt: '¿Cuál palabra tiene SH?', spanish: 'SH sound', options: ['fish', 'chair', 'thin'], answer: 'fish', hint: 'Fish termina con SH.', explain: 'fish tiene SH.' },
      { type: 'choice', prompt: '¿Cuál palabra tiene TH?', spanish: 'TH sound', options: ['three', 'spoon', 'cat'], answer: 'three', hint: 'TH como three.', explain: 'three tiene TH.' },
    ],
  },
  {
    id: 14,
    title: 'Phonics 2nd Form',
    subtitle: 'AI WH VE DGE TCH NK EE IGH OA OO UR',
    world: 'Phonics Island',
    icon: '🔡',
    kind: 'choice',
    steps: [
      { type: 'theory', title: '2nd Form sounds', blocks: [
        { en: 'AI · EE · IGH · OA · OO · UR', es: 'Sonidos largos / combinaciones.', example: 'rain, tree, night, boat, moon, turn' },
        { en: 'WH · -VE · DGE · TCH · NK', es: 'Combinaciones importantes.', example: 'whale, five, bridge, watch, pink' },
      ] },
      { type: 'choice', prompt: '¿Cuál palabra tiene AI?', spanish: 'AI sound', options: ['rain', 'tree', 'boat'], answer: 'rain', hint: 'Rain tiene AI.', explain: 'rain tiene AI.' },
      { type: 'choice', prompt: '¿Cuál palabra tiene IGH?', spanish: 'IGH sound', options: ['night', 'spoon', 'chair'], answer: 'night', hint: 'Night tiene IGH.', explain: 'night tiene IGH.' },
      { type: 'choice', prompt: '¿Cuál palabra tiene TCH?', spanish: 'TCH sound', options: ['watch', 'whale', 'tree'], answer: 'watch', hint: 'Watch termina con TCH.', explain: 'watch tiene TCH.' },
      { type: 'choice', prompt: '¿Cuál palabra tiene NK?', spanish: 'NK sound', options: ['pink', 'moon', 'boat'], answer: 'pink', hint: 'Pink termina con NK.', explain: 'pink tiene NK.' },
    ],
  },
  {
    id: 15,
    title: 'Order the Recipe',
    subtitle: 'Ordenar instrucciones',
    world: 'Recipe Harbor',
    icon: '📝',
    kind: 'sequence',
    steps: [
      { type: 'sequence', prompt: 'Ordená la receta de Fruit Salad', spanish: 'Primero se lava, luego se corta, después se mezcla y al final se sirve.', options: ['Serve the salad.', 'Wash the fruit.', 'Mix everything.', 'Chop the fruit.'], answer: ['Wash the fruit.', 'Chop the fruit.', 'Mix everything.', 'Serve the salad.'], hint: 'Pensá qué harías primero en la cocina.', explain: 'Orden correcto: Wash, Chop, Mix, Serve.' },
      { type: 'sequence', prompt: 'Ordená la receta de Vanilla Milkshake', spanish: 'Primero leche, luego helado, mezclar y servir.', options: ['Mix everything.', 'Pour the milk into the blender.', 'Serve in a glass.', 'Add the ice cream.'], answer: ['Pour the milk into the blender.', 'Add the ice cream.', 'Mix everything.', 'Serve in a glass.'], hint: 'Para un milkshake primero usamos la licuadora.', explain: 'Orden correcto: Pour, Add, Mix, Serve.' },
    ],
  },
  {
    id: 16,
    title: 'Recipe Builder',
    subtitle: 'Armar una receta escrita',
    world: 'Recipe Harbor',
    icon: '🍓',
    kind: 'builder',
    steps: [
      { type: 'builder', prompt: 'Elegí SOLO los ingredientes para Fruit Salad.', ingredients: ['apple', 'banana', 'orange', 'kiwi', 'strawberries'], instructions: ['Wash the fruit.', 'Chop the banana.', 'Mix everything.'], wrongItems: ['Peel the apple.', 'Pour the juice.', 'Chill the salad.'], hint: 'Ingredientes son cosas/comidas, no acciones.' },
      { type: 'builder', prompt: 'Elegí SOLO los ingredientes para Vanilla Milkshake.', ingredients: ['milk', 'vanilla ice cream', 'vanilla extract', 'cherry'], instructions: ['Pour the milk.', 'Mix everything.'], wrongItems: ['Add the ice cream.', 'Serve in a glass.', 'Wash the fruit.'], hint: 'Ingredientes son cosas que van en la receta.' },
    ],
  },
  {
    id: 17,
    title: 'Reading Poems',
    subtitle: 'Poemas sobre comida',
    world: 'Reading Kingdom',
    icon: '📘',
    kind: 'mock',
    steps: [
      { type: 'mock', textTitle: 'Text A - Muffins Poem', text: ['Crack the eggs,', 'Pour the milk,', 'Add the flour,', 'Mix it quick.', 'Bake the muffins,', 'Warm and yummy!'], questions: [
        { type: 'choice', prompt: 'The poem is about...', options: ['playing', 'Baking', 'a birthday party'], answer: 'Baking', hint: 'Menciona bake y muffins.', explain: 'El poema es sobre Baking.' },
        { type: 'choice', prompt: 'It is a recipe for...', options: ['muffins', 'fruit salad', 'sandwich'], answer: 'muffins', hint: 'La palabra muffins aparece en el texto.', explain: 'Es una receta para muffins.' },
        { type: 'choice', prompt: 'Find one word that shows the food is good.', options: ['yummy', 'eggs', 'flour'], answer: 'yummy', hint: 'Yummy significa delicioso.', explain: 'Yummy muestra que la comida es rica.' },
        { type: 'choice', prompt: 'Find one tricky word.', options: ['the', 'flour', 'muffins'], answer: 'the', hint: 'The está en la lista de tricky words.', explain: 'The es tricky word.' },
      ] },
    ],
  },
  {
    id: 18,
    title: 'Reading Recipes 1',
    subtitle: 'Vanilla Milkshake',
    world: 'Reading Kingdom',
    icon: '🥤',
    kind: 'mock',
    steps: [
      { type: 'mock', textTitle: 'Text B - Vanilla Milkshake', text: ['Title: Vanilla Milkshake', 'Ingredients: 2 scoops of vanilla ice cream, milk, vanilla extract, whipped cream, cherry.', 'Instructions:', '1. Pour the milk into the blender.', '2. Add the ice cream and vanilla extract.', '3. Mix everything.', '4. Pour into a tall glass.', '5. Serve with a cherry.'], questions: [
        { type: 'choice', prompt: 'Which is an ingredient?', options: ['milk', 'pour', 'serve'], answer: 'milk', hint: 'Ingredient = cosa que necesito.', explain: 'Milk es ingrediente.' },
        { type: 'choice', prompt: 'How many scoops of ice cream do you need?', options: ['2 scoops', '3 lemons', '1 plate'], answer: '2 scoops', hint: 'Está en Ingredients.', explain: 'You need 2 scoops.' },
        { type: 'choice', prompt: 'Why are Pour, Add, Mix and Serve important?', options: ['They tell us what to do', 'They are ingredients', 'They are colors'], answer: 'They tell us what to do', hint: 'Son cooking verbs.', explain: 'Son instrucciones/acciones.' },
      ] },
    ],
  },
  {
    id: 19,
    title: 'Reading Recipes 2',
    subtitle: 'Sandwich + Lemonade',
    world: 'Reading Kingdom',
    icon: '🥪',
    kind: 'mock',
    steps: [
      { type: 'mock', textTitle: 'Text B - Healthy Sandwich', text: ['Ingredients: bread, mayonnaise, ham, cheese, tomato, lettuce.', 'Instructions:', '1. Slice the bread.', '2. Spread mayonnaise.', '3. Add ham and cheese.', '4. Put vegetables on the sandwich.', '5. Serve on a plate.'], questions: [
        { type: 'choice', prompt: 'How many slices of ham do you need?', options: ['2 slices of ham', '3 lemons', '1 glass'], answer: '2 slices of ham', hint: 'Buscá ham en ingredients.', explain: 'La respuesta es 2 slices of ham.' },
        { type: 'choice', prompt: 'Which word is a cooking verb?', options: ['Slice', 'lettuce', 'tomato'], answer: 'Slice', hint: 'Un cooking verb es una acción.', explain: 'Slice = cortar en rodajas.' },
        { type: 'choice', prompt: 'Which is kitchen equipment?', options: ['plate', 'ham', 'healthy'], answer: 'plate', hint: 'Equipment/utensil = herramienta de cocina.', explain: 'Plate = plato.' },
      ] },
      { type: 'mock', textTitle: 'Text B - Fresh Lemonade', text: ['Ingredients: 3 lemons, cold water, sugar, ice cubes, mint leaves.', 'Instructions:', '1. Cut the lemons in half.', '2. Squeeze the juice.', '3. Add sugar and stir.', '4. Pour in cold water.', '5. Taste your lemonade.'], questions: [
        { type: 'choice', prompt: 'How many lemons do you need?', options: ['3 lemons', '2 eggs', '1 banana'], answer: '3 lemons', hint: 'Está en Ingredients.', explain: 'You need 3 lemons.' },
        { type: 'choice', prompt: 'Which is an instruction?', options: ['Squeeze the juice.', '3 lemons', 'ice cubes'], answer: 'Squeeze the juice.', hint: 'Empieza con un verbo.', explain: 'Squeeze the juice es una instrucción.' },
        { type: 'choice', prompt: 'What does Squeeze mean?', options: ['Exprimir', 'Hornear', 'Pelar'], answer: 'Exprimir', hint: 'Se hace con limones.', explain: 'Squeeze = exprimir.' },
      ] },
    ],
  },
  {
    id: 20,
    title: 'Mid-Term Challenge',
    subtitle: 'Reading + Writing final',
    world: 'Big Ben Challenge',
    icon: '🏆',
    kind: 'choice',
    steps: [
      { type: 'choice', prompt: 'Ingredients are...', spanish: 'Los ingredientes son...', options: ['things we need', 'steps we follow', 'sounds'], answer: 'things we need', hint: 'Ingredientes = cosas.', explain: 'Ingredients are things we need.' },
      { type: 'choice', prompt: 'Instructions usually start with...', spanish: 'Las instrucciones suelen empezar con...', options: ['a cooking verb', 'a color', 'a number only'], answer: 'a cooking verb', hint: 'Ej: Wash, Mix, Pour.', explain: 'Instructions start with action verbs.' },
      { type: 'choice', prompt: 'Choose the correct sentence.', spanish: 'Elegí la oración correcta.', options: ['An apple is sweet.', 'A apple is sweet.', 'Apple an is sweet.'], answer: 'An apple is sweet.', hint: 'Apple empieza con vocal.', explain: 'Correcto: An apple is sweet.' },
      { type: 'choice', prompt: 'Choose the correct recipe part for: Mix everything.', spanish: 'Elegí la parte correcta.', options: ['Instructions', 'Ingredients', 'Title'], answer: 'Instructions', hint: 'Mix es una acción.', explain: 'Mix everything va en Instructions.' },
      { type: 'choice', prompt: 'strawberry →', spanish: 'Plural correcto', options: ['strawberries', 'strawberrys', 'strawberryes'], answer: 'strawberries', hint: 'Y cambia a IES.', explain: 'strawberry → strawberries.' },
    ],
  },
];

function loadProgress(): Progress {
  if (typeof window === 'undefined') return defaultProgress;
  try {
    const raw = JSON.parse(localStorage.getItem('piliEnglishProgressV3') || '{}');
    return { ...defaultProgress, ...raw, englishStars: { ...defaultProgress.englishStars, ...(raw.englishStars || {}) } };
  } catch {
    return defaultProgress;
  }
}

let currentMusic: HTMLAudioElement | null = null;
let musicEnabled = true;

const soundFiles: Record<'ok' | 'bad' | 'hint' | 'win' | 'star' | 'unlock', string> = {
  ok: '/audio/correct.mp3',
  bad: '/audio/wrong.mp3',
  hint: '/audio/hint.mp3',
  win: '/audio/level-complete.mp3',
  star: '/audio/star.mp3',
  unlock: '/audio/unlock.mp3',
};

function playAudio(src: string, volume = 0.18) {
  if (typeof window === 'undefined' || !musicEnabled) return;
  try {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play().catch(() => {});
  } catch {}
}

function playSound(type: 'ok' | 'bad' | 'hint' | 'win' | 'star' | 'unlock' = 'ok') {
  const volume = type === 'bad' ? 0.13 : type === 'win' ? 0.18 : 0.16;
  playAudio(soundFiles[type], volume);
}

function playMusic(src: string, volume = 0.08) {
  if (typeof window === 'undefined' || !musicEnabled) return;
  try {
    if (currentMusic?.src.includes(src)) {
      currentMusic.play().catch(() => {});
      return;
    }
    if (currentMusic) currentMusic.pause();
    currentMusic = new Audio(src);
    currentMusic.loop = true;
    currentMusic.volume = volume;
    currentMusic.play().catch(() => {});
  } catch {}
}

function musicForLevel(levelId: number) {
  if (levelId <= 6) return '/audio/english-1.mp3';
  if (levelId <= 13) return '/audio/english-2.mp3';
  return '/audio/english-3.mp3';
}

function startInteractiveMusic(src: string, volume = 0.075) {
  musicEnabled = true;
  playMusic(src, volume);
}

export default function Page() {
  const [screen, setScreen] = useState<Screen>('home');
  const [progress, setProgress] = useState<Progress>(defaultProgress);
  const [activeLevel, setActiveLevel] = useState<Level | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [mockIndex, setMockIndex] = useState(0);
  const [errors, setErrors] = useState(0);
  const [selected, setSelected] = useState('');
  const [sequence, setSequence] = useState<string[]>([]);
  const [builderSelected, setBuilderSelected] = useState<string[]>([]);
  const [feedback, setFeedback] = useState('');
  const [canUnderstand, setCanUnderstand] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);
  useEffect(() => {
    localStorage.setItem('piliEnglishProgressV3', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    if (!currentMusic) return;
    if (screen === 'home') playMusic('/audio/menu.mp3', 0.075);
    if (screen === 'englishMap') playMusic('/audio/english-1.mp3', 0.075);
    if (screen === 'level' && activeLevel) playMusic(musicForLevel(activeLevel.id), 0.07);
  }, [screen, activeLevel?.id]);

  useEffect(() => {
    if (screen !== 'englishMap') return;
    setTimeout(() => {
      document.getElementById('currentLevelNode')?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 120);
  }, [screen, progress.englishUnlocked]);

  const currentStep = activeLevel?.steps[stepIndex];
  const currentQuestion = useMemo(() => {
    if (!currentStep) return null;
    if (currentStep.type === 'mock') return currentStep.questions[mockIndex];
    return currentStep;
  }, [currentStep, mockIndex]);

  function openEnglishMap() {
    startInteractiveMusic('/audio/english-1.mp3', 0.075);
    setScreen('englishMap');
    setActiveLevel(null);
  }

  function startLevel(level: Level) {
    startInteractiveMusic(musicForLevel(level.id), 0.07);
    setActiveLevel(level);
    setScreen('level');
    setStepIndex(0);
    setMockIndex(0);
    setErrors(0);
    setSelected('');
    setSequence([]);
    setBuilderSelected([]);
    setFeedback(level.steps[0].type === 'theory' ? 'Leé la teoría con calma. Después tocá Entendí.' : 'Elegí una respuesta.');
    setCanUnderstand(level.steps[0].type === 'theory');
  }

  function choose(answer: string) {
    if (!currentQuestion || !('answer' in currentQuestion)) return;
    setSelected(answer);
    if (answer === currentQuestion.answer) {
      playSound('ok');
      setFeedback('✅ ¡Muy bien! Ahora tocá Entendí.');
      setCanUnderstand(true);
    } else {
      playSound('bad');
      setErrors((e) => e + 1);
      setFeedback('❌ Hay un error. ' + currentQuestion.hint);
      setCanUnderstand(false);
    }
  }

  function selectSequence(item: string) {
    if (!currentStep || currentStep.type !== 'sequence') return;
    if (sequence.includes(item)) return;
    const next = [...sequence, item];
    setSequence(next);
    if (next.length === currentStep.answer.length) {
      const ok = next.every((v, i) => v === currentStep.answer[i]);
      if (ok) {
        playSound('ok');
        setFeedback('✅ Orden correcto. Tocá Entendí.');
        setCanUnderstand(true);
      } else {
        playSound('bad');
        setErrors((e) => e + 1);
        setFeedback('❌ El orden no está bien. ' + currentStep.hint);
        setCanUnderstand(false);
      }
    } else {
      setFeedback('Seguí tocando las instrucciones en orden.');
    }
  }

  function toggleBuilder(item: string) {
    if (!currentStep || currentStep.type !== 'builder') return;
    const next = builderSelected.includes(item)
      ? builderSelected.filter((x) => x !== item)
      : [...builderSelected, item];
    setBuilderSelected(next);
    const correct = currentStep.ingredients;
    const ok = correct.every((x) => next.includes(x)) && next.every((x) => correct.includes(x));
    if (ok) {
      playSound('ok');
      setFeedback('✅ Elegiste solo ingredientes. Tocá Entendí.');
      setCanUnderstand(true);
    } else {
      setFeedback('Elegí solo comidas/cosas. No elijas acciones.');
      setCanUnderstand(false);
    }
  }

  function showHint() {
    playSound('hint');
    if (!currentStep) return;
    if (currentStep.type === 'theory') setFeedback('💡 Pista: Ingredients son cosas. Instructions son acciones.');
    else if (currentStep.type === 'sequence') setFeedback('💡 Pista: ' + currentStep.hint);
    else if (currentStep.type === 'builder') setFeedback('💡 Pista: ' + currentStep.hint);
    else if (currentStep.type === 'mock') setFeedback('💡 Pista: ' + currentStep.questions[mockIndex].hint);
    else setFeedback('💡 Pista: ' + currentStep.hint);
  }

  function showSolution() {
    playSound('hint');
    if (!currentStep) return;
    setErrors((e) => e + 1);
    if (currentStep.type === 'sequence') {
      setSequence(currentStep.answer);
      setFeedback('✅ Solución: ' + currentStep.explain + ' Tocá Entendí.');
    } else if (currentStep.type === 'builder') {
      setBuilderSelected(currentStep.ingredients);
      setFeedback('✅ Solución: elegí ' + currentStep.ingredients.join(', ') + '. Tocá Entendí.');
    } else if (currentStep.type === 'mock') {
      const q = currentStep.questions[mockIndex];
      setSelected(q.answer);
      setFeedback('✅ Solución: ' + q.answer + '. ' + q.explain);
    } else if (currentStep.type === 'choice') {
      setSelected(currentStep.answer);
      setFeedback('✅ Solución: ' + currentStep.answer + '. ' + currentStep.explain);
    } else {
      setFeedback('✅ Leé los ejemplos y tocá Entendí.');
    }
    setCanUnderstand(true);
  }

  function nextStep() {
    if (!activeLevel || !currentStep) return;
    if (currentStep.type === 'mock' && mockIndex < currentStep.questions.length - 1) {
      setMockIndex((i) => i + 1);
      setSelected('');
      setFeedback('Siguiente pregunta del Mock Reading.');
      setCanUnderstand(false);
      return;
    }
    if (stepIndex < activeLevel.steps.length - 1) {
      const next = activeLevel.steps[stepIndex + 1];
      setStepIndex((i) => i + 1);
      setMockIndex(0);
      setSelected('');
      setSequence([]);
      setBuilderSelected([]);
      setFeedback(next.type === 'theory' ? 'Leé la teoría y tocá Entendí.' : 'Elegí una respuesta.');
      setCanUnderstand(next.type === 'theory');
      return;
    }
    finishLevel();
  }

  function finishLevel() {
    if (!activeLevel) return;
    const earnedStars = errors === 0 ? 3 : errors <= 2 ? 2 : 1;
    const earnedCoins = earnedStars === 3 ? 50 : earnedStars === 2 ? 35 : 20;
    playSound('win');
    setTimeout(() => playSound('star'), 380);
    setTimeout(() => playSound('unlock'), 760);
    setProgress((p) => {
      const previousStars = p.englishStars[activeLevel.id] || 0;
      const extraStars = Math.max(0, earnedStars - previousStars);
      return {
        ...p,
        stars: p.stars + extraStars,
        coins: p.coins + earnedCoins,
        englishUnlocked: Math.max(p.englishUnlocked, activeLevel.id + 1),
        englishStars: { ...p.englishStars, [activeLevel.id]: Math.max(previousStars, earnedStars) },
      };
    });
    setFeedback(`🏆 Nivel completado. Ganaste ${'⭐'.repeat(earnedStars)} y desbloqueaste el siguiente nivel.`);
    setScreen('englishMap');
    setActiveLevel(null);
  }

  function retryLevel() {
    if (activeLevel) startLevel(activeLevel);
  }

  if (screen === 'home') {
    return <main className="homeScreen bgHome">
      <Hud progress={progress} />
      <section className="homeCard">
        <picture>
          <source media="(min-width: 1200px)" srcSet="/assets/logo-desktop.webp" />
          <source media="(min-width: 768px)" srcSet="/assets/logo-tablet.webp" />
          <img src="/assets/logo-mobile.webp" alt="Las Aventuras de Pili" className="homeLogo" />
        </picture>
        <div className="homeHint">Elegí una aventura</div>
        <div className="subjectButtons">
          <button className="subjectBtn math" onClick={() => { startInteractiveMusic('/audio/menu.mp3', 0.075); playSound('hint'); }}>➕ Matemáticas <small>Próximamente</small></button>
          <button className="subjectBtn lengua" onClick={() => { startInteractiveMusic('/audio/menu.mp3', 0.075); playSound('hint'); }}>📚 Lengua <small>Próximamente</small></button>
          <button className="subjectBtn english" onClick={openEnglishMap}>🇬🇧 Inglés <small>Jugar ahora</small></button>
        </div>
      </section>
    </main>;
  }

  if (screen === 'englishMap') {
    const mapHeight = 2860;
    const points = levels.map((level, i) => {
      const pattern = [31, 62, 70, 38, 27, 58];
      return { level, x: pattern[i % pattern.length], y: mapHeight - 170 - i * 132 };
    });
    const pathD = points.map((p, i) => {
      if (i === 0) return `M ${p.x} ${p.y}`;
      const prev = points[i - 1];
      const midY = (prev.y + p.y) / 2;
      return ` C ${prev.x} ${midY}, ${p.x} ${midY}, ${p.x} ${p.y}`;
    }).join('');
    const currentIndex = Math.min(Math.max(progress.englishUnlocked, 1), levels.length) - 1;
    const currentPoint = points[currentIndex] || points[0];
    const selectedLevel = levels[currentIndex] || levels[0];

    return <main className="mapScreen bgEnglish candyMapScreen">
      <Top title="Mundo Inglés" progress={progress} back={() => { startInteractiveMusic('/audio/menu.mp3', 0.075); setScreen('home'); }} />
      <section className="mapHeader compactMapHeader">
        <h1>🇬🇧 Mundo Inglés</h1>
        <p>Food · Recipes · Grammar · Tricky Words · Phonics · Reading</p>
      </section>
      <div className="candyViewport" aria-label="Mapa de niveles de Inglés">
        <div className="candyScroll" style={{ height: `${mapHeight}px` }}>
          <svg className="candyPath" viewBox={`0 0 100 ${mapHeight}`} preserveAspectRatio="none" aria-hidden="true">
            <path className="candyPathShadow" d={pathD} />
            <path className="candyPathBase" d={pathD} />
            <path className="candyPathDots" d={pathD} />
          </svg>
          <img
            className="mapPili"
            src="/assets/characters/pili-front.png"
            alt="Pili"
            style={{ left: `calc(${currentPoint.x}% - 54px)`, top: `${currentPoint.y - 94}px` }}
          />
          {points.map(({ level, x, y }) => {
            const stars = progress.englishStars[level.id] || 0;
            const unlocked = level.id <= progress.englishUnlocked;
            const current = level.id === progress.englishUnlocked && !stars;
            return <button
              id={current ? 'currentLevelNode' : undefined}
              key={level.id}
              className={`candyNode ${unlocked ? 'unlocked' : 'locked'} ${stars ? 'done' : ''} ${current ? 'current' : ''}`}
              style={{ left: `calc(${x}% - 32px)`, top: `${y - 32}px` }}
              onClick={() => unlocked ? startLevel(level) : playSound('bad')}
              title={`Nivel ${level.id}: ${level.title}`}
            >
              <span className="nodeNumber">{level.id}</span>
              <span className="nodeStars">{stars ? '⭐'.repeat(stars) : unlocked ? '☆☆☆' : ''}</span>
            </button>;
          })}
        </div>
      </div>
      <section className="mapLevelCard">
        <div className="levelRoundBadge">{selectedLevel.id}</div>
        <div>
          <b>Nivel {selectedLevel.id}</b>
          <span>{selectedLevel.title}</span>
          <small>{selectedLevel.subtitle}</small>
        </div>
        <button onClick={() => startLevel(selectedLevel)}>¡JUGAR!</button>
      </section>
      <button className="homeMini" onClick={() => { startInteractiveMusic('/audio/menu.mp3', 0.075); setScreen('home'); }}>🏠 Casa</button>
    </main>;
  }

  if (screen === 'level' && activeLevel && currentStep) {
    return <main className="levelScreen">
      <Top title={activeLevel.title} progress={progress} back={() => setScreen('englishMap')} />
      <section className="levelCard">
        <div className="levelBadge"><span>{activeLevel.icon}</span><div><b>Nivel {activeLevel.id}</b><small>{activeLevel.world}</small></div></div>
        <h1>{activeLevel.title}</h1>
        <p className="subtitle">{activeLevel.subtitle}</p>
        <StepView step={currentStep} mockIndex={mockIndex} selected={selected} sequence={sequence} builderSelected={builderSelected} onChoose={choose} onSeq={selectSequence} onBuild={toggleBuilder} />
        <div className={`feedback ${feedback.startsWith('✅') ? 'ok' : feedback.startsWith('❌') || feedback.startsWith('🔁') ? 'bad' : ''}`}>{feedback}</div>
        <div className="actions">
          <button className="actionBtn hint" onClick={showHint}>💡 Pista</button>
          <button className="actionBtn solution" onClick={showSolution}>✅ Solución</button>
          <button className="actionBtn retry" onClick={retryLevel}>🔄 Reiniciar</button>
          <button className="actionBtn understand" disabled={!canUnderstand} onClick={nextStep}>👍 Entendí</button>
        </div>
      </section>
    </main>;
  }

  return null;
}

function StepView({ step, mockIndex, selected, sequence, builderSelected, onChoose, onSeq, onBuild }: {
  step: Step;
  mockIndex: number;
  selected: string;
  sequence: string[];
  builderSelected: string[];
  onChoose: (answer: string) => void;
  onSeq: (item: string) => void;
  onBuild: (item: string) => void;
}) {
  if (step.type === 'theory') {
    return <div className="theory">
      <h2>{step.title}</h2>
      <div className="theoryGrid">{step.blocks.map((b) => <div className="theoryBox" key={b.en}><b>{b.en}</b><span>{b.es}</span>{b.example && <em>{b.example}</em>}</div>)}</div>
    </div>;
  }
  if (step.type === 'mock') {
    const q = step.questions[mockIndex];
    return <>
      <div className="mockText"><b>{step.textTitle}</b>{step.text.map((line) => <span key={line}>{line}</span>)}</div>
      <ChoiceQuestion q={q} selected={selected} onChoose={onChoose} />
    </>;
  }
  if (step.type === 'sequence') {
    return <div>
      <div className="question"><b>{step.prompt}</b>{step.spanish && <small>{step.spanish}</small>}</div>
      <div className="sequenceSlots">{step.answer.map((_, i) => <span key={i}>{sequence[i] || `${i + 1}`}</span>)}</div>
      <div className="options">{step.options.map((o) => <button key={o} className={`option ${sequence.includes(o) ? 'selected' : ''}`} onClick={() => onSeq(o)}>{o}</button>)}</div>
    </div>;
  }
  if (step.type === 'builder') {
    const allItems = [...step.ingredients, ...step.wrongItems];
    return <div>
      <div className="question"><b>{step.prompt}</b></div>
      <div className="options">{allItems.map((item) => <button key={item} className={`option ${builderSelected.includes(item) ? 'selected' : ''}`} onClick={() => onBuild(item)}>{item}</button>)}</div>
    </div>;
  }
  return <ChoiceQuestion q={step} selected={selected} onChoose={onChoose} />;
}

function ChoiceQuestion({ q, selected, onChoose }: { q: ChoiceStep; selected: string; onChoose: (answer: string) => void }) {
  return <div>
    <div className="question"><b>{q.prompt}</b>{q.spanish && <small>{q.spanish}</small>}</div>
    <div className="options">
      {q.options.map((o) => <button key={o} className={`option ${selected === o ? (o === q.answer ? 'correct' : 'wrong') : ''}`} onClick={() => onChoose(o)}>{o}</button>)}
    </div>
  </div>;
}

function Top({ title, progress, back }: { title: string; progress: Progress; back: () => void }) {
  return <header className="topBar">
    <button onClick={back}>←</button>
    <b>{title}</b>
    <Hud progress={progress} />
  </header>;
}

function Hud({ progress }: { progress: Progress }) {
  return <div className="hud"><span>❤️ {progress.lives}</span><span>🪙 {progress.coins}</span><span>⭐ {progress.stars}</span><span>💎 {progress.gems}</span></div>;
}
