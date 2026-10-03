import { CharacterCardType } from '../../enums/character-card-type';
import { FormsModule } from '@angular/forms';
import {Component} from '@angular/core';
import type { CharacterModel } from '../../interfaces/character-model';
import {CharacterCard} from '../../components/character-card/character-card';

@Component({
  selector: 'app-demon-slayer-characters-list',
  imports: [CharacterCard, FormsModule],
  templateUrl: './demon-slayer-characters-list.html',
  styleUrl: './demon-slayer-characters-list.css',
})
export class DemonSlayerCharactersList {
  cardType: CharacterCardType = CharacterCardType.FILLED;


  characterList: CharacterModel[] = [
  {
    "id": 1,
    "name": "Tanjiro Kamado",
    "description": "Is the main protagonist of Demon Slayer. He joined the Demon Slayer Corp to find a remedy to turn his sister, Nezuko Kamado, back into a human and to hunt down and kill demons.",
    "img": "https://www.demonslayer-api.com/api/v1/characters/images/1.webp"
  },
  {
    "id": 2,
    "name": "Nezuko Kamado",
    "description": "She is a demon and the younger sister of Tanjiro Kamado and one of the two remaining members of the Kamado family. Formerly a human, she was attacked and transformed into a demon by Muzan Kibutsuji.",
    "img": "https://www.demonslayer-api.com/api/v1/characters/images/2.webp"
  },
  {
    "id": 3,
    "name": "Giyu Tomioka",
    "description": "He is a Demon Slayer of the Demon Slayer Corps and the current Water Hashira. He has a reserved personality and a very strong sense of justice.",
    "img": "https://www.demonslayer-api.com/api/v1/characters/images/3.webp"
  },
  {
    "id": 4,
    "name": "Sakonji Urokodaki",
    "description": "Sakonji Urokodaki is a retired member of the Demon Slayer Corps, having held the position of the previous Water Hashira. He is the main cultivator of the Water Breathing style, having trained Makomo, Sabito, Giyu Tomioka, and Tanjiro Kamado.",
    "img": "https://www.demonslayer-api.com/api/v1/characters/images/4.webp"
  },
  {
    "id": 5,
    "name": "Sabito",
    "description": "Sabito was a former apprentice of Sakonji Urokodaki. He appeared to assist Tanjiro Kamado in his preparations for the Final Selection exam.",
    "img": "https://www.demonslayer-api.com/api/v1/characters/images/5.webp"
  }
];
}
