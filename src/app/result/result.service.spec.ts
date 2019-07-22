import { TestBed, fakeAsync } from '@angular/core/testing';
import { ResultService } from './result.service';
import { ResultModel } from './model/result.model';

describe('ResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  let resultService: ResultService;

  it('should be created', () => {
    resultService = TestBed.get(ResultService);
    expect(resultService).toBeTruthy();
  });


  /* step 1 : initialisation du projet avec 0 et 1 resultat */
  it('devrait être initialisé avec une liste de résultat vide',
    fakeAsync(() => {
      expect(resultService.getAllResult()).toEqual([]);
    })
  );

  describe("aprés l'ajout d'un résultat,", () => {
    beforeEach(() => {
      const result: ResultModel = {id: 46,idOwner:76,idRecipients:[42],isSeen:false,eventResults:[],contentOfResult:"Test"};
      resultService = new ResultService();
      resultService.addResult(result);
    });

    it('devrait avoir une liste de 1 résultat non vue',
      fakeAsync(() => {
        expect(resultService.getAllResult().length).toEqual(1);
      })
    );

    it('devrait avoir une liste de 1 résultat vue aprés la vision de ce résultat',
      fakeAsync(() => {
        resultService.seenResult(46);
        expect(resultService.getAllResultSeen().length).toEqual(1);
        expect(resultService.getAllResult()[0].isSeen).toEqual(true);
      })
    );
  });

  /* step 2 : 3 resultats */
  describe("aprés l'ajout de 3 resultats,", () => {

    beforeEach(() => {
      // init le service avec 3 resultats
       const resultOne: ResultModel = {
         id: 46,
         idOwner: 76,
         idRecipients: [42],
         isSeen: false,
         eventResults: [],
         contentOfResult: 'Test',
       };
       const resultTwo: ResultModel = {
         id: 47,
         idOwner: 77,
         idRecipients: [43],
         isSeen: false,
         eventResults: [],
         contentOfResult: 'Test',
       };
       const resultTree: ResultModel = {
         id: 48,
         idOwner: 78,
         idRecipients: [44],
         isSeen: false,
         eventResults: [],
         contentOfResult: 'Test',
       };

       resultService = new ResultService();
       resultService.addResult(resultOne);
       resultService.addResult(resultTwo);
       resultService.addResult(resultTree);
    });

    it("devrait avoir une liste de 3 resultats non vue aprés l\'ajout de 3 resultat.",
      fakeAsync(() => {
        expect(resultService.getAllResult().length).toEqual(3);
        for (const result of resultService.getAllResult()) {
          expect(result.isSeen).toEqual(false);
        }
      })
    );

    it("ne devrait pas autoriser l'ajout d'un résultat avec un id existant",
      fakeAsync(() => {
           const resultFour: ResultModel = {
             id: 48,
             idOwner: 78,
             idRecipients: [44],
             isSeen: false,
             eventResults: [],
             contentOfResult: 'Test',
           };
           expect(resultService.addResult(resultFour)).toEqual(
             false
           );
      })
    );

    it("devrait avoir 1 resultats vue dans la liste aprés la vision d\'un resultat",
      fakeAsync(() => {
        resultService.seenResult(46);
        expect(resultService.getAllResultSeen().length).toEqual(1);
      })
    );

    it("devrait avoir les 3 resultats vue dans la liste aprés qu\'il soit tous vue",
      fakeAsync(() => {
        resultService.seenResult(46);
        resultService.seenResult(47);
        resultService.seenResult(48);

        expect(resultService.getAllResultSeen().length).toEqual(3);
      })
    );

    it("devrait avoir plus que 2 resultats vue dans la liste aprés qu\'il soit tous vue puis 1 ou la vue est enlevé",
      fakeAsync(() => {
        resultService.seenResult(46);
        resultService.seenResult(47);
        resultService.seenResult(48);
        resultService.unseenResult(48);
        expect(resultService.getAllResultSeen().length).toEqual(2);
      })
    );

    it("ne devrait pas planté aprés la vision d\'un resultat non ajouté",
      fakeAsync(() => {
       expect(resultService.seenResult(60)).toEqual(false);
      })
    );
  });


  /* step 3 (evenement) */
  describe(",aprés l\'ajout de 3 resultats,", () => {

    beforeEach(() => {
      // init le service avec 3 resultats (doit etre identique que le step 2)
          const resultOne: ResultModel = {
            id: 46,
            idOwner: 76,
            idRecipients: [42],
            isSeen: false,
            eventResults: [],
            contentOfResult: 'Test',
          };
          const resultTwo: ResultModel = {
            id: 47,
            idOwner: 77,
            idRecipients: [43],
            isSeen: false,
            eventResults: [],
            contentOfResult: 'Test',
          };
          const resultTree: ResultModel = {
            id: 48,
            idOwner: 78,
            idRecipients: [44],
            isSeen: false,
            eventResults: [],
            contentOfResult: 'Test',
          };

          resultService = new ResultService();
          resultService.addResult(resultOne);
          resultService.addResult(resultTwo);
          resultService.addResult(resultTree);
    });

    //ps : je ne veux pas que les event de création soi initialisé dans le beforeEach ci dessus mais directement dans le resultService
    it("devrait avoir la list des résultat dans l\'order de création ( en se basant sur les events de création)",
      fakeAsync(() => {
        let timeIntermediaire = 0;
        let testAscendentTime = true;
        for (const item of resultService.getAllResult()) {
          testAscendentTime =
            testAscendentTime &&
            timeIntermediaire <
              item.eventResults[0].createdAt.getTime();
          timeIntermediaire = item.eventResults[0].createdAt.getTime();
        }

        expect(testAscendentTime).toEqual(true);
      })
    );

    it("devrait avoir 1 event a la date de maintenant quand 1 résultat est vue",
      fakeAsync(() => {
         resultService.seenResult(46);

         const testSeendateEqualNow =
           resultService
             .getAllResultSeen()[0]
             .eventResults.filter(result => result.id === 'seen')[0]
             .createdAt.getTime() -
             Date.now() <
           10;

         expect(testSeendateEqualNow).toEqual(true);
      })
    );

    it("devrait avoir 2 events avec 2 dates différent aprés la vision d\'un resultat puis la suppression de la vision",
      fakeAsync(() => {
           resultService.seenResult(46);
           resultService.unseenResult(46);
           const testdateSeen = resultService
             .getAllResult()[0]
             .eventResults[1].createdAt.getTime();
           const testdateUnseen = resultService
             .getAllResult()[0]
             .eventResults[2].createdAt.getTime();
           expect(
             resultService.getAllResult()[0].eventResults.length
           ).toEqual(3); //created/seen/unseen
           expect(testdateSeen <= testdateUnseen).toEqual(true);
      })
    );

    it("devrait avoir une fonction qui retourne une liste ordonnée des resultats par rapport au dernier modifier",
      fakeAsync(() => {
     resultService.seenResult(46);

     resultService.seenResult(48);

     resultService.seenResult(47);

     resultService.unseenResult(46);

     resultService.unseenResult(47);
     let newlistresult: ResultModel[];
     newlistresult = resultService.getAllResultSortByLastModified();
     // sould return 47-46-48

     expect(newlistresult[0].id === 47).toEqual(true);
     expect(newlistresult[1].id === 46).toEqual(true);
     expect(newlistresult[2].id === 48).toEqual(true);
      })
    );

  });


  /* proposé de nouveau test */

});
