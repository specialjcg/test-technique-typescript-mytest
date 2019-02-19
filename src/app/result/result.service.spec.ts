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
  it('devrait être initialisé avec une list de resultat vide',
    fakeAsync(() => {
      expect(resultService.getAllResult()).toEqual([]);
    })
  );

  describe(',aprés l\'ajout d\'un resultat,', () => {
    beforeEach(() => {
      const result: ResultModel = {id: 46,idOwner:76,idRecipients:[42],isSeen:false,eventResults:[],contentOfResult:"Test"}; 
      resultService = new ResultService();
      resultService.addResult(result);
    });

    it('devrait avoir une list de 1 resultat non vue',
      fakeAsync(() => {
        expect(resultService.getAllResult().length).toEqual(1);
      })
    );

    it('devrait avoir une list de 1 resultat vue aprés la vision de ce résultat',
      fakeAsync(() => {
        resultService.seenResult(46);
        expect(resultService.getAllResult().length).toEqual(1);
        expect(resultService.getAllResult()[1].isSeen).toEqual(true);
      })
    );
  });

  /* step 2 : 3 resultats */ 
  describe(',aprés l\'ajout de 3 resultats,', () => {

    beforeEach(() => {
      // init le service avec 3 resultats
    });

    it('devrait avoir une list de 3 resultats non vue aprés l\'ajout de 3 resultat.',
      fakeAsync(() => {
        expect(false).toEqual(true);
      })
    );

    it('ne devrait pas authorisé l\'ajout d\'un resultats avec un id existent',
      fakeAsync(() => {
        expect(false).toEqual(true);
      })
    );

    it('devrait avoir 1 resultats vue dans la liste aprés la vision d\'un resultat',
      fakeAsync(() => {
        expect(false).toEqual(true);
      })
    );

    it('devrait avoir les 3 resultats vue dans la liste aprés qu\'il soit tous vue',
      fakeAsync(() => {
        expect(false).toEqual(true);
      })
    );

    it('devrait avoir plus que 2 resultats vue dans la liste aprés qu\'il soit tous vue puis 1 ou la vue n\'existe plus',
      fakeAsync(() => {
        expect(false).toEqual(true);
      })
    );

    it('ne devrait pas planté aprés la vision d\'un resultat non ajouté',
      fakeAsync(() => {
        expect(false).toEqual(true);
      })
    );
  });


  /* step 3 (evenement) */
  describe(',aprés l\'ajout de 3 resultats,', () => {

    beforeEach(() => {
      // init le service avec 3 resultats
    });

    it('devrait avoir les list d\'event des résultat vide',
      fakeAsync(() => {
        expect(false).toEqual(true);
      })
    );

    it('devrait avoir 1 event a la date de maintenant quand 1 résultat est vue',
      fakeAsync(() => {
        expect(false).toEqual(true);
      })
    );

    it('devrait avoir 2 events avec 2 dates différent aprés la vision d\'un resultat puis la suppression de la vision',
      fakeAsync(() => {
        expect(false).toEqual(true);
      })
    );

  });

  /* proposé de nouveau test */
});
