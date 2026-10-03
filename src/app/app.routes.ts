import { CombatStyles } from './pages/combat-styles/combat-styles';
import { DbzCharactersList } from './pages/dbz-characters-list/dbz-characters-list';
import {Routes} from '@angular/router';
import {DemonSlayerCharactersList} from './pages/demon-slayer-characters-list/demon-slayer-characters-list';

export const routes: Routes = [
  {path: '', redirectTo: 'demon-slayer', pathMatch: 'full'},
  {path: "demon-slayer", component: DemonSlayerCharactersList},
  {path: "dbz", component: DbzCharactersList},
  {path: "combat-styles", component: CombatStyles}
];
