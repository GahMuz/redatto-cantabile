# L'histoire sans début — consignes de travail

Ce dépôt accompagne un roman en cours. Répondre en français. L'auteur garde la direction artistique ; les outils de suivi doivent servir l'écriture et accepter les réécritures.

## Entrée dans une séance

Lire `suivi/etat.md`, `bible/style.md` et les décisions actives dans `suivi/decisions.md`. Utiliser `manuscrit/index.md` et `bible/index.md` pour trouver les seuls chapitres et fiches pertinents. Ne pas charger toute la bibliothèque à chaque demande. Relire le texte intégral des scènes dont une action, une révélation ou une formulation dépend ; un résumé sert à retrouver un passage, pas à le remplacer.

Avant de préparer, écrire, réécrire ou contrôler une scène, consulter les entrées pertinentes de `bible/chronologie.md`, référence consolidée : passé, journées, événements parallèles, acquisition du savoir et échéances. Après import ou modification, actualiser les entrées affectées. Une date contradictoire reste signalée jusqu'à arbitrage ; ne pas choisir silencieusement une année ni transformer une action annoncée en événement accompli.

## Procédures du dépôt

Les compétences sont conservées dans `skills/` pour être versionnées et lisibles. Elles ne nécessitent aucun service externe. Lire la procédure correspondant à la demande avant de l'exécuter :

- Importer une conversation, des chapitres ou des préférences : `skills/importer-roman/SKILL.md`.
- Écrire, réécrire ou actualiser la mémoire après une modification : `skills/ecrire-roman/SKILL.md`.
- Relire, contrôler la cohérence ou rechercher les conséquences d'une réécriture : `skills/controler-roman/SKILL.md`.
- Organiser la critique de cohérence, du fond et de la forme : `skills/critiquer-roman/SKILL.md`.

## Contrôle critique automatique

L'auteur a demandé plusieurs agents critiques le 6 octobre 2026. Après un nouvel import de prose ou une modification substantielle du manuscrit, appliquer `skills/critiquer-roman/SKILL.md` dans la séance : trois lectures indépendantes si la délégation est disponible, puis une synthèse arbitrée. Contrôle ciblé des modifications et de leurs dépendances ; audit intégral sur demande, chapitre achevé ou changement de structure. Ne pas déclencher pour les seules fiches, rapports ou corrections typographiques. Ne pas réécrire le roman à partir des rapports sans demande de l'auteur. Ce routage ne constitue pas une surveillance en arrière-plan.

Ces chemins sont un routage explicite depuis AGENTS.md. Ne pas prétendre que les skills sont inscrits dans le sélecteur de l'application : la découverte native de skills locaux utilise `.agents/skills`.

## Principes de travail littéraire

Avant d'écrire ou de critiquer, lire `rules/ecriture.md` : contraintes et vérifications ordinaires avant révélations, fonction dramatique des scènes, intelligences et voix distinctes, lecture des chapitres assemblés et révision dans l'ordre des dépendances. Cette référence contient la méthode ; les compétences organisent son application et le suivi. Préserver les réactions précises de l'auteur et les réussites du texte. Les propositions de biais des personnages restent à choisir, pas à intégrer comme faits. Une demande « la suite » n'oblige pas à fabriquer une nouvelle chute.

## Autorité et incertitudes

Les consignes actuelles de l'auteur priment. Une décision explicite peut rendre le manuscrit obsolète : signaler alors les passages à mettre en accord. Pour décrire ce qui est actuellement écrit, les chapitres actifs priment sur les fiches dérivées. Une contradiction entre décision et texte doit rester visible jusqu'à sa résolution.

Séparer : **décision de l'auteur**, **fait écrit**, **hypothèse**, **proposition**, **abandonné**. Un brouillon actif n'est pas pour autant approuvé par l'auteur. Une réponse de l'assistant, un nom imprimé dans un document fictif ou l'affirmation d'un personnage ne constituent pas automatiquement une vérité du monde.

Chaque fait de fiche doit renvoyer à sa source : chapitre et scène, ou message de l'auteur identifié dans un import. Laisser les inconnues ouvertes. Ne pas inventer une date, une motivation, un secret ou une résolution pour compléter un formulaire.

Conserver les identifiants stables des chapitres et scènes quand leur ordre change. Les sources importées et variantes abandonnées ne sont jamais utilisées comme version active par défaut. Préserver les sources brutes ; modifier le manuscrit actif uniquement dans le périmètre demandé. Pour les réécritures majeures, préserver la version précédente dans Git si elle est déjà enregistrée, sinon dans `archives/`, avec une référence dans le journal des décisions.

## Fin de séance

Après une modification du texte, actualiser les fiches concernées, la chronologie, les fils narratifs et les index. Invalider les anciens faits dont la scène source a changé ; ne pas seulement ajouter les nouveaux. Actualiser `suivi/etat.md` avec le travail effectué, les points ouverts et les lectures nécessaires à la reprise. Distinguer clairement les fichiers modifiés et ce qui reste à vérifier.

Les demandes de contrôle produisent un rapport étayé ; elles ne donnent pas à elles seules l'autorisation de réécrire le manuscrit. Git conserve les versions enregistrées, mais la création de fichiers n'est pas un commit. Ne pas annoncer une sauvegarde Git ou une synchronisation ChatGPT sans l'avoir effectivement effectuée.
