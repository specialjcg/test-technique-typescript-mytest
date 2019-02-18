type IdUser = number

const loggedUser:IdUser = 42;

interface EventResult {
  id:String; // received | seen
  idOwner:number;
  createdAt:Date;
}
interface Result {
  id : number;
  idOwner :number;
  idRecipients:number[];
  isSeen:boolean;
  eventResults:[]; // EventResult
  contentOfResult:String;
}

class ResultHandler {

  _resultSeen:Array<any> = new Array()
  _resultNoSeen:Array<any> = new Array()

  public seenResult(idResult:number):ResultHandler {
    return null;
  }

  public unseenResult(idResult:number):ResultHandler {
    return null;
  }

  public static initializeResults(results:Array<Result>):ResultHandler {
    //
    return null;
  }

}

const results:Array<Result> = [];

function main(){



  console.log(results);
  const rh = ResultHandler
  .initializeResults(results)
  console.log(rh)

  rh.seenResult(1)
  .seenResult(2)
  .seenResult(3)
  .unseenResult(2)

  console.log(rh)





}

main()


/**
 * Bienvenue dans le test technique pour Ubilab.
 *
 * Veuillez suivre les étapes, pour chaque étape veuillez suivre la nomemclature des branches git suivantes.
 * feature/etape_1
 * feature/etape_2
 * pour chaque étape veuillez reprendre le code de l'étape précédente
 * Merci de forker le repo et d'envoyer votre lien github à guillaume@ubilab.io.
 */

 /**
  * Etape 1
  * Fortifier le code de la classe RESULT en utilisant le pouvoir des types.
  * BONUS : Expliquez en quoi le typage fort peux nous aider.
  * Répondre en dessous de ce commentaire.
  */

  /**
   * Etape 2
   * Lier Result et EventResult, un EventResult est un état qui permet de savoir si un résultat à été vue / pas vu.
   * PS : Peut être l'avez vous fait lors de l'étape 1 à ce moment la passer à la 2
   */

  /**
   * Etape 3
   * Implementer initializeResults / seenResult / unseenResult. ATTENTION des erreurs de types ont pu se glisser.
   *
   * initializeResults :
   * Doit initialiser un ResultHandler avec son stockage interne (les listes resultSeen et resultNoSeen)
   *
   * seenResult :
   * Doit mettre le résultat au bon status, logger l'évènement puis transférer le résultat dans la bonne liste.
   *
   * unseenResult :
   * Doit mettre le résultat au bon status, logger l'évènement puis transférer le résultat dans la bonne liste.
   */

   /**
    * Etape 4
    * Rendre immutable toutes les méthodes. elever toutes les variables let et les remplacer par des const.
    * Ne pas faire de fonction de plus de 25 lignes.
    * Enlever tous les commentaires de votre code (un code bien nommé n'a pas besoin de commentaire)
    */
/**
 * Consigne général :
 *  vous pouvez modifier tout le code sauf la méthode main.
 *  vous pouvez laisser les log de la console afin que l'on puisse executer la méthode.
 */
