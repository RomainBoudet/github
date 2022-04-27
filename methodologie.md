# Méthodologie


## Je m'occupe de React et uniquement React

* Je fais des composants presque vides et j'essaie de les afficher
* Je m'occuppe de l'affichage de ces composants (statique)
* J'identifie, crée et utilise les props attendus par chacun
* Pour vérifier que mes props fonctionnent, je peux les donner pour de faux là où j'utilise mes composants (dans <App />)

## Je m'occupe de Redux et uniqument Redux

Redux est mon gestionnaire de state. Si je veux que quoi que ce soit puisse changer dans mon interface, ça doit venir de mon state redux.

* j'installe Redux
* Je crée mon reducer pour avoir un state intial
* Je crée mon store à l'aide de ce reducer (et je l'exporte)

C'est bien beau, mais pour pouvoir utiliser ce qu'on vient de faire, je dois passer à l'étape React-Redux qui me permet de relier les 2.

## Je m'occupe de React-Redux

Pour relier Redux à mes composants React

* J'installe react-redux
* Je mets mon App dans Provider, et je donne le store à ce composant
* Je peux commencer à créer des containers pour mes composants

## Je fais mes containers

Pour rappel le job d'un container est de donner à un composant (dumb) les props dont il a besoin pour interagir avec Redux.

### Je commence par donner tout ce qui vient du state

  * Je crée le fichier container
  * j'importe la méthode "connect" et le composant à qui je veux donner les props
  * Je m'occupe pour commencer UNIQUEMENT de mapStateToProps
  * Je n'oublie d'exporter mon container ET de l'utiliser à la place du composant

### Je termine par ce qui me permet de modifier le state

Pour modifier le state, j'ai besoin de travailler dans 3 endroits:

* actions -> décris ce qui peut arriver
* reducer -> réagis à ce qui est arrivé
* container -> je dispatch (envoie) une action

1. Je commence par le fichier actions:

J'ai besoin d'exporter:

* un type d'action
* un action creator (fonction qui fabrique un objet action)
  * se poser la question: Dois-je récupérer de la data pour donner à mon reducer ? Si oui, je la met dans l'object d'action fabriqué

2. Je continue avec le reducer

* J'importe le type d'action auquel je veux réagir
* Dans le switch je traite ce type d'action pour renvoyer un nouveau state

3. Je termine avec mon container

* je commence par donner les fonctions dans les props attendus par mon composant, et je fais un simple console.log dedans
* J'importe les action creator dont j'ai besoin
* Je dispatch dans les fonctions les actions qui vont bien


#### Et je n'oublie de passer mon smart componant App et non mon container APP dans mon index.js ou je passe mon App au provider ! (si jamais j'ai passé des props a mon App..)
