import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchCatsComponent } from './fetch-cats.component';

describe('FetchCatsComponent', () => {
  let component: FetchCatsComponent;
  let fixture: ComponentFixture<FetchCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchCatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
