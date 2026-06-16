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
    title: 'Recipe Academy',
    subtitle: 'Partes de una receta',
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
      { type: 'choice', prompt: 'Apple, banana, milk', spanish: 'manzana, banana, leche', options: ['Title', 'Ingredients', 'Instructions'], answer: 'Ingredients', hint: 'Son cosas que necesito para preparar.', explain: 'Van en Ingredients porque son alimentos/cosas.' },
      { type: 'choice', prompt: 'Wash the fruit.', spanish: 'Lavar la fruta.', options: ['Title', 'Ingredients', 'Instructions'], answer: 'Instructions', hint: 'Empieza con un verbo: Wash.', explain: 'Es una Instruction porque indica un paso.' },
    ],
  },
  {
    id: 2,
    title: 'Ingredients Detective',
    subtitle: 'Cosas, no acciones',
    world: 'Recipe Forest',
    icon: '🍎',
    kind: 'choice',
    steps: [
      { type: 'choice', prompt: '2 scoops of vanilla ice cream', spanish: '2 bochas de helado de vainilla', options: ['Ingredient', 'Instruction'], answer: 'Ingredient', hint: 'Es algo que necesito.', explain: 'Es Ingredient porque es una cosa/comida.' },
      { type: 'choice', prompt: 'strawberries', spanish: 'frutillas', options: ['Ingredient', 'Instruction'], answer: 'Ingredient', hint: '¿Es una comida o una acción?', explain: 'Strawberries son ingredientes.' },
      { type: 'choice', prompt: 'Pour the milk.', spanish: 'Verter la leche.', options: ['Ingredient', 'Instruction'], answer: 'Instruction', hint: 'Pour es una acción.', explain: 'Es Instruction porque indica qué hacer.' },
    ],
  },
  {
    id: 3,
    title: 'Cooking Verbs 1',
    subtitle: 'Verbos de cocina',
    world: 'Cooking Castle',
    icon: '👩‍🍳',
    kind: 'choice',
    steps: [
      { type: 'choice', prompt: 'Peel', spanish: 'Elegí el significado', options: ['Pelar', 'Mezclar', 'Servir'], answer: 'Pelar', hint: 'Lo hacemos con la cáscara.', explain: 'Peel = pelar.' },
      { type: 'choice', prompt: 'Chop', spanish: 'Elegí el significado', options: ['Cortar', 'Hornear', 'Enfriar'], answer: 'Cortar', hint: 'Se hace con cuchillo.', explain: 'Chop = cortar.' },
      { type: 'choice', prompt: 'Mix', spanish: 'Elegí el significado', options: ['Mezclar', 'Romper', 'Lavar'], answer: 'Mezclar', hint: 'Juntar todo en un bowl.', explain: 'Mix = mezclar.' },
    ],
  },
  {
    id: 4,
    title: 'Cooking Verbs 2',
    subtitle: 'Más acciones',
    world: 'Cooking Castle',
    icon: '🥣',
    kind: 'choice',
    steps: [
      { type: 'choice', prompt: 'Pour', spanish: 'Elegí el significado', options: ['Verter', 'Cortar', 'Pelar'], answer: 'Verter', hint: 'Como poner leche en un vaso.', explain: 'Pour = verter.' },
      { type: 'choice', prompt: 'Bake', spanish: 'Elegí el significado', options: ['Hornear', 'Revolver', 'Servir'], answer: 'Hornear', hint: 'Se hace en el horno.', explain: 'Bake = hornear.' },
      { type: 'choice', prompt: 'Crack the eggs', spanish: '¿Qué significa?', options: ['Romper los huevos', 'Lavar los huevos', 'Servir los huevos'], answer: 'Romper los huevos', hint: 'Crack = romper.', explain: 'Crack the eggs = romper los huevos.' },
    ],
  },
  {
    id: 5,
    title: 'Kitchen Tools',
    subtitle: 'Utensilios p.94',
    world: 'Cooking Castle',
    icon: '🥄',
    kind: 'choice',
    steps: [
      { type: 'choice', prompt: 'blender', spanish: '¿Qué es?', options: ['Licuadora', 'Heladera', 'Plato'], answer: 'Licuadora', hint: 'Sirve para preparar milkshake.', explain: 'Blender = licuadora.' },
      { type: 'choice', prompt: 'spoon', spanish: '¿Qué es?', options: ['Cuchara', 'Vaso', 'Taza'], answer: 'Cuchara', hint: 'Se usa para revolver o comer sopa.', explain: 'Spoon = cuchara.' },
      { type: 'choice', prompt: 'fridge', spanish: '¿Qué es?', options: ['Heladera', 'Bowl', 'Vaso'], answer: 'Heladera', hint: 'Sirve para enfriar.', explain: 'Fridge = heladera.' },
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
      { type: 'choice', prompt: 'lemon', spanish: '¿Cómo es?', options: ['sour', 'sweet', 'crispy'], answer: 'sour', hint: 'El limón es ácido.', explain: 'Lemon is sour.' },
      { type: 'choice', prompt: 'chocolate', spanish: '¿Cómo es?', options: ['sweet', 'bitter', 'heavy'], answer: 'sweet', hint: 'El chocolate suele ser dulce.', explain: 'Chocolate is sweet.' },
      { type: 'choice', prompt: 'salad', spanish: 'Puede ser...', options: ['healthy', 'unhealthy', 'bitter'], answer: 'healthy', hint: 'Una ensalada suele ser saludable.', explain: 'Salad is healthy.' },
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
      { type: 'choice', prompt: '___ apple', spanish: 'Completá', options: ['a', 'an'], answer: 'an', hint: 'Apple empieza con vocal.', explain: 'Se escribe an apple.' },
      { type: 'choice', prompt: '___ banana', spanish: 'Completá', options: ['a', 'an'], answer: 'a', hint: 'Banana empieza con consonante.', explain: 'Se escribe a banana.' },
      { type: 'choice', prompt: '___ orange', spanish: 'Completá', options: ['a', 'an'], answer: 'an', hint: 'Orange empieza con vocal.', explain: 'Se escribe an orange.' },
    ],
  },
  {
    id: 8,
    title: 'Plurals',
    subtitle: 's, es, ies',
    world: 'Grammar Mountain',
    icon: '🍒',
    kind: 'choice',
    steps: [
      { type: 'choice', prompt: 'apple →', spanish: 'Plural correcto', options: ['apples', 'applees', 'applies'], answer: 'apples', hint: 'La mayoría suma S.', explain: 'apple → apples.' },
      { type: 'choice', prompt: 'tomato →', spanish: 'Plural correcto', options: ['tomatos', 'tomatoes', 'tomaties'], answer: 'tomatoes', hint: 'Tomato suma ES.', explain: 'tomato → tomatoes.' },
      { type: 'choice', prompt: 'cherry →', spanish: 'Plural correcto', options: ['cherrys', 'cherries', 'cherryes'], answer: 'cherries', hint: 'Consonante + y cambia a ies.', explain: 'cherry → cherries.' },
    ],
  },
  {
    id: 9,
    title: 'Tricky Words 1',
    subtitle: 'I, the, he, she',
    world: 'Tricky Woods',
    icon: '🧠',
    kind: 'choice',
    steps: [
      { type: 'choice', prompt: '___ like apples.', spanish: 'Yo = ?', options: ['I', 'the', 'go'], answer: 'I', hint: 'Yo en inglés se escribe I.', explain: 'I like apples.' },
      { type: 'choice', prompt: '___ sandwich is yummy.', spanish: 'El sandwich...', options: ['The', 'He', 'No'], answer: 'The', hint: 'El/La = The.', explain: 'The sandwich is yummy.' },
      { type: 'choice', prompt: '___ is my dad.', spanish: 'Él es mi papá.', options: ['He', 'She', 'They'], answer: 'He', hint: 'Él = He.', explain: 'He is my dad.' },
    ],
  },
  {
    id: 10,
    title: 'Tricky Words 2',
    subtitle: 'we, you, your',
    world: 'Tricky Woods',
    icon: '✨',
    kind: 'choice',
    steps: [
      { type: 'choice', prompt: '___ are friends.', spanish: 'Nosotros somos amigos.', options: ['We', 'Go', 'My'], answer: 'We', hint: 'Nosotros = We.', explain: 'We are friends.' },
      { type: 'choice', prompt: 'This is ___ book.', spanish: 'Tu libro.', options: ['your', 'you', 'no'], answer: 'your', hint: 'Tu/tus = your.', explain: 'This is your book.' },
      { type: 'choice', prompt: 'I like ___ recipe.', spanish: 'Me gusta tu receta.', options: ['your', 'you', 'go'], answer: 'your', hint: 'Antes de recipe usamos your.', explain: 'I like your recipe.' },
    ],
  },
  {
    id: 11,
    title: 'Phonics 1',
    subtitle: 'S A T P I N',
    world: 'Phonics Island',
    icon: '🔊',
    kind: 'choice',
    steps: [
      { type: 'choice', prompt: '¿Cuál palabra empieza con S?', spanish: 'S sound', options: ['sun', 'apple', 'dog'], answer: 'sun', hint: 'Sun empieza con S.', explain: 'sun empieza con S.' },
      { type: 'choice', prompt: '¿Cuál palabra empieza con P?', spanish: 'P sound', options: ['plate', 'milk', 'egg'], answer: 'plate', hint: 'Plate empieza con P.', explain: 'plate empieza con P.' },
      { type: 'choice', prompt: '¿Cuál palabra tiene N?', spanish: 'N sound', options: ['banana', 'cup', 'fish'], answer: 'banana', hint: 'Banana termina con N-A.', explain: 'banana tiene N.' },
    ],
  },
  {
    id: 12,
    title: 'Phonics 2',
    subtitle: 'CH, SH, TH',
    world: 'Phonics Island',
    icon: '🎧',
    kind: 'choice',
    steps: [
      { type: 'choice', prompt: '¿Cuál palabra tiene CH?', spanish: 'CH sound', options: ['cherry', 'ship', 'three'], answer: 'cherry', hint: 'CH como cherry.', explain: 'cherry tiene CH.' },
      { type: 'choice', prompt: '¿Cuál palabra tiene SH?', spanish: 'SH sound', options: ['fish', 'chair', 'thin'], answer: 'fish', hint: 'Fish termina con SH.', explain: 'fish tiene SH.' },
      { type: 'choice', prompt: '¿Cuál palabra tiene TH?', spanish: 'TH sound', options: ['three', 'spoon', 'cat'], answer: 'three', hint: 'TH como three.', explain: 'three tiene TH.' },
    ],
  },
  {
    id: 13,
    title: 'Phonics 3',
    subtitle: 'AI, EE, IGH, OA, OO',
    world: 'Phonics Island',
    icon: '🌈',
    kind: 'choice',
    steps: [
      { type: 'choice', prompt: '¿Cuál palabra tiene AI?', spanish: 'AI sound', options: ['rain', 'tree', 'boat'], answer: 'rain', hint: 'Rain tiene AI.', explain: 'rain tiene AI.' },
      { type: 'choice', prompt: '¿Cuál palabra tiene EE?', spanish: 'EE sound', options: ['tree', 'light', 'moon'], answer: 'tree', hint: 'Tree tiene EE.', explain: 'tree tiene EE.' },
      { type: 'choice', prompt: '¿Cuál palabra tiene OA?', spanish: 'OA sound', options: ['boat', 'spoon', 'night'], answer: 'boat', hint: 'Boat tiene OA.', explain: 'boat tiene OA.' },
    ],
  },
  {
    id: 14,
    title: 'Order the Recipe',
    subtitle: 'Ordenar instrucciones',
    world: 'Recipe Harbor',
    icon: '📝',
    kind: 'sequence',
    steps: [
      { type: 'sequence', prompt: 'Ordená la receta de Fruit Salad', spanish: 'Primero se lava, luego se corta, después se mezcla y al final se sirve.', options: ['Serve the salad.', 'Wash the fruit.', 'Mix everything.', 'Chop the fruit.'], answer: ['Wash the fruit.', 'Chop the fruit.', 'Mix everything.', 'Serve the salad.'], hint: 'Pensá qué harías primero en la cocina.', explain: 'Orden correcto: Wash, Chop, Mix, Serve.' },
    ],
  },
  {
    id: 15,
    title: 'Recipe Builder',
    subtitle: 'Armar una receta',
    world: 'Recipe Harbor',
    icon: '🍓',
    kind: 'builder',
    steps: [
      { type: 'builder', prompt: 'Elegí SOLO los ingredientes para Fruit Salad.', ingredients: ['apple', 'banana', 'orange', 'kiwi', 'strawberries'], instructions: ['Wash the fruit.', 'Chop the banana.', 'Mix everything.'], wrongItems: ['Peel the apple.', 'Pour the juice.', 'Chill the salad.'], hint: 'Ingredientes son cosas/comidas, no acciones.' },
    ],
  },
  {
    id: 16,
    title: 'Mock Reading 1',
    subtitle: 'Muffins',
    world: 'Reading Kingdom',
    icon: '📘',
    kind: 'mock',
    steps: [
      { type: 'mock', textTitle: 'Text A - Muffins', text: ['Crack the eggs,', 'Pour the milk,', 'Add the flour,', 'Mix it quick.', 'Bake the muffins,', 'Warm and yummy!'], questions: [
        { type: 'choice', prompt: 'The poem is about...', options: ['playing', 'Baking', 'a birthday party'], answer: 'Baking', hint: 'Menciona bake y muffins.', explain: 'El poema es sobre Baking.' },
        { type: 'choice', prompt: 'It is a recipe for...', options: ['muffins', 'fruit salad', 'sandwich'], answer: 'muffins', hint: 'La palabra muffins aparece en el texto.', explain: 'Es una receta para muffins.' },
        { type: 'choice', prompt: 'Find one word that shows the food is good.', options: ['yummy', 'eggs', 'flour'], answer: 'yummy', hint: 'Yummy significa delicioso.', explain: 'Yummy muestra que la comida es rica.' },
      ] },
    ],
  },
  {
    id: 17,
    title: 'Mock Reading 2',
    subtitle: 'Vanilla Milkshake',
    world: 'Reading Kingdom',
    icon: '🥤',
    kind: 'mock',
    steps: [
      { type: 'mock', textTitle: 'Text B - Vanilla Milkshake', text: ['Ingredients: vanilla ice cream, milk, vanilla extract.', 'Instructions:', '1. Pour the milk into the blender.', '2. Add the ice cream.', '3. Mix everything.', '4. Serve with a cherry.'], questions: [
        { type: 'choice', prompt: 'Which is an ingredient?', options: ['milk', 'pour', 'serve'], answer: 'milk', hint: 'Ingredient = cosa que necesito.', explain: 'Milk es ingrediente.' },
        { type: 'choice', prompt: 'Why are Pour, Add, Mix and Serve important?', options: ['They tell us what to do', 'They are ingredients', 'They are colors'], answer: 'They tell us what to do', hint: 'Son cooking verbs.', explain: 'Son instrucciones/acciones.' },
        { type: 'choice', prompt: 'Where do you pour the milk?', options: ['into the blender', 'on a plate', 'in the fridge'], answer: 'into the blender', hint: 'Leé el paso 1.', explain: 'Pour the milk into the blender.' },
      ] },
    ],
  },
  {
    id: 18,
    title: 'Healthy Sandwich',
    subtitle: 'Comprensión lectora',
    world: 'Reading Kingdom',
    icon: '🥪',
    kind: 'mock',
    steps: [
      { type: 'mock', textTitle: 'Text B - Healthy Sandwich', text: ['Ingredients: bread, mayonnaise, ham, cheese, tomato, lettuce.', 'Instructions:', '1. Slice the bread.', '2. Spread mayonnaise.', '3. Add ham and cheese.', '4. Put vegetables on the sandwich.', '5. Serve on a plate.'], questions: [
        { type: 'choice', prompt: 'How many slices of ham do you need?', options: ['2 slices of ham', '3 lemons', '1 glass'], answer: '2 slices of ham', hint: 'Buscá ham en ingredients.', explain: 'La respuesta es 2 slices of ham.' },
        { type: 'choice', prompt: 'Which word is a cooking verb?', options: ['Slice', 'lettuce', 'tomato'], answer: 'Slice', hint: 'Un cooking verb es una acción.', explain: 'Slice = cortar en rodajas.' },
        { type: 'choice', prompt: 'Which is kitchen equipment?', options: ['plate', 'ham', 'healthy'], answer: 'plate', hint: 'Equipment/utensil = herramienta de cocina.', explain: 'Plate = plato.' },
      ] },
    ],
  },
  {
    id: 19,
    title: 'Fresh Lemonade',
    subtitle: 'Lectura + ingredientes',
    world: 'Reading Kingdom',
    icon: '🍋',
    kind: 'mock',
    steps: [
      { type: 'mock', textTitle: 'Text B - Fresh Lemonade', text: ['Ingredients: 3 lemons, cold water, sugar, ice cubes, mint leaves.', 'Instructions:', '1. Cut the lemons in half.', '2. Squeeze the juice.', '3. Add sugar and stir.', '4. Pour in cold water.', '5. Taste your lemonade.'], questions: [
        { type: 'choice', prompt: 'How many lemons do you need?', options: ['3 lemons', '2 eggs', '1 banana'], answer: '3 lemons', hint: 'Está en Ingredients.', explain: 'You need 3 lemons.' },
        { type: 'choice', prompt: 'Which is an instruction?', options: ['Squeeze the juice.', '3 lemons', 'ice cubes'], answer: 'Squeeze the juice.', hint: 'Empieza con un verbo.', explain: 'Squeeze the juice es una instrucción.' },
        { type: 'choice', prompt: 'What does Squeeze mean?', options: ['Exprimir', 'Hornear', 'Pelar'], answer: 'Exprimir', hint: 'Se hace con limones.', explain: 'Squeeze = exprimir.' },
      ] },
    ],
  },
  {
    id: 20,
    title: 'Big Ben Challenge',
    subtitle: 'Desafío final',
    world: 'Final Challenge',
    icon: '🏆',
    kind: 'choice',
    steps: [
      { type: 'choice', prompt: 'Ingredients are...', spanish: 'Los ingredientes son...', options: ['things we need', 'steps we follow', 'sounds'], answer: 'things we need', hint: 'Ingredientes = cosas.', explain: 'Ingredients are things we need.' },
      { type: 'choice', prompt: 'Instructions usually start with...', spanish: 'Las instrucciones suelen empezar con...', options: ['a cooking verb', 'a color', 'a number only'], answer: 'a cooking verb', hint: 'Ej: Wash, Mix, Pour.', explain: 'Instructions start with action verbs.' },
      { type: 'choice', prompt: 'Choose the correct sentence.', spanish: 'Elegí la oración correcta.', options: ['An apple is sweet.', 'A apple is sweet.', 'Apple an is sweet.'], answer: 'An apple is sweet.', hint: 'Apple empieza con vocal.', explain: 'Correcto: An apple is sweet.' },
    ],
  },
];


const mapPoints = [
  { x: 18, y: 16 }, { x: 34, y: 20 }, { x: 52, y: 18 }, { x: 69, y: 25 }, { x: 61, y: 34 },
  { x: 45, y: 39 }, { x: 28, y: 44 }, { x: 17, y: 54 }, { x: 34, y: 60 }, { x: 53, y: 57 },
  { x: 72, y: 63 }, { x: 63, y: 72 }, { x: 45, y: 76 }, { x: 26, y: 81 }, { x: 15, y: 90 },
  { x: 38, y: 90 }, { x: 58, y: 86 }, { x: 76, y: 82 }, { x: 70, y: 93 }, { x: 50, y: 94 },
];

function mapPathPoints() {
  return mapPoints.map((p) => `${p.x},${p.y}`).join(' ');
}

function loadProgress(): Progress {
  if (typeof window === 'undefined') return defaultProgress;
  try {
    const raw = JSON.parse(localStorage.getItem('piliEnglishProgress_v2') || '{}');
    return { ...defaultProgress, ...raw, englishStars: { ...defaultProgress.englishStars, ...(raw.englishStars || {}) } };
  } catch {
    return defaultProgress;
  }
}

function playSound(type: 'ok' | 'bad' | 'hint' | 'win' = 'ok') {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = type === 'ok' ? 760 : type === 'bad' ? 160 : type === 'win' ? 960 : 520;
    gain.gain.value = 0.045;
    osc.start();
    setTimeout(() => { osc.stop(); ctx.close(); }, type === 'bad' ? 260 : 150);
  } catch {}
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

  useEffect(() => setProgress(loadProgress()), []);
  useEffect(() => {
    localStorage.setItem('piliEnglishProgress_v2', JSON.stringify(progress));
  }, [progress]);

  const currentStep = activeLevel?.steps[stepIndex];
  const currentQuestion = useMemo(() => {
    if (!currentStep) return null;
    if (currentStep.type === 'mock') return currentStep.questions[mockIndex];
    return currentStep;
  }, [currentStep, mockIndex]);

  function openEnglishMap() {
    setScreen('englishMap');
    setActiveLevel(null);
  }

  function startLevel(level: Level) {
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
    if (errors > 0) {
      playSound('bad');
      setFeedback(`🔁 Tuviste ${errors} error/es. Para desbloquear el siguiente nivel hay que terminar sin errores. Usá Pista o Solución y reintentá.`);
      setCanUnderstand(false);
      return;
    }
    playSound('win');
    setProgress((p) => ({
      ...p,
      stars: p.stars + 3,
      coins: p.coins + 50,
      englishUnlocked: Math.max(p.englishUnlocked, activeLevel.id + 1),
      englishStars: { ...p.englishStars, [activeLevel.id]: 3 },
    }));
    setScreen('englishMap');
    setActiveLevel(null);
  }

  function retryLevel() {
    if (activeLevel) startLevel(activeLevel);
  }

  if (screen === 'home') {
    return <main className="homeScreen" style={{ backgroundImage: 'linear-gradient(180deg,#00000010,#00000055),url(/assets/backgrounds/home.png)' }}>
      <Hud progress={progress} />
      <section className="homeCard">
        <img src="/assets/logo-transparent.png" alt="Las Aventuras de Pili" className="homeLogo" />
        <div className="homeHint">Elegí una aventura</div>
        <div className="subjectButtons">
          <button className="subjectBtn math" onClick={() => playSound('hint')}>➕ Matemáticas <small>Próximamente</small></button>
          <button className="subjectBtn lengua" onClick={() => playSound('hint')}>📚 Lengua <small>Próximamente</small></button>
          <button className="subjectBtn english" onClick={openEnglishMap}>🇬🇧 Inglés <small>Jugar ahora</small></button>
        </div>
      </section>
    </main>;
  }

  if (screen === 'englishMap') {
    const currentPoint = mapPoints[Math.min(progress.englishUnlocked - 1, mapPoints.length - 1)] || mapPoints[0];
    return <main className="mapScreen englishWorld" style={{ backgroundImage: 'linear-gradient(180deg,#00000005,#00000005 45%,#00000075),url(/assets/backgrounds/english.png)' }}>
      <Top title="Mundo Inglés" progress={progress} back={() => setScreen('home')} />
      <section className="mapHeader compact">
        <h1>🇬🇧 Mundo Inglés</h1>
        <p>Recetas · Vocabulario · Tricky Words · Phonics</p>
      </section>
      <div className="levelMap adventurePathMap" aria-label="Mapa de niveles de inglés">
        <svg className="pathSvg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polyline className="pathShadow" points={mapPathPoints()} />
          <polyline className="pathLine" points={mapPathPoints()} />
          {mapPoints.slice(0, levels.length - 1).map((p, i) => {
            const next = mapPoints[i + 1];
            const mx = (p.x + next.x) / 2;
            const my = (p.y + next.y) / 2;
            return <circle key={`dot-${i}`} className="pathDot" cx={mx} cy={my} r="1.15" />;
          })}
        </svg>
        <img
          src="/assets/characters/pili-front.png"
          alt="Pili"
          className="piliMarker"
          style={{ left: `${currentPoint.x}%`, top: `${currentPoint.y}%` }}
        />
        {levels.map((level, i) => {
          const point = mapPoints[i] || mapPoints[mapPoints.length - 1];
          const unlocked = level.id <= progress.englishUnlocked;
          const stars = progress.englishStars[level.id] || 0;
          const isCurrent = level.id === progress.englishUnlocked;
          const status = stars ? 'done' : isCurrent ? 'current' : unlocked ? 'open' : 'locked';
          return <button
            key={level.id}
            className={`adventureNode ${status}`}
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
            onClick={() => unlocked ? startLevel(level) : playSound('bad')}
            aria-label={`Nivel ${level.id}: ${level.title}`}
          >
            <span className="nodeNumber">{level.id}</span>
            <span className="nodeStars">{stars ? '★★★' : isCurrent ? '☆☆☆' : ''}</span>
          </button>;
        })}
        <div className="mapLegend">
          <b>Nivel {progress.englishUnlocked}</b>
          <span>{levels[Math.min(progress.englishUnlocked - 1, levels.length - 1)]?.title}</span>
        </div>
      </div>
      <button className="homeMini" onClick={() => setScreen('home')}>🏠 Casa</button>
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
