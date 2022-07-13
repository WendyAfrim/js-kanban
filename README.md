# Gestionnaire de tâches en mode Kanban

## Introduction

Vous êtes dans une société qui édite des logiciels de productivité à destination des entreprises et
des grands comptes. Votre tâche est de réaliser une application Web de gestion de tâche à
destination des entreprises afin de les aider dans leur gestion quotidienne.

## Fonctionnalités

- [X] ~~Il doit être possible de se déplacer sur toutes les pages sans recharger le navigateur~~

- [X] Une page “/tasks” doit permettre de lister l’ensemble des tâches à ajouter au projet

- [X] La page “/kanban” doit permettre d’ajouter des tâches dans 4 colonnes : à planifier, en
  cours, à valider, fait

- [X] Les tâches qui sont dans la liste “/tasks” doivent apparaître dans la liste “à planifier"
  dans la page “/kanban”

- [X] Les tâches qui sont dans la colonne “en cours”, “à valider” ou “fait” ne doivent plus
  apparaître dans la liste des tâches de la page “/tasks”

- [X] Une page “/members” doit pouvoir permettre d’ajouter des membres avec un nom, un prénom, une
  adresse email et un poste professionnel

- [X] Les tâches de la page “/kanban” doivent pouvoir être déplacées avec un système de drag & drop

- [X] ~~L’état complet de l’application (membres, tâches, répartition Kanban) doit être sauvegardé
  dans le stockage du navigateur pour pouvoir y accéder malgré un rechargement ou une fermeture
  de session de navigation~~

- Une page “/tasks/:task” doit permettre de pouvoir modifier une tâche créé, l’identifiant
  “:task” est dynamique et prend l’identifiant d’une tâche

- [X] Le site doit être responsive (mobile, tablette, bureau)

- [X] Déplacer une tâche doit faire vibrer l’appareil

- Les tâches doivent être synchronisées entre onglets si plusieurs onglets sont ouverts

- [X] Un bouton doit permettre de copier le contenu d’une tâche dans le press-papier

## Contraintes :

- Le projet doit être archivé au format ZIP et uploadé sur MyGES

- Le projet doit être versionné avec Git

- Le projet doit contenir un dossier .git avec l’historique du versionning

- Tous les membres du groupe doivent participer au projet

- Les librairies externes (HTML, CSS, JavaScript) sont interdites

- Un soin doit être apporté au design de l’application

- Le projet doit être hébergé sur GitHub Pages (ou GitLab Pages) et disponible publiquement (le
  temps de la soutenance)

- Aucune technologie côté serveur n’est autorisée

- Toutes les API Web sont utilisables

- Une présentation technique de 20 minutes devra être préparée (toutes les personnes doivent
  être capable d’expliquer le code et l’application)

## Lien utiles

- [Web API DOM](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model)

- [Web API Hitory](https://developer.mozilla.org/fr/docs/Web/API/History)

- [Web API URL Pattern](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API)

- [Web API Drag and Drop](https://developer.mozilla.org/fr/docs/Web/API/HTML_Drag_and_Drop_API)

- [Web API Vibration](https://developer.mozilla.org/fr/docs/Web/API/Vibration_API)

- [Web API Broadcast Channel](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API)

- [Web API Clipboard](https://developer.mozilla.org/fr/docs/Web/API/Clipboard_API)
