export interface CombatStyleModel {
  id: number;
  name: string;
  image: string;
  description: string;
  combat_style_character: CombatStyleCharacter[];
}

export interface CombatStyleCharacter {
  id: number;
  name: string;
  description: string;
}
