import { TestBed } from '@angular/core/testing';
import { CharacterCard } from './character-card';
import type { CharacterModel } from '../../interfaces/character-model';

describe('CharacterCard', () => {
  it('renders the supplied character using Material card elements', async () => {
    await TestBed.configureTestingModule({ imports: [CharacterCard] }).compileComponents();
    const fixture = TestBed.createComponent(CharacterCard);
    const character: CharacterModel = {
      id: 1,
      name: 'Tanjiro Kamado',
      description: 'Descripción del personaje.',
      img: 'https://www.demonslayer-api.com/api/v1/characters/images/1.webp',
    };
    fixture.componentRef.setInput('data', character);
    fixture.detectChanges();
    const card: HTMLElement = fixture.nativeElement;
    expect(card.querySelector('mat-card')).not.toBeNull();
    expect(card.querySelector('h3')?.textContent).toContain('1 - Tanjiro Kamado');
    expect(card.querySelector('mat-card-content')?.textContent).toContain('Descripción del personaje.');
    const image = card.querySelector('mat-card-header img') as HTMLImageElement;
    expect(image.alt).toBe('Tanjiro Kamado');
    expect(image.src).toContain('/images/1.webp');
  });
});
