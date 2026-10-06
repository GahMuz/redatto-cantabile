# L'histoire sans début

Un atelier d'écriture pour conserver le texte du roman, les choix de l'auteur et une mémoire consultable au fil des chapitres.

## Où trouver quoi

| Chemin | Usage |
| --- | --- |
| `manuscrit/` | Chapitres dans leur version de travail actuelle et index des scènes |
| `bible/` | Personnages, lieux, règles du monde, chronologie et fils narratifs |
| `bible/style.md` | Références appréciées, effets recherchés et choses à éviter |
| `suivi/decisions.md` | Choix de l'auteur, changements et conséquences |
| `suivi/etat.md` | Point de reprise d'une séance à l'autre |
| `suivi/controles/` | Rapports de relecture avec sources et périmètre |
| `sources/` | Échanges et textes importés, conservés comme pièces originales |
| `modeles/fiches.md` | Formats pour créer une fiche quand elle devient utile |
| `skills/` | Procédures d'import, d'écriture et de contrôle |
| `AGENTS.md` | Consignes de travail et chargement des procédures |

Les dossiers se remplissent à partir du contenu réel. La [V1 fournie](manuscrit/versions/v1/index.md) et sa [bible historique](bible/versions/v1/index.md) sont maintenant importées, séparément de la rédaction V2 et de ses intentions de conception. Aucun fait n'a été inventé pour compléter les inconnues.

## Premier import

Les [échanges de V2](bible/versions/v2/index.md) sont également importés : implication plus crédible des enfants, rejet des prophéties, références à La Zone du Dehors et La Horde du Contrevent, et bible secrète proposée par ChatGPT. [Trois chapitres V2](manuscrit/versions/v2/index.md) sont maintenant reçus, le III en cours ; le plan livré après « ok go » reste distinct des corrections explicites de l'auteur. Voir la [comparaison V1 → V2](bible/versions/v2/changements.md).

Le projet ChatGPT « l'histoire sans debut » et son chat « Écrire un roman fantasy intrigues » ont été repérés. Les pièces et échanges fournis par l'auteur sont importés comme V1 ; les fichiers des chapitres II et III ont une fin coupée. Le chat d'origine n'a pas été importé intégralement et V2 est la dernière rédaction reçue, au statut brouillon. Voir `sources/index.md`.

Demande possible : « Importe le chat Écrire un roman fantasy intrigues. Conserve les échanges bruts, retrouve mes préférences et les dernières versions des chapitres, puis signale les choix de version incertains. »

La dernière proposition d'un assistant n'est pas nécessairement ta version préférée. L'import sépare donc le texte, les décisions explicites et les variantes dont le statut reste incertain. Il peut avancer sans attendre sur tout ce qui est établi.

## Écrire et réécrire

Demande possible : « Continue le chapitre suivant en respectant mes dernières décisions et mets à jour la mémoire du roman. »

Avant d'écrire, l'agent relit les passages nécessaires et les fiches concernées. Après, il met à jour ce qui a changé. Si tu modifies un chapitre ancien, il recherche les conséquences sur les suivants : information connue trop tôt, objet disparu, motivation devenue incohérente, indice effacé, etc. Les intentions de scènes futures restent des propositions tant que tu ne les as pas retenues.

## Contrôler

Demande possible : « Contrôle les chapitres 1 à 3 : continuité des personnages, chronologie, indices et respect de mes préférences. Produis un rapport sans réécrire. »

Une contradiction doit montrer les deux passages en cause. Une préférence littéraire doit être distinguée d'une incohérence factuelle. Une ambiguïté voulue ou un mystère ouvert n'est pas une erreur. Le contrôle indique précisément ce qu'il a lu et ce qu'il n'a pas vérifié.

## Versions et utilisation

Git permet de retrouver les versions qui ont été enregistrées. Faire des commits aux étapes utiles : import, chapitre terminé, grande réécriture. Le premier commit rassemble l'atelier, les sources V1 et V2, les chapitres importés et leur mémoire au 6 octobre 2026. Le chapitre III reste incomplet ; ce jalon ne valide pas définitivement le brouillon. Rien n'a été publié.

Dans ce dépôt, `AGENTS.md` demande explicitement de lire les skills de `skills/`. La découverte native par Codex utilise `.agents/skills` : ces procédures ne sont donc pas promises comme entrées du sélecteur. Documentation : [Créer des skills](https://learn.chatgpt.com/docs/build-skills).

Ce dépôt devient la référence de travail pour les séances qui y ont accès. Aucune synchronisation avec le projet ChatGPT n'a été configurée. Si tu continues ailleurs, les nouveaux textes et décisions devront être importés ici pour que la mémoire reste à jour.
