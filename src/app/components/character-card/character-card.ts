import { CharacterCardType } from '../../enums/character-card-type';
import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import type { CharacterModel } from '../../interfaces/character-model';

@Component({
  selector: 'app-character-card',
  imports: [MatCard, MatCardHeader, MatCardContent, NgClass],
  templateUrl: './character-card.html',
  styleUrl: './character-card.css',
})
export class CharacterCard {
  data = input.required<CharacterModel>();
  type = input<CharacterCardType>(CharacterCardType.FILLED);
  readonly characterCardType = CharacterCardType;
}
