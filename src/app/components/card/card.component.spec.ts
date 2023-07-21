import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { HttpClientModule } from '@angular/common/http';

const mockData = [
  {
    id: 1,
    definicion_espanol: 'Ejemplo definición en español 1',
    definicion_ingles: 'Example definition in English 1',
  },
  {
    id: 2,
    definicion_espanol: 'Ejemplo definición en español 2',
    definicion_ingles: 'Example definition in English 2',
  },
  // ... Agrega los demás objetos de tu archivo JSON
];

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CardComponent]
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('It have to be a false', () => {
    expect(component.face).toEqual(false);
  }); 
  test('It have to content Data', () =>{
    // Verificamos que los datos sean almacenados en jsonData
    expect(component.toggle())
    expect(component.face).toEqual(true)
    expect(component.jsonData).toBeUndefined();
  })
});
