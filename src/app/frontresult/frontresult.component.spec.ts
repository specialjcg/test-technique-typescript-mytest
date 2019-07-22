import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontresultComponent } from './frontresult.component';
import { FormsModule } from '@angular/forms';

describe('FrontresultComponent', () => {
  let component: FrontresultComponent;
  let fixture: ComponentFixture<FrontresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontresultComponent ],
        imports: [


    FormsModule,
  ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
