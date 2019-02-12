import { Post } from './post';

let posts: Array<Post> = [];

var post: Post = { title: "Les avantages du bonheur",
                    content: "De nombreuses études démontrent les bénéfices d’un état d’esprit positif. Les personnes optimistes développent des compétences supérieures aux personnes négatives. Au travail, ce seront des salariés qui proposent des idées novatrices et qui savent saisir des opportunités. Ce sont des collègues sociaux, qui favorisent l’ambiance collective. Ils sont aussi plus productifs et plus performants. Toutes ces qualités favoriseront leur succès.",
                    loveIts: 3,
                    created_at: new Date('December 17, 2018 14:24:00')
                  };
posts.push(post);

var post: Post = { title: "Le Fulcrum",
                    content: "Nous interprétons les signaux selon un schéma attendu, une habitude intellectuelle ou des stéréotypes. Les filles sont mauvaises en maths par exemple. Or il suffirait de modifier sa perception et ses attentes pour avoir des résultats positifs. Au lieu de penser que votre collègue va encore proposer une mauvaise idée, croyez en son potentiel (on n’est jamais à l’abri d’une surprise). Sinon, on a oublié ce qu’était le Fulcrum.",
                    loveIts: 1,
                    created_at: new Date('January 17, 2018 12:24:00')
                  };
posts.push(post);


var post: Post = { title: "L’effet Tetris",
                    content: "Tetris est un jeu vidéo addictif, certains joueurs devenaient littéralement obsédés au point d’avoir des difficultés à penser à autre chose. L’effet Tetris peut donc se traduire par une focalisation de notre cerveau sur certaines choses, jusqu’à occulter tout le reste. Au boulot, nous ne voyons que le stress, la charge de travail, les râlements… Il faut donc être plus sensible aux signaux positifs, d’autant plus que ce serait un cercle vertueux.",
                    loveIts: -3,
                    created_at: new Date('January 23, 2019 10:24:00')
                  };
posts.push(post);

var post: Post = { title: "Rebondir",
                    content: "Les échecs sont incontournables alors qu’ils sont souvent vécus négativement. C’est pourtant l’opportunité d’apprendre ou de s’orienter vers d’autres pistes plus avantageuses. En quoi les difficultés font partie de l’apprentissage d’une personne ? La différence entre vous et vos collègues qui râlent sans cesse sur leur sort.",
                    loveIts: 4,
                    created_at: new Date('December 17, 2019 09:24:00')
                  };
posts.push(post);

var post: Post = { title: "Le cercle de Zorro",
                    content: "A ses débuts, Zorro était une chochotte remplie d’enthousiasme. Puis il a rencontré un maitre qui a canalisé son énergie pour progresser étape par étape. Chaque petit pas est un succès qu’il ne faut pas sous-estimer, c’est ce qui fait avancer plus loin et plus fort. Vous visez un objectif ambitieux ? Excellent ! Découpez votre projet en petites étapes accessibles.",
                    loveIts: -2,
                    created_at: new Date('December 17, 2019 08:24:00')
                  };
posts.push(post);

var post: Post = { title: "La règle des vingts secondes",
                    content: "Shawn Anchor voulait apprendre à jouer de la guitare, mais les 20 secondes pour chercher la guitare dans son armoire étaient suffisantes pour le démotiver (sacrée feignasse, au passage). Le truc serait de changer ses habitudes et supprimer toute résistance pour faire les choses que l’on aime. Réfléchissez à vos objectifs, puis limitez au maximum les obstacles.",
                    loveIts: 0,
                    created_at: new Date('February 7, 2019 06:24:00')
                  };
posts.push(post);

var post: Post = { title: "L’investissement social",
                    content: "Le plus important: le soutien social de votre famille et vos amis est incontournable. Avoir de bonnes relations sociales a probablement l’effet le plus important sur sa perception du bonheur. Oubliez Facebook, l’auteur insiste sur des relations en personne. Coopérez avec vos collègues et montrez à votre boss que vous le soutenez. Laissez en revanche les relations se construire naturellement, on ne devient pas proche de son collègue en une semaine.",
                    loveIts: 1,
                    created_at: new Date('April 1, 2018 15:24:00')
                  };
posts.push(post);

var post: Post = { title: "Quelques conseils concrets",
                    content: "En vrac, voici quelques conseils du livre qui peuvent être appliqués chaque jour: accomplir des bonnes actions de façon consciente, favoriser le sourire dans l’open-space, fuir les ragots, dépenser de l’argent pour faire des expériences (et non posséder), faire du sport, penser aux prochaines vacances, méditer… Bref, tout ce qui peut générer un état d’esprit plus accueillant aux doux signaux de la vie.",
                    loveIts: 15,
                    created_at: new Date('June 28, 2018 16:24:00')
                  };
posts.push(post);

export const POSTS: Post[] = posts;
