import { TestBed } from '@angular/core/testing';
import { CharacterCard } from './character-card';

describe('CharacterCard', () => {
  it('renders the supplied character using Material card elements', async () => {
    await TestBed.configureTestingModule({ imports: [CharacterCard] }).compileComponents();
    const fixture = TestBed.createComponent(CharacterCard);
    fixture.componentRef.setInput('id', 1);
    fixture.componentRef.setInput('name', 'Tanjiro Kamado');
    fixture.componentRef.setInput('description', 'Descripción del personaje.');
    fixture.componentRef.setInput('image', 'https://www.demonslayer-api.com/api/v1/characters/images/1.webp');
    fixture.detectChanges();
    const card: HTMLElement = fixture.nativeElement;
    expect(card.querySelector('mat-card')).not.toBeNull();
    expect(card.querySelector('mat-card-title')?.textContent).toContain('1 - Tanjiro Kamado');
    expect(card.querySelector('mat-card-content')?.textContent).toContain('Descripción del personaje.');
    const image = card.querySelector('img[mat-card-image]') as HTMLImageElement;
    expect(image.alt).toBe('Tanjiro Kamado');
    expect(image.src).toContain('/images/1.webp');
  });
});
