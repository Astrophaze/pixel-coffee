# Initier le projet pixel-coffe

## Pré-requis 

- WSL
- Git installé sur WSL
- Node installé sur WSL
- Angular CLI installé

## Récupérer le dépôt 

```
git clone https://github.com/Astrophaze/pixel-coffee.git
```

Puis, on va se rendre dans le dossier cloné avec 

```
cd pixel-coffee/
```

Et là on va supprimer le répertoire .git avec 

```
rm -rf .git
```

Cette action permet de couper le lien entre mon dépôt et votre projet. Vous ne pourrez donc plus pousser vos modifications sur mon dépôt, il faudra alors exécuter la commande 

```
git init
```

Et ensuite vous pourrez pousser autant de modifications que vous voudrez, mais cette fois, sur votre dépôt à vous.. 

## Démarrer le projet 

Dans le répertoire du projet, effectuer 

```
npm install
```

Puis 

```
ng serve --open
```

Vous devriez avoir votre projet qui s'ouvre sur le navigateur