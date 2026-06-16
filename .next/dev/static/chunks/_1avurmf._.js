(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const defaultProgress = {
    lives: 5,
    coins: 0,
    stars: 0,
    gems: 0,
    englishUnlocked: 1,
    englishStars: {}
};
const levels = [
    {
        id: 1,
        title: 'Food Vocabulary',
        subtitle: 'Comidas pp.87-89',
        world: 'Food Island',
        icon: '🍎',
        kind: 'choice',
        steps: [
            {
                type: 'theory',
                title: 'Food = Comida',
                blocks: [
                    {
                        en: 'Fruit',
                        es: 'Fruta',
                        example: 'apple, banana, orange, kiwi, strawberry, cherry'
                    },
                    {
                        en: 'Food for recipes',
                        es: 'Comida para recetas',
                        example: 'bread, ham, cheese, lettuce, tomato'
                    },
                    {
                        en: 'Baking food',
                        es: 'Ingredientes para hornear',
                        example: 'eggs, flour, milk, sugar, butter'
                    },
                    {
                        en: 'Drinks',
                        es: 'Bebidas',
                        example: 'water, milk, lemonade, milkshake'
                    }
                ]
            },
            {
                type: 'choice',
                prompt: 'apple',
                spanish: '¿Qué significa?',
                options: [
                    'manzana',
                    'lechuga',
                    'harina'
                ],
                answer: 'manzana',
                hint: 'Es una fruta roja o verde.',
                explain: 'Apple = manzana.'
            },
            {
                type: 'choice',
                prompt: 'flour',
                spanish: '¿Qué significa?',
                options: [
                    'harina',
                    'banana',
                    'vaso'
                ],
                answer: 'harina',
                hint: 'Se usa para hacer muffins o tortas.',
                explain: 'Flour = harina.'
            },
            {
                type: 'choice',
                prompt: 'lettuce',
                spanish: '¿Qué significa?',
                options: [
                    'lechuga',
                    'queso',
                    'huevo'
                ],
                answer: 'lechuga',
                hint: 'Es verde y puede ir en un sandwich.',
                explain: 'Lettuce = lechuga.'
            }
        ]
    },
    {
        id: 2,
        title: 'Recipe Parts',
        subtitle: 'Title · Ingredients · Instructions',
        world: 'Recipe Forest',
        icon: '📖',
        kind: 'theory',
        steps: [
            {
                type: 'theory',
                title: '¿Cómo se compone una receta?',
                blocks: [
                    {
                        en: 'Recipe',
                        es: 'Receta completa',
                        example: 'Fruit Salad, Vanilla Milkshake, Healthy Sandwich'
                    },
                    {
                        en: 'Title',
                        es: 'Título / nombre de la receta',
                        example: 'Vanilla Milkshake'
                    },
                    {
                        en: 'Ingredients',
                        es: 'Ingredientes: cosas que necesito',
                        example: 'milk, apple, sugar, eggs, flour'
                    },
                    {
                        en: 'Instructions',
                        es: 'Instrucciones: pasos con acciones',
                        example: 'Wash, Peel, Mix, Pour, Serve'
                    }
                ]
            },
            {
                type: 'choice',
                prompt: 'Fruit Salad',
                spanish: '¿Qué parte de la receta es?',
                options: [
                    'Title',
                    'Ingredients',
                    'Instructions'
                ],
                answer: 'Title',
                hint: 'Es el nombre de la receta.',
                explain: 'Fruit Salad es el título.'
            },
            {
                type: 'choice',
                prompt: 'Apple, banana, milk',
                spanish: 'manzana, banana, leche',
                options: [
                    'Title',
                    'Ingredients',
                    'Instructions'
                ],
                answer: 'Ingredients',
                hint: 'Son cosas que necesito para preparar.',
                explain: 'Van en Ingredients porque son alimentos/cosas.'
            },
            {
                type: 'choice',
                prompt: 'Wash the fruit.',
                spanish: 'Lavar la fruta.',
                options: [
                    'Title',
                    'Ingredients',
                    'Instructions'
                ],
                answer: 'Instructions',
                hint: 'Empieza con un verbo: Wash.',
                explain: 'Es una Instruction porque indica un paso.'
            }
        ]
    },
    {
        id: 3,
        title: 'Ingredients Detective',
        subtitle: 'Cosas, no acciones',
        world: 'Recipe Forest',
        icon: '🍓',
        kind: 'choice',
        steps: [
            {
                type: 'choice',
                prompt: '2 scoops of vanilla ice cream',
                spanish: '2 bochas de helado de vainilla',
                options: [
                    'Ingredient',
                    'Instruction'
                ],
                answer: 'Ingredient',
                hint: 'Es algo que necesito.',
                explain: 'Es Ingredient porque es una cosa/comida.'
            },
            {
                type: 'choice',
                prompt: 'strawberries',
                spanish: 'frutillas',
                options: [
                    'Ingredient',
                    'Instruction'
                ],
                answer: 'Ingredient',
                hint: '¿Es una comida o una acción?',
                explain: 'Strawberries son ingredientes.'
            },
            {
                type: 'choice',
                prompt: 'Pour the milk.',
                spanish: 'Verter la leche.',
                options: [
                    'Ingredient',
                    'Instruction'
                ],
                answer: 'Instruction',
                hint: 'Pour es una acción.',
                explain: 'Es Instruction porque indica qué hacer.'
            },
            {
                type: 'choice',
                prompt: 'Chop the banana.',
                spanish: 'Cortar la banana.',
                options: [
                    'Ingredient',
                    'Instruction'
                ],
                answer: 'Instruction',
                hint: 'Chop es un verbo.',
                explain: 'Es una instrucción porque empieza con una acción.'
            }
        ]
    },
    {
        id: 4,
        title: 'Cooking Verbs',
        subtitle: 'Verbos de cocina pp.94-95',
        world: 'Cooking Castle',
        icon: '👩‍🍳',
        kind: 'choice',
        steps: [
            {
                type: 'theory',
                title: 'Cooking verbs = acciones de cocina',
                blocks: [
                    {
                        en: 'Wash · Peel · Chop · Slice',
                        es: 'Lavar · Pelar · Cortar · Cortar en rodajas'
                    },
                    {
                        en: 'Add · Mix · Stir · Pour',
                        es: 'Agregar · Mezclar · Revolver · Verter'
                    },
                    {
                        en: 'Crack · Bake · Squeeze · Serve',
                        es: 'Romper · Hornear · Exprimir · Servir'
                    },
                    {
                        en: 'Rule',
                        es: 'Las instrucciones suelen empezar con un cooking verb.',
                        example: 'Mix everything. / Pour the milk.'
                    }
                ]
            },
            {
                type: 'choice',
                prompt: 'Peel',
                spanish: 'Elegí el significado',
                options: [
                    'Pelar',
                    'Mezclar',
                    'Servir'
                ],
                answer: 'Pelar',
                hint: 'Lo hacemos con la cáscara.',
                explain: 'Peel = pelar.'
            },
            {
                type: 'choice',
                prompt: 'Pour',
                spanish: 'Elegí el significado',
                options: [
                    'Verter',
                    'Cortar',
                    'Pelar'
                ],
                answer: 'Verter',
                hint: 'Como poner leche en un vaso.',
                explain: 'Pour = verter.'
            },
            {
                type: 'choice',
                prompt: 'Crack the eggs',
                spanish: '¿Qué significa?',
                options: [
                    'Romper los huevos',
                    'Lavar los huevos',
                    'Servir los huevos'
                ],
                answer: 'Romper los huevos',
                hint: 'Crack = romper.',
                explain: 'Crack the eggs = romper los huevos.'
            },
            {
                type: 'choice',
                prompt: 'Squeeze the lemon',
                spanish: '¿Qué significa?',
                options: [
                    'Exprimir el limón',
                    'Hornear el limón',
                    'Cortar en rodajas'
                ],
                answer: 'Exprimir el limón',
                hint: 'Se hace para sacar jugo.',
                explain: 'Squeeze = exprimir.'
            }
        ]
    },
    {
        id: 5,
        title: 'Kitchen Equipment',
        subtitle: 'Utensilios p.94',
        world: 'Cooking Castle',
        icon: '🥄',
        kind: 'choice',
        steps: [
            {
                type: 'theory',
                title: 'Kitchen equipment = utensilios de cocina',
                blocks: [
                    {
                        en: 'fridge',
                        es: 'heladera'
                    },
                    {
                        en: 'cup · glass',
                        es: 'taza · vaso'
                    },
                    {
                        en: 'spoon · plate · bowl',
                        es: 'cuchara · plato · bowl/recipiente'
                    },
                    {
                        en: 'blender',
                        es: 'licuadora',
                        example: 'We use a blender for a milkshake.'
                    }
                ]
            },
            {
                type: 'choice',
                prompt: 'blender',
                spanish: '¿Qué es?',
                options: [
                    'Licuadora',
                    'Heladera',
                    'Plato'
                ],
                answer: 'Licuadora',
                hint: 'Sirve para preparar milkshake.',
                explain: 'Blender = licuadora.'
            },
            {
                type: 'choice',
                prompt: 'spoon',
                spanish: '¿Qué es?',
                options: [
                    'Cuchara',
                    'Vaso',
                    'Taza'
                ],
                answer: 'Cuchara',
                hint: 'Se usa para revolver o comer sopa.',
                explain: 'Spoon = cuchara.'
            },
            {
                type: 'choice',
                prompt: 'fridge',
                spanish: '¿Qué es?',
                options: [
                    'Heladera',
                    'Bowl',
                    'Vaso'
                ],
                answer: 'Heladera',
                hint: 'Sirve para enfriar.',
                explain: 'Fridge = heladera.'
            },
            {
                type: 'choice',
                prompt: 'You serve food on a...',
                spanish: 'Servís comida en un...',
                options: [
                    'plate',
                    'fridge',
                    'blender'
                ],
                answer: 'plate',
                hint: 'Es un plato.',
                explain: 'Plate = plato.'
            }
        ]
    },
    {
        id: 6,
        title: 'Food Adjectives',
        subtitle: 'Describir comida p.97',
        world: 'Food Kingdom',
        icon: '🍋',
        kind: 'choice',
        steps: [
            {
                type: 'theory',
                title: 'Adjectives describe food',
                blocks: [
                    {
                        en: 'fresh · healthy · unhealthy',
                        es: 'fresco · saludable · poco saludable'
                    },
                    {
                        en: 'bitter · sour · sweet',
                        es: 'amargo · ácido · dulce'
                    },
                    {
                        en: 'soft · crispy',
                        es: 'suave/blando · crocante'
                    },
                    {
                        en: 'light · heavy · tasty · yummy',
                        es: 'liviano · pesado · rico · delicioso'
                    }
                ]
            },
            {
                type: 'choice',
                prompt: 'lemon',
                spanish: '¿Cómo es?',
                options: [
                    'sour',
                    'sweet',
                    'crispy'
                ],
                answer: 'sour',
                hint: 'El limón es ácido.',
                explain: 'Lemon is sour.'
            },
            {
                type: 'choice',
                prompt: 'candy',
                spanish: '¿Cómo es?',
                options: [
                    'sweet',
                    'bitter',
                    'heavy'
                ],
                answer: 'sweet',
                hint: 'Los caramelos son dulces.',
                explain: 'Candy is sweet.'
            },
            {
                type: 'choice',
                prompt: 'salad',
                spanish: 'Puede ser...',
                options: [
                    'healthy',
                    'unhealthy',
                    'bitter'
                ],
                answer: 'healthy',
                hint: 'Una ensalada suele ser saludable.',
                explain: 'Salad is healthy.'
            },
            {
                type: 'choice',
                prompt: 'chips',
                spanish: 'Pueden ser...',
                options: [
                    'crispy',
                    'sour',
                    'soft'
                ],
                answer: 'crispy',
                hint: 'Hacen crunch.',
                explain: 'Chips are crispy.'
            }
        ]
    },
    {
        id: 7,
        title: 'A or AN',
        subtitle: 'p.93 booklet',
        world: 'Grammar Mountain',
        icon: '🔠',
        kind: 'choice',
        steps: [
            {
                type: 'theory',
                title: 'A / AN',
                blocks: [
                    {
                        en: 'A',
                        es: 'Se usa antes de sonido consonante.',
                        example: 'a banana, a cherry, a spoon'
                    },
                    {
                        en: 'AN',
                        es: 'Se usa antes de sonido vocal.',
                        example: 'an apple, an orange, an egg'
                    }
                ]
            },
            {
                type: 'choice',
                prompt: '___ apple',
                spanish: 'Completá',
                options: [
                    'a',
                    'an'
                ],
                answer: 'an',
                hint: 'Apple empieza con vocal.',
                explain: 'Se escribe an apple.'
            },
            {
                type: 'choice',
                prompt: '___ banana',
                spanish: 'Completá',
                options: [
                    'a',
                    'an'
                ],
                answer: 'a',
                hint: 'Banana empieza con consonante.',
                explain: 'Se escribe a banana.'
            },
            {
                type: 'choice',
                prompt: '___ orange',
                spanish: 'Completá',
                options: [
                    'a',
                    'an'
                ],
                answer: 'an',
                hint: 'Orange empieza con vocal.',
                explain: 'Se escribe an orange.'
            },
            {
                type: 'choice',
                prompt: '___ egg',
                spanish: 'Completá',
                options: [
                    'a',
                    'an'
                ],
                answer: 'an',
                hint: 'Egg empieza con vocal.',
                explain: 'Se escribe an egg.'
            }
        ]
    },
    {
        id: 8,
        title: 'Plurals',
        subtitle: 's, es/oes, ies p.92',
        world: 'Grammar Mountain',
        icon: '🍒',
        kind: 'choice',
        steps: [
            {
                type: 'theory',
                title: 'Plural Rules',
                blocks: [
                    {
                        en: '+ S',
                        es: 'La mayoría suma S.',
                        example: 'apple → apples / banana → bananas'
                    },
                    {
                        en: '+ ES',
                        es: 'Algunas palabras suman ES.',
                        example: 'tomato → tomatoes / potato → potatoes'
                    },
                    {
                        en: 'Y → IES',
                        es: 'Si termina en consonante + Y, cambia a IES.',
                        example: 'cherry → cherries / strawberry → strawberries'
                    }
                ]
            },
            {
                type: 'choice',
                prompt: 'apple →',
                spanish: 'Plural correcto',
                options: [
                    'apples',
                    'applees',
                    'applies'
                ],
                answer: 'apples',
                hint: 'La mayoría suma S.',
                explain: 'apple → apples.'
            },
            {
                type: 'choice',
                prompt: 'tomato →',
                spanish: 'Plural correcto',
                options: [
                    'tomatos',
                    'tomatoes',
                    'tomaties'
                ],
                answer: 'tomatoes',
                hint: 'Tomato suma ES.',
                explain: 'tomato → tomatoes.'
            },
            {
                type: 'choice',
                prompt: 'cherry →',
                spanish: 'Plural correcto',
                options: [
                    'cherrys',
                    'cherries',
                    'cherryes'
                ],
                answer: 'cherries',
                hint: 'Consonante + y cambia a ies.',
                explain: 'cherry → cherries.'
            },
            {
                type: 'choice',
                prompt: 'strawberry →',
                spanish: 'Plural correcto',
                options: [
                    'strawberries',
                    'strawberrys',
                    'strawberryes'
                ],
                answer: 'strawberries',
                hint: 'Termina con consonante + Y.',
                explain: 'strawberry → strawberries.'
            }
        ]
    },
    {
        id: 9,
        title: 'Tricky Words 1',
        subtitle: 'I · the · he · she · they',
        world: 'Tricky Woods',
        icon: '🧠',
        kind: 'choice',
        steps: [
            {
                type: 'theory',
                title: 'Tricky Words',
                blocks: [
                    {
                        en: 'I · the · he · she · they',
                        es: 'yo · el/la · él · ella · ellos'
                    },
                    {
                        en: 'my · like · no · go · to',
                        es: 'mi · gustar · no · ir · a/para'
                    },
                    {
                        en: 'we · you · your',
                        es: 'nosotros · vos/ustedes · tu/tus'
                    }
                ]
            },
            {
                type: 'choice',
                prompt: '___ like apples.',
                spanish: 'Yo = ?',
                options: [
                    'I',
                    'the',
                    'go'
                ],
                answer: 'I',
                hint: 'Yo en inglés se escribe I.',
                explain: 'I like apples.'
            },
            {
                type: 'choice',
                prompt: '___ sandwich is yummy.',
                spanish: 'El sandwich...',
                options: [
                    'The',
                    'He',
                    'No'
                ],
                answer: 'The',
                hint: 'El/La = The.',
                explain: 'The sandwich is yummy.'
            },
            {
                type: 'choice',
                prompt: '___ is my mum.',
                spanish: 'Ella es mi mamá.',
                options: [
                    'She',
                    'He',
                    'They'
                ],
                answer: 'She',
                hint: 'Ella = She.',
                explain: 'She is my mum.'
            }
        ]
    },
    {
        id: 10,
        title: 'Tricky Words 2',
        subtitle: 'my · like · no · go · to · we · you · your',
        world: 'Tricky Woods',
        icon: '✨',
        kind: 'choice',
        steps: [
            {
                type: 'choice',
                prompt: 'This is ___ book.',
                spanish: 'Tu libro.',
                options: [
                    'your',
                    'you',
                    'no'
                ],
                answer: 'your',
                hint: 'Tu/tus = your.',
                explain: 'This is your book.'
            },
            {
                type: 'choice',
                prompt: '___ are friends.',
                spanish: 'Nosotros somos amigos.',
                options: [
                    'We',
                    'Go',
                    'My'
                ],
                answer: 'We',
                hint: 'Nosotros = We.',
                explain: 'We are friends.'
            },
            {
                type: 'choice',
                prompt: 'I ___ lemonade.',
                spanish: 'Me gusta la limonada.',
                options: [
                    'like',
                    'to',
                    'your'
                ],
                answer: 'like',
                hint: 'Me gusta = I like.',
                explain: 'I like lemonade.'
            },
            {
                type: 'choice',
                prompt: 'I go ___ school.',
                spanish: 'Voy a la escuela.',
                options: [
                    'to',
                    'the',
                    'no'
                ],
                answer: 'to',
                hint: 'A/para = to.',
                explain: 'I go to school.'
            }
        ]
    },
    {
        id: 11,
        title: 'Phonics 1st Form A',
        subtitle: 'S A T P I N M D G O C K CK',
        world: 'Phonics Island',
        icon: '🔊',
        kind: 'choice',
        steps: [
            {
                type: 'theory',
                title: 'Phonics sounds',
                blocks: [
                    {
                        en: 'S A T P I N',
                        es: 'Sonidos iniciales para leer palabras cortas.',
                        example: 'sat, pin, tin, tap'
                    },
                    {
                        en: 'M D G O C K CK',
                        es: 'Más sonidos para formar palabras.',
                        example: 'dog, mop, cat, kick'
                    }
                ]
            },
            {
                type: 'choice',
                prompt: '¿Cuál palabra empieza con S?',
                spanish: 'S sound',
                options: [
                    'sun',
                    'apple',
                    'dog'
                ],
                answer: 'sun',
                hint: 'Sun empieza con S.',
                explain: 'sun empieza con S.'
            },
            {
                type: 'choice',
                prompt: '¿Cuál palabra empieza con P?',
                spanish: 'P sound',
                options: [
                    'plate',
                    'milk',
                    'egg'
                ],
                answer: 'plate',
                hint: 'Plate empieza con P.',
                explain: 'plate empieza con P.'
            },
            {
                type: 'choice',
                prompt: '¿Cuál palabra tiene CK?',
                spanish: 'CK sound',
                options: [
                    'duck',
                    'chair',
                    'rain'
                ],
                answer: 'duck',
                hint: 'Duck termina con CK.',
                explain: 'duck tiene CK.'
            }
        ]
    },
    {
        id: 12,
        title: 'Phonics 1st Form B',
        subtitle: 'E U R H B F FF L LL LE SS J V W X Z Y',
        world: 'Phonics Island',
        icon: '🎧',
        kind: 'choice',
        steps: [
            {
                type: 'choice',
                prompt: '¿Cuál palabra tiene FF?',
                spanish: 'FF sound',
                options: [
                    'muffin',
                    'dog',
                    'apple'
                ],
                answer: 'muffin',
                hint: 'Muffin tiene FF.',
                explain: 'muffin tiene FF.'
            },
            {
                type: 'choice',
                prompt: '¿Cuál palabra termina con LL?',
                spanish: 'LL sound',
                options: [
                    'bell',
                    'boat',
                    'rain'
                ],
                answer: 'bell',
                hint: 'Bell termina con LL.',
                explain: 'bell tiene LL.'
            },
            {
                type: 'choice',
                prompt: '¿Cuál palabra tiene SS?',
                spanish: 'SS sound',
                options: [
                    'glass',
                    'cherry',
                    'moon'
                ],
                answer: 'glass',
                hint: 'Glass tiene SS.',
                explain: 'glass tiene SS.'
            },
            {
                type: 'choice',
                prompt: '¿Cuál palabra empieza con W?',
                spanish: 'W sound',
                options: [
                    'water',
                    'egg',
                    'lemon'
                ],
                answer: 'water',
                hint: 'Water empieza con W.',
                explain: 'water empieza con W.'
            }
        ]
    },
    {
        id: 13,
        title: 'Phonics 1st Form C',
        subtitle: 'CH · SH · TH',
        world: 'Phonics Island',
        icon: '🌈',
        kind: 'choice',
        steps: [
            {
                type: 'choice',
                prompt: '¿Cuál palabra tiene CH?',
                spanish: 'CH sound',
                options: [
                    'cherry',
                    'ship',
                    'three'
                ],
                answer: 'cherry',
                hint: 'CH como cherry.',
                explain: 'cherry tiene CH.'
            },
            {
                type: 'choice',
                prompt: '¿Cuál palabra tiene SH?',
                spanish: 'SH sound',
                options: [
                    'fish',
                    'chair',
                    'thin'
                ],
                answer: 'fish',
                hint: 'Fish termina con SH.',
                explain: 'fish tiene SH.'
            },
            {
                type: 'choice',
                prompt: '¿Cuál palabra tiene TH?',
                spanish: 'TH sound',
                options: [
                    'three',
                    'spoon',
                    'cat'
                ],
                answer: 'three',
                hint: 'TH como three.',
                explain: 'three tiene TH.'
            }
        ]
    },
    {
        id: 14,
        title: 'Phonics 2nd Form',
        subtitle: 'AI WH VE DGE TCH NK EE IGH OA OO UR',
        world: 'Phonics Island',
        icon: '🔡',
        kind: 'choice',
        steps: [
            {
                type: 'theory',
                title: '2nd Form sounds',
                blocks: [
                    {
                        en: 'AI · EE · IGH · OA · OO · UR',
                        es: 'Sonidos largos / combinaciones.',
                        example: 'rain, tree, night, boat, moon, turn'
                    },
                    {
                        en: 'WH · -VE · DGE · TCH · NK',
                        es: 'Combinaciones importantes.',
                        example: 'whale, five, bridge, watch, pink'
                    }
                ]
            },
            {
                type: 'choice',
                prompt: '¿Cuál palabra tiene AI?',
                spanish: 'AI sound',
                options: [
                    'rain',
                    'tree',
                    'boat'
                ],
                answer: 'rain',
                hint: 'Rain tiene AI.',
                explain: 'rain tiene AI.'
            },
            {
                type: 'choice',
                prompt: '¿Cuál palabra tiene IGH?',
                spanish: 'IGH sound',
                options: [
                    'night',
                    'spoon',
                    'chair'
                ],
                answer: 'night',
                hint: 'Night tiene IGH.',
                explain: 'night tiene IGH.'
            },
            {
                type: 'choice',
                prompt: '¿Cuál palabra tiene TCH?',
                spanish: 'TCH sound',
                options: [
                    'watch',
                    'whale',
                    'tree'
                ],
                answer: 'watch',
                hint: 'Watch termina con TCH.',
                explain: 'watch tiene TCH.'
            },
            {
                type: 'choice',
                prompt: '¿Cuál palabra tiene NK?',
                spanish: 'NK sound',
                options: [
                    'pink',
                    'moon',
                    'boat'
                ],
                answer: 'pink',
                hint: 'Pink termina con NK.',
                explain: 'pink tiene NK.'
            }
        ]
    },
    {
        id: 15,
        title: 'Order the Recipe',
        subtitle: 'Ordenar instrucciones',
        world: 'Recipe Harbor',
        icon: '📝',
        kind: 'sequence',
        steps: [
            {
                type: 'sequence',
                prompt: 'Ordená la receta de Fruit Salad',
                spanish: 'Primero se lava, luego se corta, después se mezcla y al final se sirve.',
                options: [
                    'Serve the salad.',
                    'Wash the fruit.',
                    'Mix everything.',
                    'Chop the fruit.'
                ],
                answer: [
                    'Wash the fruit.',
                    'Chop the fruit.',
                    'Mix everything.',
                    'Serve the salad.'
                ],
                hint: 'Pensá qué harías primero en la cocina.',
                explain: 'Orden correcto: Wash, Chop, Mix, Serve.'
            },
            {
                type: 'sequence',
                prompt: 'Ordená la receta de Vanilla Milkshake',
                spanish: 'Primero leche, luego helado, mezclar y servir.',
                options: [
                    'Mix everything.',
                    'Pour the milk into the blender.',
                    'Serve in a glass.',
                    'Add the ice cream.'
                ],
                answer: [
                    'Pour the milk into the blender.',
                    'Add the ice cream.',
                    'Mix everything.',
                    'Serve in a glass.'
                ],
                hint: 'Para un milkshake primero usamos la licuadora.',
                explain: 'Orden correcto: Pour, Add, Mix, Serve.'
            }
        ]
    },
    {
        id: 16,
        title: 'Recipe Builder',
        subtitle: 'Armar una receta escrita',
        world: 'Recipe Harbor',
        icon: '🍓',
        kind: 'builder',
        steps: [
            {
                type: 'builder',
                prompt: 'Elegí SOLO los ingredientes para Fruit Salad.',
                ingredients: [
                    'apple',
                    'banana',
                    'orange',
                    'kiwi',
                    'strawberries'
                ],
                instructions: [
                    'Wash the fruit.',
                    'Chop the banana.',
                    'Mix everything.'
                ],
                wrongItems: [
                    'Peel the apple.',
                    'Pour the juice.',
                    'Chill the salad.'
                ],
                hint: 'Ingredientes son cosas/comidas, no acciones.'
            },
            {
                type: 'builder',
                prompt: 'Elegí SOLO los ingredientes para Vanilla Milkshake.',
                ingredients: [
                    'milk',
                    'vanilla ice cream',
                    'vanilla extract',
                    'cherry'
                ],
                instructions: [
                    'Pour the milk.',
                    'Mix everything.'
                ],
                wrongItems: [
                    'Add the ice cream.',
                    'Serve in a glass.',
                    'Wash the fruit.'
                ],
                hint: 'Ingredientes son cosas que van en la receta.'
            }
        ]
    },
    {
        id: 17,
        title: 'Reading Poems',
        subtitle: 'Poemas sobre comida',
        world: 'Reading Kingdom',
        icon: '📘',
        kind: 'mock',
        steps: [
            {
                type: 'mock',
                textTitle: 'Text A - Muffins Poem',
                text: [
                    'Crack the eggs,',
                    'Pour the milk,',
                    'Add the flour,',
                    'Mix it quick.',
                    'Bake the muffins,',
                    'Warm and yummy!'
                ],
                questions: [
                    {
                        type: 'choice',
                        prompt: 'The poem is about...',
                        options: [
                            'playing',
                            'Baking',
                            'a birthday party'
                        ],
                        answer: 'Baking',
                        hint: 'Menciona bake y muffins.',
                        explain: 'El poema es sobre Baking.'
                    },
                    {
                        type: 'choice',
                        prompt: 'It is a recipe for...',
                        options: [
                            'muffins',
                            'fruit salad',
                            'sandwich'
                        ],
                        answer: 'muffins',
                        hint: 'La palabra muffins aparece en el texto.',
                        explain: 'Es una receta para muffins.'
                    },
                    {
                        type: 'choice',
                        prompt: 'Find one word that shows the food is good.',
                        options: [
                            'yummy',
                            'eggs',
                            'flour'
                        ],
                        answer: 'yummy',
                        hint: 'Yummy significa delicioso.',
                        explain: 'Yummy muestra que la comida es rica.'
                    },
                    {
                        type: 'choice',
                        prompt: 'Find one tricky word.',
                        options: [
                            'the',
                            'flour',
                            'muffins'
                        ],
                        answer: 'the',
                        hint: 'The está en la lista de tricky words.',
                        explain: 'The es tricky word.'
                    }
                ]
            }
        ]
    },
    {
        id: 18,
        title: 'Reading Recipes 1',
        subtitle: 'Vanilla Milkshake',
        world: 'Reading Kingdom',
        icon: '🥤',
        kind: 'mock',
        steps: [
            {
                type: 'mock',
                textTitle: 'Text B - Vanilla Milkshake',
                text: [
                    'Title: Vanilla Milkshake',
                    'Ingredients: 2 scoops of vanilla ice cream, milk, vanilla extract, whipped cream, cherry.',
                    'Instructions:',
                    '1. Pour the milk into the blender.',
                    '2. Add the ice cream and vanilla extract.',
                    '3. Mix everything.',
                    '4. Pour into a tall glass.',
                    '5. Serve with a cherry.'
                ],
                questions: [
                    {
                        type: 'choice',
                        prompt: 'Which is an ingredient?',
                        options: [
                            'milk',
                            'pour',
                            'serve'
                        ],
                        answer: 'milk',
                        hint: 'Ingredient = cosa que necesito.',
                        explain: 'Milk es ingrediente.'
                    },
                    {
                        type: 'choice',
                        prompt: 'How many scoops of ice cream do you need?',
                        options: [
                            '2 scoops',
                            '3 lemons',
                            '1 plate'
                        ],
                        answer: '2 scoops',
                        hint: 'Está en Ingredients.',
                        explain: 'You need 2 scoops.'
                    },
                    {
                        type: 'choice',
                        prompt: 'Why are Pour, Add, Mix and Serve important?',
                        options: [
                            'They tell us what to do',
                            'They are ingredients',
                            'They are colors'
                        ],
                        answer: 'They tell us what to do',
                        hint: 'Son cooking verbs.',
                        explain: 'Son instrucciones/acciones.'
                    }
                ]
            }
        ]
    },
    {
        id: 19,
        title: 'Reading Recipes 2',
        subtitle: 'Sandwich + Lemonade',
        world: 'Reading Kingdom',
        icon: '🥪',
        kind: 'mock',
        steps: [
            {
                type: 'mock',
                textTitle: 'Text B - Healthy Sandwich',
                text: [
                    'Ingredients: bread, mayonnaise, ham, cheese, tomato, lettuce.',
                    'Instructions:',
                    '1. Slice the bread.',
                    '2. Spread mayonnaise.',
                    '3. Add ham and cheese.',
                    '4. Put vegetables on the sandwich.',
                    '5. Serve on a plate.'
                ],
                questions: [
                    {
                        type: 'choice',
                        prompt: 'How many slices of ham do you need?',
                        options: [
                            '2 slices of ham',
                            '3 lemons',
                            '1 glass'
                        ],
                        answer: '2 slices of ham',
                        hint: 'Buscá ham en ingredients.',
                        explain: 'La respuesta es 2 slices of ham.'
                    },
                    {
                        type: 'choice',
                        prompt: 'Which word is a cooking verb?',
                        options: [
                            'Slice',
                            'lettuce',
                            'tomato'
                        ],
                        answer: 'Slice',
                        hint: 'Un cooking verb es una acción.',
                        explain: 'Slice = cortar en rodajas.'
                    },
                    {
                        type: 'choice',
                        prompt: 'Which is kitchen equipment?',
                        options: [
                            'plate',
                            'ham',
                            'healthy'
                        ],
                        answer: 'plate',
                        hint: 'Equipment/utensil = herramienta de cocina.',
                        explain: 'Plate = plato.'
                    }
                ]
            },
            {
                type: 'mock',
                textTitle: 'Text B - Fresh Lemonade',
                text: [
                    'Ingredients: 3 lemons, cold water, sugar, ice cubes, mint leaves.',
                    'Instructions:',
                    '1. Cut the lemons in half.',
                    '2. Squeeze the juice.',
                    '3. Add sugar and stir.',
                    '4. Pour in cold water.',
                    '5. Taste your lemonade.'
                ],
                questions: [
                    {
                        type: 'choice',
                        prompt: 'How many lemons do you need?',
                        options: [
                            '3 lemons',
                            '2 eggs',
                            '1 banana'
                        ],
                        answer: '3 lemons',
                        hint: 'Está en Ingredients.',
                        explain: 'You need 3 lemons.'
                    },
                    {
                        type: 'choice',
                        prompt: 'Which is an instruction?',
                        options: [
                            'Squeeze the juice.',
                            '3 lemons',
                            'ice cubes'
                        ],
                        answer: 'Squeeze the juice.',
                        hint: 'Empieza con un verbo.',
                        explain: 'Squeeze the juice es una instrucción.'
                    },
                    {
                        type: 'choice',
                        prompt: 'What does Squeeze mean?',
                        options: [
                            'Exprimir',
                            'Hornear',
                            'Pelar'
                        ],
                        answer: 'Exprimir',
                        hint: 'Se hace con limones.',
                        explain: 'Squeeze = exprimir.'
                    }
                ]
            }
        ]
    },
    {
        id: 20,
        title: 'Mid-Term Challenge',
        subtitle: 'Reading + Writing final',
        world: 'Big Ben Challenge',
        icon: '🏆',
        kind: 'choice',
        steps: [
            {
                type: 'choice',
                prompt: 'Ingredients are...',
                spanish: 'Los ingredientes son...',
                options: [
                    'things we need',
                    'steps we follow',
                    'sounds'
                ],
                answer: 'things we need',
                hint: 'Ingredientes = cosas.',
                explain: 'Ingredients are things we need.'
            },
            {
                type: 'choice',
                prompt: 'Instructions usually start with...',
                spanish: 'Las instrucciones suelen empezar con...',
                options: [
                    'a cooking verb',
                    'a color',
                    'a number only'
                ],
                answer: 'a cooking verb',
                hint: 'Ej: Wash, Mix, Pour.',
                explain: 'Instructions start with action verbs.'
            },
            {
                type: 'choice',
                prompt: 'Choose the correct sentence.',
                spanish: 'Elegí la oración correcta.',
                options: [
                    'An apple is sweet.',
                    'A apple is sweet.',
                    'Apple an is sweet.'
                ],
                answer: 'An apple is sweet.',
                hint: 'Apple empieza con vocal.',
                explain: 'Correcto: An apple is sweet.'
            },
            {
                type: 'choice',
                prompt: 'Choose the correct recipe part for: Mix everything.',
                spanish: 'Elegí la parte correcta.',
                options: [
                    'Instructions',
                    'Ingredients',
                    'Title'
                ],
                answer: 'Instructions',
                hint: 'Mix es una acción.',
                explain: 'Mix everything va en Instructions.'
            },
            {
                type: 'choice',
                prompt: 'strawberry →',
                spanish: 'Plural correcto',
                options: [
                    'strawberries',
                    'strawberrys',
                    'strawberryes'
                ],
                answer: 'strawberries',
                hint: 'Y cambia a IES.',
                explain: 'strawberry → strawberries.'
            }
        ]
    }
];
function loadProgress() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = JSON.parse(localStorage.getItem('piliEnglishProgressV3') || '{}');
        return {
            ...defaultProgress,
            ...raw,
            englishStars: {
                ...defaultProgress.englishStars,
                ...raw.englishStars || {}
            }
        };
    } catch  {
        return defaultProgress;
    }
}
function playSound(type = 'ok') {
    try {
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = type === 'ok' ? 760 : type === 'bad' ? 160 : type === 'win' ? 960 : 520;
        gain.gain.value = 0.045;
        osc.start();
        setTimeout(()=>{
            osc.stop();
            ctx.close();
        }, type === 'bad' ? 260 : 150);
    } catch  {}
}
function Page() {
    _s();
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('home');
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultProgress);
    const [activeLevel, setActiveLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [stepIndex, setStepIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mockIndex, setMockIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sequence, setSequence] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [builderSelected, setBuilderSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [canUnderstand, setCanUnderstand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>setProgress(loadProgress())
    }["Page.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            localStorage.setItem('piliEnglishProgressV3', JSON.stringify(progress));
        }
    }["Page.useEffect"], [
        progress
    ]);
    const currentStep = activeLevel?.steps[stepIndex];
    const currentQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Page.useMemo[currentQuestion]": ()=>{
            if (!currentStep) return null;
            if (currentStep.type === 'mock') return currentStep.questions[mockIndex];
            return currentStep;
        }
    }["Page.useMemo[currentQuestion]"], [
        currentStep,
        mockIndex
    ]);
    function openEnglishMap() {
        setScreen('englishMap');
        setActiveLevel(null);
    }
    function startLevel(level) {
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
    function choose(answer) {
        if (!currentQuestion || !('answer' in currentQuestion)) return;
        setSelected(answer);
        if (answer === currentQuestion.answer) {
            playSound('ok');
            setFeedback('✅ ¡Muy bien! Ahora tocá Entendí.');
            setCanUnderstand(true);
        } else {
            playSound('bad');
            setErrors((e)=>e + 1);
            setFeedback('❌ Hay un error. ' + currentQuestion.hint);
            setCanUnderstand(false);
        }
    }
    function selectSequence(item) {
        if (!currentStep || currentStep.type !== 'sequence') return;
        if (sequence.includes(item)) return;
        const next = [
            ...sequence,
            item
        ];
        setSequence(next);
        if (next.length === currentStep.answer.length) {
            const ok = next.every((v, i)=>v === currentStep.answer[i]);
            if (ok) {
                playSound('ok');
                setFeedback('✅ Orden correcto. Tocá Entendí.');
                setCanUnderstand(true);
            } else {
                playSound('bad');
                setErrors((e)=>e + 1);
                setFeedback('❌ El orden no está bien. ' + currentStep.hint);
                setCanUnderstand(false);
            }
        } else {
            setFeedback('Seguí tocando las instrucciones en orden.');
        }
    }
    function toggleBuilder(item) {
        if (!currentStep || currentStep.type !== 'builder') return;
        const next = builderSelected.includes(item) ? builderSelected.filter((x)=>x !== item) : [
            ...builderSelected,
            item
        ];
        setBuilderSelected(next);
        const correct = currentStep.ingredients;
        const ok = correct.every((x)=>next.includes(x)) && next.every((x)=>correct.includes(x));
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
        setErrors((e)=>e + 1);
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
            setMockIndex((i)=>i + 1);
            setSelected('');
            setFeedback('Siguiente pregunta del Mock Reading.');
            setCanUnderstand(false);
            return;
        }
        if (stepIndex < activeLevel.steps.length - 1) {
            const next = activeLevel.steps[stepIndex + 1];
            setStepIndex((i)=>i + 1);
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
        setProgress((p)=>({
                ...p,
                stars: p.stars + 3,
                coins: p.coins + 50,
                englishUnlocked: Math.max(p.englishUnlocked, activeLevel.id + 1),
                englishStars: {
                    ...p.englishStars,
                    [activeLevel.id]: 3
                }
            }));
        setScreen('englishMap');
        setActiveLevel(null);
    }
    function retryLevel() {
        if (activeLevel) startLevel(activeLevel);
    }
    if (screen === 'home') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "homeScreen bgHome",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hud, {
                    progress: progress
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 621,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "homeCard",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                    media: "(min-width: 1200px)",
                                    srcSet: "/assets/logo-desktop.webp"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 624,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                    media: "(min-width: 768px)",
                                    srcSet: "/assets/logo-tablet.webp"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 625,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/assets/logo-mobile.webp",
                                    alt: "Las Aventuras de Pili",
                                    className: "homeLogo"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 626,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 623,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "homeHint",
                            children: "Elegí una aventura"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 628,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "subjectButtons",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "subjectBtn math",
                                    onClick: ()=>playSound('hint'),
                                    children: [
                                        "➕ Matemáticas ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "Próximamente"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 630,
                                            columnNumber: 95
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 630,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "subjectBtn lengua",
                                    onClick: ()=>playSound('hint'),
                                    children: [
                                        "📚 Lengua ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "Próximamente"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 631,
                                            columnNumber: 93
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 631,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "subjectBtn english",
                                    onClick: openEnglishMap,
                                    children: [
                                        "🇬🇧 Inglés ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "Jugar ahora"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 632,
                                            columnNumber: 87
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 632,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 629,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 622,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 620,
            columnNumber: 12
        }, this);
    }
    if (screen === 'englishMap') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "mapScreen bgEnglish",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Top, {
                    title: "Mundo Inglés",
                    progress: progress,
                    back: ()=>setScreen('home')
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 640,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mapHeader",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "🇬🇧 Mundo Inglés"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 642,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Food · Cooking Verbs · Kitchen Equipment · Adjectives · A/AN · Plurals · Tricky Words · Phonics · Reading · Writing"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 643,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 641,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "levelMap",
                    children: levels.map((level, i)=>{
                        const unlocked = level.id <= progress.englishUnlocked;
                        const stars = progress.englishStars[level.id] || 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `levelNode pos${i % 20 + 1} ${unlocked ? 'unlocked' : 'locked'} ${stars ? 'done' : ''}`,
                            onClick: ()=>unlocked ? startLevel(level) : playSound('bad'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "nodeIcon",
                                    children: level.id
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 650,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "nodeStars",
                                    children: stars ? '⭐⭐⭐' : unlocked ? '☆☆☆' : ''
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 651,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, level.id, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 649,
                            columnNumber: 18
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 645,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "homeMini",
                    onClick: ()=>setScreen('home'),
                    children: "🏠 Casa"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 655,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 639,
            columnNumber: 12
        }, this);
    }
    if (screen === 'level' && activeLevel && currentStep) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "levelScreen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Top, {
                    title: activeLevel.title,
                    progress: progress,
                    back: ()=>setScreen('englishMap')
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 661,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "levelCard",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "levelBadge",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: activeLevel.icon
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 663,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: [
                                                "Nivel ",
                                                activeLevel.id
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 663,
                                            columnNumber: 73
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: activeLevel.world
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 663,
                                            columnNumber: 102
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 663,
                                    columnNumber: 68
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 663,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: activeLevel.title
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 664,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "subtitle",
                            children: activeLevel.subtitle
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 665,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepView, {
                            step: currentStep,
                            mockIndex: mockIndex,
                            selected: selected,
                            sequence: sequence,
                            builderSelected: builderSelected,
                            onChoose: choose,
                            onSeq: selectSequence,
                            onBuild: toggleBuilder
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 666,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `feedback ${feedback.startsWith('✅') ? 'ok' : feedback.startsWith('❌') || feedback.startsWith('🔁') ? 'bad' : ''}`,
                            children: feedback
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 667,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "actionBtn hint",
                                    onClick: showHint,
                                    children: "💡 Pista"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 669,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "actionBtn solution",
                                    onClick: showSolution,
                                    children: "✅ Solución"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 670,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "actionBtn retry",
                                    onClick: retryLevel,
                                    children: "🔄 Reiniciar"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 671,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "actionBtn understand",
                                    disabled: !canUnderstand,
                                    onClick: nextStep,
                                    children: "👍 Entendí"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 672,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 668,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 662,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 660,
            columnNumber: 12
        }, this);
    }
    return null;
}
_s(Page, "7esPgB+g9xYTberi6ziUzE94LX0=");
_c = Page;
function StepView({ step, mockIndex, selected, sequence, builderSelected, onChoose, onSeq, onBuild }) {
    if (step.type === 'theory') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "theory",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: step.title
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 693,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "theoryGrid",
                    children: step.blocks.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "theoryBox",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: b.en
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 694,
                                    columnNumber: 97
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: b.es
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 694,
                                    columnNumber: 110
                                }, this),
                                b.example && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: b.example
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 694,
                                    columnNumber: 143
                                }, this)
                            ]
                        }, b.en, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 694,
                            columnNumber: 59
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 694,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 692,
            columnNumber: 12
        }, this);
    }
    if (step.type === 'mock') {
        const q = step.questions[mockIndex];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mockText",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: step.textTitle
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 700,
                            columnNumber: 33
                        }, this),
                        step.text.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: line
                            }, line, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 700,
                                columnNumber: 81
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 700,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceQuestion, {
                    q: q,
                    selected: selected,
                    onChoose: onChoose
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 701,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true);
    }
    if (step.type === 'sequence') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "question",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: step.prompt
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 706,
                            columnNumber: 33
                        }, this),
                        step.spanish && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            children: step.spanish
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 706,
                            columnNumber: 70
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 706,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sequenceSlots",
                    children: step.answer.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: sequence[i] || `${i + 1}`
                        }, i, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 707,
                            columnNumber: 65
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 707,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "options",
                    children: step.options.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `option ${sequence.includes(o) ? 'selected' : ''}`,
                            onClick: ()=>onSeq(o),
                            children: o
                        }, o, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 708,
                            columnNumber: 57
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 708,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 705,
            columnNumber: 12
        }, this);
    }
    if (step.type === 'builder') {
        const allItems = [
            ...step.ingredients,
            ...step.wrongItems
        ];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "question",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: step.prompt
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 714,
                        columnNumber: 33
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 714,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "options",
                    children: allItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `option ${builderSelected.includes(item) ? 'selected' : ''}`,
                            onClick: ()=>onBuild(item),
                            children: item
                        }, item, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 715,
                            columnNumber: 56
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 715,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 713,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceQuestion, {
        q: step,
        selected: selected,
        onChoose: onChoose
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 718,
        columnNumber: 10
    }, this);
}
_c1 = StepView;
function ChoiceQuestion({ q, selected, onChoose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "question",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: q.prompt
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 723,
                        columnNumber: 31
                    }, this),
                    q.spanish && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: q.spanish
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 723,
                        columnNumber: 62
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 723,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "options",
                children: q.options.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `option ${selected === o ? o === q.answer ? 'correct' : 'wrong' : ''}`,
                        onClick: ()=>onChoose(o),
                        children: o
                    }, o, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 725,
                        columnNumber: 29
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 724,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 722,
        columnNumber: 10
    }, this);
}
_c2 = ChoiceQuestion;
function Top({ title, progress, back }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "topBar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: back,
                children: "←"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 732,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                children: title
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 733,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hud, {
                progress: progress
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 734,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 731,
        columnNumber: 10
    }, this);
}
_c3 = Top;
function Hud({ progress }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hud",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "❤️ ",
                    progress.lives
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 739,
                columnNumber: 31
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "🪙 ",
                    progress.coins
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 739,
                columnNumber: 63
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "⭐ ",
                    progress.stars
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 739,
                columnNumber: 95
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "💎 ",
                    progress.gems
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 739,
                columnNumber: 126
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 739,
        columnNumber: 10
    }, this);
}
_c4 = Hud;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Page");
__turbopack_context__.k.register(_c1, "StepView");
__turbopack_context__.k.register(_c2, "ChoiceQuestion");
__turbopack_context__.k.register(_c3, "Top");
__turbopack_context__.k.register(_c4, "Hud");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_1avurmf._.js.map