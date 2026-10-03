import { Component } from '@angular/core';
import { SecondaryCharacterCard } from '../../components/secondary-character-card/secondary-character-card';
import { CombatStyleModel } from '../../interfaces/combat-style-model';

@Component({
  selector: 'app-combat-styles',
  imports: [SecondaryCharacterCard],
  templateUrl: './combat-styles.html',
  styleUrl: './combat-styles.css',
})
export class CombatStyles {
  // Datos de https://www.demonslayer-api.com/api/v1/combat-styles?limit=100
  // El campo img de la API se adapta a image en nuestro modelo.
  combatStylesList: CombatStyleModel[] = [
  {
    "id": 1,
    "name": "Sun Breathing",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/sun-breathing.webp",
    "description": "Breathing Style only known and taught by the Kamado Family, later revealed to be the first Breathing Style",
    "combat_style_character": [
      {
        "id": 1,
        "name": "Tanjiro Kamado",
        "description": "Is the main protagonist of Demon Slayer. He joined the Demon Slayer Corp to find a remedy to turn his sister, Nezuko Kamado, back into a human and to hunt down and kill demons."
      },
      {
        "id": 45,
        "name": "Yoriichi",
        "description": "He is a Demon Slayer who lived nearly 500 years ago during the Sengoku era. He was the most powerful Demon Slayer to have ever existed."
      }
    ]
  },
  {
    "id": 2,
    "name": "Water Breathing",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/water-breathing.webp",
    "description": "Water Breathing is one of the five main Breathing Styles directly derived from Sun Breathing.",
    "combat_style_character": [
      {
        "id": 1,
        "name": "Tanjiro Kamado",
        "description": "Is the main protagonist of Demon Slayer. He joined the Demon Slayer Corp to find a remedy to turn his sister, Nezuko Kamado, back into a human and to hunt down and kill demons."
      },
      {
        "id": 3,
        "name": "Giyu Tomioka",
        "description": "He is a Demon Slayer of the Demon Slayer Corps and the current Water Hashira. He has a reserved personality and a very strong sense of justice."
      },
      {
        "id": 4,
        "name": "Sakonji Urokodaki",
        "description": "Sakonji Urokodaki is a retired member of the Demon Slayer Corps, having held the position of the previous Water Hashira. He is the main cultivator of the Water Breathing style, having trained Makomo, Sabito, Giyu Tomioka, and Tanjiro Kamado."
      },
      {
        "id": 5,
        "name": "Sabito",
        "description": "Sabito was a former apprentice of Sakonji Urokodaki. He appeared to assist Tanjiro Kamado in his preparations for the Final Selection exam."
      },
      {
        "id": 6,
        "name": "Makomo",
        "description": "Makomo and Sabito were both orphaned from their respective families and adopted by Sakonji, who trained them both and permitted them to attend the Demon Slayer Corps´Final Selection."
      },
      {
        "id": 11,
        "name": "Aoi Kanzaki",
        "description": "Aoi Kanzaki is a Demon Slayer of the Demon Slayer Corps. However, she works as a helper at the Butterfly Mansion, rather than taking to the front lines and fighting demons."
      },
      {
        "id": 21,
        "name": "Murata",
        "description": "Not much is known about Murata, however, he does not like it when a hunter of lower rank chastises him. He is somewhat timid, however he does seem braver than most."
      }
    ]
  },
  {
    "id": 3,
    "name": "Combustible Blood",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/combustible-blood.webp",
    "description": "Nezuko´s Blood Demon Art allows her to combust her blood into pink-colored flames at will. Her flames have a special property which makes them exclusively harmful to demons.",
    "combat_style_character": [
      {
        "id": 2,
        "name": "Nezuko Kamado",
        "description": "She is a demon and the younger sister of Tanjiro Kamado and one of the two remaining members of the Kamado family. Formerly a human, she was attacked and transformed into a demon by Muzan Kibutsuji."
      }
    ]
  },
  {
    "id": 4,
    "name": "Thunder Breathing",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/thunder-breathing.webp",
    "description": "Thunder Breathing is a Breathing Style that mimics lightning, specifically swift strikes and movements akin to lightning ripping through the sky, and replicates it with the user´s movements, techniques and abilities.",
    "combat_style_character": [
      {
        "id": 9,
        "name": "Zenitsu Agatsuma",
        "description": "Zenitsu Agatsuma is one of the main characters of Demon Slayer and along with Inosuke Hashibira, a travelling companion of Tanjiro Kamado and Nezuko Kamado. He is also a Demon Slayer in the Demon Slayer Corps."
      }
    ]
  },
  {
    "id": 5,
    "name": "Flesh Manipulation",
    "image": "",
    "description": "Flesh Manipulation is a supernatural ability possessed by demons that allow them to alter and control their own flesh and body.",
    "combat_style_character": [
      {
        "id": 7,
        "name": "Hand Demon",
        "description": "The Hand Demon was the primary antagonist of the Final Selection Arc of Demon Slayer. He was a notorious demon who killed thirteen of Sakonji Urokodaki´s apprentices"
      }
    ]
  },
  {
    "id": 6,
    "name": "Dual Wielding",
    "image": "",
    "description": " Genya utilizes both a double-barreled shotgun with a Nichirin blade. He is shown to excel in blending both long-ranged and short-ranged combat",
    "combat_style_character": [
      {
        "id": 8,
        "name": "Genya Shinazugawa",
        "description": "He is the younger brother of the Wind Hashira and as one of the five that survived Final Selection, Genya possesses a relatively strong foundation as a Demon Slayer even without utilizing a Breathing Style."
      }
    ]
  },
  {
    "id": 7,
    "name": "Beast Breathing",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/beast-breathing.webp",
    "description": " Beast Breathing is a Breathing Style that mimics beasts/wild animals, specifically their unpredictable, ferocious and wild nature, including movements, attacks and senses, and replicates it with the user´s movements, techniques and abilities.",
    "combat_style_character": [
      {
        "id": 10,
        "name": "Inosuke Hashibira",
        "description": "Inosuke is short-tempered, confrontational, abrasive and proud. He always likes to think he is the strongest fighter in a situation, constantly challenging most people he comes across and wanting others to respect and praise him for his skill."
      }
    ]
  },
  {
    "id": 8,
    "name": "Flower Breathing",
    "image": "",
    "description": "Flower Breathing is a Breathing Style that mimics both perennial flowers and fruit blossoms and replicates them with the user´s movements, techniques, and abilities.",
    "combat_style_character": [
      {
        "id": 12,
        "name": "Kanao Tsuyuri",
        "description": "Kanao Tsuyuri is the adopted sister of Shinobu and Kanae Kocho.  She became unable to make decisions by herself and she has a coin to flip and decide which path to follow when she doesn´t know what to do."
      }
    ]
  },
  {
    "id": 9,
    "name": "Swamp Domain",
    "image": "",
    "description": "The Swamp Demon was able to conjure a pocket swamp dimension in which he can navigate freely.",
    "combat_style_character": [
      {
        "id": 13,
        "name": "Swamp Demon",
        "description": "He is the main antagonist of the Kidnapper´s Bog Arc. He was a demon who went through a rash of kidnappings during the first mission of Tanjiro Kamado for the Demon Slayer Corps."
      }
    ]
  },
  {
    "id": 10,
    "name": "Biokinesis",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/biokinesis.webp",
    "description": "Muzan´s Blood Demon Art grants him powerful biokinetic abilities, most prominently the ability to manipulate his body at will and shapeshift instantly.",
    "combat_style_character": [
      {
        "id": 14,
        "name": "Muzan Kibutsuji",
        "description": "Muzan Kibutsuji is the main antagonist of Demon Slayer. He is the Demon King, the progenitor of all other demons in existence, and the leader of the Twelve Kizuki, an organization made up of the twelve strongest demons under his direct command."
      }
    ]
  },
  {
    "id": 11,
    "name": "Blood Bewitchment",
    "image": "",
    "description": "Tamayo can create illusions and induce hallucinations that affect the eyesight of her target by surrounding them with flower patterns.",
    "combat_style_character": [
      {
        "id": 15,
        "name": "Tamayo",
        "description": "Tamayo is a gentle, wise, and incredibly intelligent demon. Having devoted most of her life to the researching of demons and human transformation into one"
      }
    ]
  },
  {
    "id": 12,
    "name": "Blindfold ",
    "image": "",
    "description": "Yushiro´s Blood Demon Art allows him to create paper talismans which possess the ability to mask or reveal something´s presence.",
    "combat_style_character": [
      {
        "id": 16,
        "name": "Yushiro",
        "description": "He only cares for Tamayo and hates when others get in the way of his spending time with her"
      }
    ]
  },
  {
    "id": 13,
    "name": "Hiasobi Temari",
    "image": "",
    "description": "Susamaru´s Blood Demon Art allows her to conjure temari handballs at will. These handballs are extremely durable, being able to withstand being thrown and kicked at high speeds and destroy any objects they come in contact with.",
    "combat_style_character": [
      {
        "id": 17,
        "name": "Susamaru",
        "description": "Susamaru, also known as the Temari Demon, was one of the two primary antagonists in the Asakusa Arc of Demon Slayer along with Yahaba. She was a demon who was tricked into believing she was a member of the Twelve Demon Moons."
      }
    ]
  },
  {
    "id": 14,
    "name": "Koketsu Arrow",
    "image": "",
    "description": "Yahaba´s Blood Demon Art allowed him to conjure and manipulate invisible red arrows by blinking the eyes on each of his palms.",
    "combat_style_character": [
      {
        "id": 18,
        "name": "Yahaba",
        "description": "Yahaba, also known as the Arrow Demon, was one of the two primary antagonists in the Asakusa Arc of Demon Slayer, along with Susamaru. He was a demon who was tricked into believing he was a member of the Twelve Demon Moons."
      }
    ]
  },
  {
    "id": 15,
    "name": "Drum Spells",
    "image": "",
    "description": "Kyogai harbored 6 Tsuzumi Drums imbedded in different parts of his body and each one of them, when played, enacts a certain effect on his surroundings.",
    "combat_style_character": [
      {
        "id": 19,
        "name": "Kyogai",
        "description": "Kyogai was a demon formerly affiliated with the Twelve Demon Moons, having previously held the position of Lower Rank Six before Muzan Kibutsuji excommunicated him for reaching his limit as a demon and losing his ability to become stronger."
      }
    ]
  },
  {
    "id": 16,
    "name": "Insect Breathing",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/insect-breathing.webp",
    "description": "Insect Breathing is a Breathing Style that mimics insects, specifically their lethal stings and movements, and replicates it with user´s movements, techniques and abilities. Is a Breathing Style derived from Flower Breathing.",
    "combat_style_character": [
      {
        "id": 20,
        "name": "Shinobu Kocho",
        "description": "Shinobu is the current Insect Hashira. After a demon killed her parents, she joined the Demon Slayer Corps in order to protect others from suffering the same fate as her."
      }
    ]
  },
  {
    "id": 17,
    "name": "Poison Manipulation",
    "image": "",
    "description": "Spider demon Son´s most potent and dangerous ability is his power to generate and manipulate deadly poison.",
    "combat_style_character": [
      {
        "id": 22,
        "name": "Spider Son",
        "description": "He was member of the Spider Family, and he takes the form of a giant spider possessing a human head. His face, like Mother and Daughter, had the same facial features of red dots, white skin and hair similar to his \"younger brother\" Rui."
      }
    ]
  },
  {
    "id": 18,
    "name": "Silk Manipulation",
    "image": "",
    "description": "Like her \"mother\" and Rui, Spider demon Daughter can manipulate threads made from her own cells, this time in a fashion similar to silk that forms a cocoon instead of threads that resemble wires.",
    "combat_style_character": [
      {
        "id": 23,
        "name": "Spider Daughter",
        "description": "She was member of the Spider Family, and she is shown to be the most cautious within her \"family,\" having instead opted to observe and stand back rather than jump right into the battle against Demon Slayers."
      }
    ]
  },
  {
    "id": 19,
    "name": "Puppetry",
    "image": "",
    "description": "Spider demon Mother could create and manifest threads from the tips of her fingers that can extend to cover an entire mountain. She used her threads in a unique manner; by utilizing them to manipulate bodies like puppets.",
    "combat_style_character": [
      {
        "id": 24,
        "name": "Spider Mother",
        "description": "She was member of the Spider Family. Like most demons, Mother was cruel, unfeeling, and murderous towards humans. She ruthlessly controlled dozens of Demon Slayers through her threads and manipulated them into killing each other."
      }
    ]
  },
  {
    "id": 20,
    "name": "Metamorphosis",
    "image": "",
    "description": "Spider demon Father possessed the ability to shed his outer skin in order to transform into a more powerful form with increased physical power and regenerative abilities, making him even stronger and durable than in his original form.",
    "combat_style_character": [
      {
        "id": 25,
        "name": "Spider Father",
        "description": "He was member of the Spider Family. Physically, he was the most formidable of his \"family\", possessing great height and a powerfully built physique."
      }
    ]
  },
  {
    "id": 21,
    "name": "Thread Manipulation",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/thread-manipulation.webp",
    "description": "Rui´s Blood Demon Art allowed him to create thin threads indiscernible from silk from his own flesh and manipulate them however he pleased. He typically extended the threads from his fingertips like a puppet master.",
    "combat_style_character": [
      {
        "id": 26,
        "name": "Rui",
        "description": "Rui is the leader of the Spider Family. He was the primary antagonist in the Mount Natagumo Arc of Demon Slayer. He was a demon affiliated with the Twelve Demon Moons, holding the position of Lower Rank Five"
      }
    ]
  },
  {
    "id": 22,
    "name": "Sound Breathing",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/sound-breathing.webp",
    "description": "A Breathing Style that Tengen created himself. Sound Breathing seemingly combines Tengen´s heightened sense of hearing, his Musical Score technique, his shinobi expertise as well as his dual Nichirin cleavers and his anti-demon bombs.",
    "combat_style_character": [
      {
        "id": 28,
        "name": "Tengen Uzui",
        "description": "Tengen is the Sound Hashira of the Demon Slayer Corps and a very powerful and skilled combatant. He is an eccentric and flashy individual, always wanting to be \"flamboyant\", possessing a need for everything to be flashy and outstanding."
      }
    ]
  },
  {
    "id": 23,
    "name": "Love Breathing",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/love-breathing.webp",
    "description": "Love Breathing incorporates elements of Mitsuri´s superhuman flexibility and her unique whip-like Nichirin Sword. Using this Breathing Style, she can unleash attacks that cover a wide range of motion.",
    "combat_style_character": [
      {
        "id": 29,
        "name": "Mitsuri Kanroji",
        "description": "Mitsuri is the Love Hashira of the Demon Slayer Corps. She is always kind to others, however, despite her gentle and seemingly innocent demeanor, Mitsuri will show no mercy in the face of demons"
      }
    ]
  },
  {
    "id": 24,
    "name": "Flame Breathing",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/flame-breathing.webp",
    "description": "Flame Breathing is one of the five main Breathing Styles directly derived from the Sun Breathing. This breathing style mimics flames, specifically their powerful heat and scorch, and replicates it with the userñ s movements, techniques and abilities.",
    "combat_style_character": [
      {
        "id": 30,
        "name": "Kyojuro Rengoku",
        "description": "Kyojuro Rengoku, the Flame Hashira, possesses exceptional physical attributes and an indomitable spirit, making him a formidable warrior in the Demon Slayer Corps. With his incredible endurance, immense stamina, speed, reflexes, and impeccable combat skills, Rengoku proves to be a monster on the battlefield, surpassing his adversaries and showcasing his mastery of Flame Breathing."
      }
    ]
  },
  {
    "id": 25,
    "name": "Mist Breathing",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/mist-breathing.webp",
    "description": "A Breathing Style Muichiro learnt from a Mist Breathing cultivator. Mist Breathing Style disorients the enemy and defends the user at the same time with an envelope of mist, and delivers strikes in the blink of an eye.",
    "combat_style_character": [
      {
        "id": 31,
        "name": "Muichiro Tokito",
        "description": "He is the Mist Hashira and despite his awkward and unaccommodating personality, Muichiro is a prodigy in the Demon Slayer Corp. Impassive and, at times, obtuse, he tends to think only for himself and operates on logic alone "
      }
    ]
  },
  {
    "id": 26,
    "name": "Stone Breathing",
    "image": "",
    "description": "A Breathing Style Gyomei either mastered himself or learned from a cultivator. In his own version of this Breathing Style, Gyomei incorporates his superhuman sense of hearing and physical strength to utilize a spiked flail and axe to use its techniques.",
    "combat_style_character": [
      {
        "id": 32,
        "name": "Gyomei Himejima",
        "description": "He is a Demon Slayer of the Demon Slayer Corps and the current Stone Hashira. Gyomei also serves as the mentor of Genya Shinazugawa. He is stated to be the strongest Demon Slayer in the entire Demon Slayer Corps."
      }
    ]
  },
  {
    "id": 27,
    "name": "Serpent Breathing",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/serpent-breathing.webp",
    "description": "A Breathing Style Obanai created himself and mastered. He makes use of twists and turns similar to how a serpent slithers to attack. Obanai also learnt to incorporate his pet snake, Kaburamaru, into this Breathing Style, making it extremely effective.",
    "combat_style_character": [
      {
        "id": 33,
        "name": "Obanai Iguro",
        "description": "He is a Demon Slayer of the Demon Slayer Corps and the current Serpent Hashira. Obanai is a very harsh and strict individual who shows no concern for those who do not abide by the rules of the Demon Slayer Corps."
      }
    ]
  },
  {
    "id": 28,
    "name": "Wind Breathing",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/wind-breathing.webp",
    "description": "A Breathing Style that Sanemi learned and mastered after tutelage from an unknown cultivator. Wind Breathing mimics wind, specifically powerful torrents of air and whirlwinds, and replicates it with the user´s movements, techniques and abilities.",
    "combat_style_character": [
      {
        "id": 34,
        "name": "Sanemi Shinazugawa",
        "description": "He is a Demon Slayer of the Demon Slayer Corps and the current Wind Hashira. Sanemi is also the older brother of Genya Shinazugawa. Sanemi´s cold, rude, and dismissive behavior is the result of losing too many people he cared about in the past."
      }
    ]
  },
  {
    "id": 29,
    "name": "Sleep Inducement",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/sleep-inducement.webp",
    "description": "Enmu´s Blood Demon Art granted him the ability to force anyone into a deep sleep. He can do this through different means, some more subtle than others, but all effectively leaving his foes vulnerable and unable to fight.",
    "combat_style_character": [
      {
        "id": 35,
        "name": "Enmu",
        "description": "He was a demon affiliated with the Twelve Demon Moons, holding the position of Lower Rank One. As Lower Rank One, Enmu was the strongest Lower Rank and closest to matching the strength of the Upper Ranks Demon Moons."
      }
    ]
  },
  {
    "id": 30,
    "name": "Dream Manipulation",
    "image": "",
    "description": "Enmu´s Blood Demon Art´s secondary ability was his power to enter, manipulate and control someone´s dreams when they are asleep.",
    "combat_style_character": [
      {
        "id": 35,
        "name": "Enmu",
        "description": "He was a demon affiliated with the Twelve Demon Moons, holding the position of Lower Rank One. As Lower Rank One, Enmu was the strongest Lower Rank and closest to matching the strength of the Upper Ranks Demon Moons."
      }
    ]
  },
  {
    "id": 31,
    "name": "Destructive Death",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/destructive-death.webp",
    "description": "Akaza´s Blood Demon Art is centered around martial arts, combining the manipulation of destructive shockwaves and the Soryu style martial arts he mastered when he was a human.",
    "combat_style_character": [
      {
        "id": 36,
        "name": "Akaza",
        "description": "He is a demon affiliated with the Twelve Demon Moons, holding the position of Upper Rank Three. As the third highest ranking member of the Twelve Demon Moons, Akaza is an exceptionally powerful demon and the fourth strongest in existence, after Doma, Kokushibo, and Muzan."
      }
    ]
  },
  {
    "id": 32,
    "name": "Obi Sash Manipulation",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/obi-manipulation.webp",
    "description": "Daki´s Blood Demon Art allowed her to create flower-patterned obi sashes from her flesh, as well as freely manipulating them at will",
    "combat_style_character": [
      {
        "id": 37,
        "name": "Daki",
        "description": "She is a demon affiliated with the Twelve Demon Moons, being the secondary holder of the position of Upper Rank Six, a position she shared with the primary holder, her older brother Gyutaro."
      }
    ]
  },
  {
    "id": 33,
    "name": "Blood Manipulation",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/blood-manipulation.webp",
    "description": "Gyutaro´s Blood Demon Art allowed him to manipulate his own body´s blood in various ways. He was shown to generate them from his flesh or from open wounds on his body or release blood at will from his veins.",
    "combat_style_character": [
      {
        "id": 38,
        "name": "Gyutaro",
        "description": "As the real Upper Rank Six, Gyutaro was an extremely powerful demon with over a century´s worth of combat experience under his belt, having killed and devoured 15 Hashira in the past"
      }
    ]
  },
  {
    "id": 34,
    "name": "Cryokinesis",
    "image": "",
    "description": "Doma´s Blood Demon Art grants him extremely powerful cryokinesis. He can generate ice and frost from his flesh and blood and can spawn it anywhere in his vicinity, as well as manipulating it at will.",
    "combat_style_character": [
      {
        "id": 39,
        "name": "Doma",
        "description": "He is a demon affiliated with the Twelve Demon Moons, holding the second highest position, Upper Rank Two. Doma is outwardly friendly and cheery, possessing an approachable and charismatic air."
      }
    ]
  },
  {
    "id": 35,
    "name": "Emotion Manifestation",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/emotion-manifestation.webp",
    "description": "Hantengu´s Blood Demon Art allows him to manifest his emotions as younger clones of himself. Each clone personifies a core emotion, which can be identified by a kanji on their tongue. These clones all have different appearances, abilities, and weapons.",
    "combat_style_character": [
      {
        "id": 40,
        "name": "Hantengu",
        "description": "He is a demon affiliated with the Twelve Demon Moons, holding the position of Upper Rank Four. Hantengu seems to believe that he is completely innocent despite the obvious evidence pointing toward his numerous crimes"
      }
    ]
  },
  {
    "id": 36,
    "name": "Porcelain Vase Spells",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/porcelain-vase.webp",
    "description": "Gyokko´s Blood Demon Art permit him spawn pots anywhere around. Gyokko is able to teleport into different pots to avoid attacks and also he can summon grotesque fish like Demons from his pots.",
    "combat_style_character": [
      {
        "id": 41,
        "name": "Gyokko",
        "description": "He is a demon affiliated with the Twelve Demon Moons, holding the position of Upper Rank Five. Gyokko is an easily excitable demon, constantly fawning over new inspirations for what he deems his \"art\" or what he finds to be sublime, sometimes even going against his initial impressions."
      }
    ]
  },
  {
    "id": 37,
    "name": "Infinity Castle Manipulation",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/infinite-castle.webp",
    "description": "Nakime´s Blood Demon Art takes the form of an extra-dimensional space that houses a fortress of immense scale. As its owner, Nakime possesses absolute dominion over the space, being able to manipulate and alter it at will by simply strumming her biwa.",
    "combat_style_character": [
      {
        "id": 43,
        "name": "Nakime",
        "description": "She is a demon who owns and controls the Infinity Castle and serves directly under Muzan Kibutsuji. Nakime is aloof and taciturn, almost never speaking and displaying little to no emotion or will outside of obeying orders. She was extremely loyal to Muzan, listening and following his every order faultlessly."
      }
    ]
  },
  {
    "id": 38,
    "name": "Moon Breathing",
    "image": "https://www.demonslayer-api.com/api/v1/combat-styles/images/moon-breathing.webp",
    "description": "Kokushibo is the first demon that utilized Breathing Styles. His Moon Breathing is one of the most dangerous and powerful ones. He can create many chaotic crescent moon blades when slashing that vary in length and size in crescent shaped sword attacks.",
    "combat_style_character": [
      {
        "id": 44,
        "name": "Kokushibo",
        "description": "He is a demon affiliated with the Twelve Denon Moons, holding the highest position, Upper Rank One. He has battled countless Demon Slayers and has amassed vast experience and knowledge over his near 500-year long life."
      }
    ]
  },
  {
    "id": 39,
    "name": "Crescent Moon Blades",
    "image": "",
    "description": "Complementing his Moon Breathing, Kokushibo´s Blood Demon Art allows him to create and manipulate dozens of sharp blades shaped like traditional crescent moons from his flesh katana.",
    "combat_style_character": [
      {
        "id": 44,
        "name": "Kokushibo",
        "description": "He is a demon affiliated with the Twelve Denon Moons, holding the highest position, Upper Rank One. He has battled countless Demon Slayers and has amassed vast experience and knowledge over his near 500-year long life."
      }
    ]
  }
];
}
