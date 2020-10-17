import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PesquisaPalavraComponent } from './pesquisa-palavra.component';

describe('PesquisaPalavraComponent', () => {
  let component: PesquisaPalavraComponent;
  let fixture: ComponentFixture<PesquisaPalavraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaPalavraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaPalavraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

