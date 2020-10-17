import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPesquisaComponent } from './criar-pesquisa.component';

describe('CriarPesquisaComponent', () => {
  let component: CriarPesquisaComponent;
  let fixture: ComponentFixture<CriarPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
