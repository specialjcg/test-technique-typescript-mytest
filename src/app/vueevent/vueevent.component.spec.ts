import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueeventComponent } from './vueevent.component';
import { RouterModule } from '@angular/router';

describe('VueeventComponent', () => {
  let component: VueeventComponent;
  let fixture: ComponentFixture<VueeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueeventComponent ],
      imports: [
    RouterModule.forRoot([]),]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
