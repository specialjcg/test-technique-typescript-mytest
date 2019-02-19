import { TestBed, fakeAsync } from '@angular/core/testing';
import { ResultService } from './result.service';

describe('ResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  let resultService: ResultService;

  it('should be created', () => {
    resultService = TestBed.get(ResultService);
    expect(resultService).toBeTruthy();
  });


  it('devrait être initialisé avec une list de result vide',
    fakeAsync(() => {
      expect(resultService.getAllResult()).toEqual([]);
    })
  );

  it('devrait avoir une list de 1 resultat non vue aprés l\'ajout de 1 resultat.',
    fakeAsync(() => {
      expect(false).toEqual(true); 
    })
  );

  it('devrait avoir une list de 1 resultat vue aprés l\'ajout de 1 resultat et la vision de ce resultat',
    fakeAsync(() => {
      expect(false).toEqual(true);
    })
  );

  it('ne devrait pas planté aprés la vision d\'un resultat non ajouté',
    fakeAsync(() => {
      expect(false).toEqual(true);
    })
  );



  /* proposé de nouveau test */
});
