# Point de reprise

Mis à jour le 6 octobre 2026.

## Dernier état reçu

V2 : trois chapitres, douze morceaux de prose importés, au statut brouillon. I « Le pendu » et II « Trois reines » sont clos dans les échanges ; III « Ce qui est écrit » est en cours et finit sur **« O »**, après « Une fois. Deux fois. ». Aucune fin reconstruite.

Quatre sources nouvelles SRC-V2-18, 19, 21 et 22 copiées à l'identique ; occurrence 20 identique à 19, non réinsérée ; échanges SRC-V2-23 transcrits. Raccords documentés dans l'index. Ancien état III préservé dans [l'archive](../archives/imports/v2/chapitre-03-avant-suite-01.md). Quinze pièces brutes V2 uniques au total, dont trois de conception. V1 et plan secret restent séparés.

## Dernières connaissances à préserver

Mara veut aider son frère à passer le concours. Teren a reçu une inéligibilité temporaire selon 14-7 ; le recours de Jon a été rejeté. L'enveloppe anonyme propose un accès aux corps techniques puis une révision après cinq ans. Teren voulait les Archives ; aucun choix final montré. Mara croit Darien expéditeur sans confirmation.

Mara a lu la circulaire publique 14-7-B, article 23, puis un registre municipal : classement de Lena maintenu, avis de levée recommandé par Vale, Oren. Elle connaît cette recommandation et a copié la référence, pas les autres recherches de Varos. Son dernier passage reste tronqué. Jon garde la décision du recours ; volume consulté interdit de sortie. Plaque familiale et matrice sont deux objets distincts.

Varos et Darien ont lu le maintien initial et les demandes de révision d'Oren, puis le mandat collectif et les 108 dossiers transférés. Accès refusé au titre d'opérations en cours : explication réelle inconnue. Atelier des Cendres visité ; matrice 771 retrouvée, portrait ancien et variantes, signe de Valdorne au revers. Ils ignorent encore le motif de la plaque possédée par Mara.

Darien reçoit le récit du bourgeon et remet une note sans nom de source, à confirmer. Mara en parle ensuite devant Delan et sa classe ; entretien demandé par l'enseignant non montré. Ni recrutement ni rébellion décidés.

Cassian reste à l'état de la fin II et des rapports indirects du début III. Causalité médicale, identité du mort et de Lysa non résolues. Le corps a été reçu à la morgue selon son employé ; il n'a pas disparu et aucune survie d'Oren n'est établie. Bon original des affiches brûlé.

## Points ouverts et prochaine étape

L'auteur demande maintenant l'envoi des ajouts D-015 et D-016 sur GitHub. Ils sont regroupés dans le jalon « Ajouter les repères de rédaction et la page de lecture ». Cette synchronisation du dépôt ne configure pas GitHub Pages ; l'affichage public de la page reste à mettre en place.

Page de lecture demandée (D-016) : `index.html` présente les trois chapitres actifs et leurs statuts, avec sommaire, navigation, réglage de taille et mode sombre. Générateur `outils/generer_lecture.py`, modèle `lecture/modele.html`, documentation README et régénération routée dans AGENTS.md. Contrôles Chromium : texte conforme aux sources, navigation, fin « O » préservée, réglages, largeur mobile et accès sans JavaScript. Le contenu HTML a été testé dans le navigateur ; l'ouverture directe en `file://` est bloquée par la politique de ce navigateur de test. Aucun manuscrit modifié, aucune nouvelle critique déclenchée, aucun commit ni publication.

Ajout demandé dans le présent échange (D-015) : douze repères généraux de rédaction intégrés à `rules/ecriture.md`, rappelés dans AGENTS.md. Cohérence, point de vue, temps, motivations, tension, scènes, résumé, dialogues, précision et rythme, dénouements, langue et réécriture ; conseils adaptables aux choix artistiques. Fichiers modifiés : méthode, AGENTS.md, décisions et présent suivi. Aucun manuscrit modifié ; aucune nouvelle critique déclenchée. Ces ajouts ne sont pas encore enregistrés dans un commit.

Consigne de travail la plus récente (D-014) : avant toute nouvelle scène, proposer plusieurs directions vraiment différentes, avec de courts résumés, puis attendre le choix de l'auteur. Possibilité de combiner ou de demander d'autres pistes. Une direction déjà choisie peut être poursuivie ; rédaction directe possible sur demande explicite. Consigne enregistrée dans AGENTS.md, méthode et compétence, incluse dans le troisième jalon Git local demandé par l'auteur ; aucun texte narratif modifié.

La demande suivante porte sur les réparations des incohérences : quatorze groupes d'alternatives et deux corrections locales proposés dans ce chat. Aucun choix reçu à ce stade, aucune solution appliquée. Le commit des consignes ne valide pas ces propositions narratives.

Importer la suite après « O » et les retours de l'auteur ; ne pas produire automatiquement une continuation pendant cette collecte. Nouveaux fils : recommandation non appliquée, recevabilité du document, autonomie de Teren, expéditeur de l'enveloppe, 108 dossiers et modèle du portrait.

Dates historiques contradictoires (53 + 17 contre 59 + 7, naissance de Teren en 62), durée jusqu'à majorité et emploi de « hier » à revoir. Notes antérieures sur les graffitis toujours ouvertes. Aucune correction de prose effectuée.

Corrections explicites actives : implication crédible des enfants, rejet des prophéties. Plan secret non individuellement approuvé ; Alessa n'apparaît pas encore. Premier jalon Git local : `3d669f5`, atelier et imports V1/V2 au 6 octobre 2026, chapitre III encore incomplet. Trois lectures critiques intégrales I–III désormais effectuées ; aucune synchronisation ChatGPT.

## Dernière demande et contrôle critique

L'auteur a demandé un contrôle du dossier et plusieurs agents critiques automatiques, en donnant l'exemple de la famille et du corps d'Oren. [Synthèse](controles/2026-10-06-synthese-critique.md), rapports indépendants et observations RC-01 à RC-10 ouverts. Priorités : identifications ordinaires et trajet du corps ; validité du procès et motif du silence d'Oren ; calendrier ; résistance à Mara ; différenciation des voix et conséquences des découvertes. La notoriété ne prouve pas que la sœur soit connue de tous, mais les neuf témoins et l'examen d'Helven rendent sa prétendue unicité injustifiée.

Sources, doublons et assemblages vérifiés conformes ; navigation mise à jour et index personnages/lieux renseignés. Pas de prose réécrite. Ces changements font partie du deuxième jalon Git local demandé par l'auteur, avec les règles d'écriture, les rapports critiques et la chronologie. La prochaine étape peut être une révision ciblée si l'auteur la demande ; poursuivre l'import reste possible.

Procédure `skills/critiquer-roman/SKILL.md` installée et routée : contrôle après ajout de prose ou modification substantielle dans une séance, trois lecteurs si disponibles, puis arbitrage. Aucun service de surveillance ni calendrier. Les rapports seuls ne déclenchent pas de relance et n'autorisent aucune réécriture automatique.

Méthode de préparation et révision désormais conservée dans `rules/ecriture.md`, appelée par AGENTS.md et les compétences concernées : contraintes, vérifications évidentes, fonction de scène, voix distinctes, lecture continue et ordre des réparations. Les biais de personnages suggérés restent des propositions. Mise à jour des instructions uniquement, sans nouvelle critique déclenchée ni modification du manuscrit ; incluse dans le deuxième jalon Git local.

## Lectures pour reprendre

Une [chronologie consolidée](../bible/chronologie.md) rassemble le passé historique, les journées J0–J4, les branches parallèles, les révélations et les échéances. Trente-cinq repères T-V2 et huit arbitrages A-T suivis. Année présente, date de mort d'Aldren et déictiques contradictoires laissés ouverts ; passage après minuit distingué du jour de la pendaison. Consultation routée depuis AGENTS.md, méthode et compétences. Incluse dans le deuxième jalon Git local demandé par l'auteur ; aucune prose modifiée ni publication en ligne.

[Manuscrit et scènes](../manuscrit/versions/v2/index.md), [chronologie de référence](../bible/chronologie.md), [dernière mémoire du chapitre III](../bible/versions/v2/texte/suite-chapitre-03-decret.md), [synthèse critique](controles/2026-10-06-synthese-critique.md), décisions et style. Relire les scènes intégrales avant de poursuivre ou de trancher un fait ; ne pas utiliser le plan secret comme savoir des personnages.
