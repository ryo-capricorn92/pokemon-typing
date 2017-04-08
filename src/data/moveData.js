/* global pokemonMoves */
var POWER;
  // "power whip": {
  //   power: INT,
  //   level: INT,
  //   type: TYPE,
  //   effects: {
  //     factors: {
  //       chance: null,
  //       points: 0
  //     },
  //     affliction: {
  //       burn: false,
  //       freeze: false,
  //       flinch: false,
  //       paralyze: false,
  //       confusion: false,
  //       poison: false
  //     },
  //     stats: {
  //       target: false,
  //       lowerDefense: false,
  //       upDefense: false
  //     }
  //   }
  // }

  // effect object to pass in to Move constructor MAP:
  // all properties are optional unless marked otherwise
  // {
  //   damageSelf: INT, // percent of damage to opponent to inflict on self
  //   heal: INT, // percent of total base HP to heal on self, or if entered as string, percent of damage inflicted to heal
  //   healStatus: BOOL, // heal status conditions (affliction)
  //   wait: { // if attack causes any kind of wait
  //     turns: INT, // how many turns the move will take up
  //     attackOn: INT // on what turn does the attack take effect
  //   },
  //   target: BOOL, // false to affect hero, true to affect enemy
  //   affliction: STRING, // a string with the type of affliction effect (ie burn)
  //   stat: STRING, // which stat to be affected, and how (ie, lowerDefense, upSpeed)
  //   chance: INT, // chance for affliction/etc to take affect
  //   factor: INT, // stage to drop/raise stat by (between 1 and 6)
  //   special: { // object to contain special affects
  //     damage: BOOL, // does it inflict it's damage continuously (ie, wrap), or what percentage of oponent's base HP to inflict if INT
  //     duration: INT, // how many turns does it last? (1000 for permanently)
  //     heal: INT, // percent of damage inflicted to heal
  //     protect: INT, // what percentage of the next attack will it protect
  //     statusProtect: BOOL // protect from status conditions (affliction)
  //   }
  // }


  // {
  //   damageSelf: INT,
  //   heal: INT,
  //   healStatus: BOOL,
  //   wait: {
  //     turns: INT,
  //     attackOn: INT,
  //     afflictionOn: INT
  //   },
  //   target: BOOL,
  //   affliction: STRING,
  //   stat: STRING,
  //   chance: INT,
  //   factor: INT,
  //   special: {
  //     damage: BOOL,
  //     duration: INT,
  //     heal: INT,
  //     protect: INT,
  //     statusProtect: BOOL,
  //   }
  // }

function Move (/*string*/name, /*number*/power, /*string*/type, /*object*/effect, /*string*/message) {
  this.name = name;
  this.power = power;
  this.type = type;
  if (effect) {
    this.effects = {};
    this.effects.target = effect.target;
    this.effects.chance = effect.chance;
    if (effect.damageSelf) {
      this.damageSelf = effect.damageSelf;
    }
    if (effect.heal) {
      this.heal = effect.heal;
    }
    if (effect.affliction) {
      this.effects.affliction = {};
      this.effects.affliction[effect.affliction] = true;
    }
    if (effect.stat) {
      this.effects.stats = {};
      this.effects.stats[effect.stat] = effect.factor;
    }
  }
  if (message) {
    this.message = message;
  }
}

pokemonMoves.move["tackle"] = new Move ("tackle", 40, "normal", null);
pokemonMoves.move["growl"] = new Move ("growl", POWER, "normal", { target: true, stat: "lowerAttack", factor: 1 });
pokemonMoves.move["leech seed"] = new Move ("leech seed", POWER, "grass", { target: true, special: { damage: 0.125, heal: "1", duration: 1000 } });
pokemonMoves.move["vine whip"] = new Move ("vine whip", 45, "grass", null);
pokemonMoves.move["poison powder"] = new Move ("poison powder", POWER, "poison", { target: true, affliction: "poison" });
pokemonMoves.move["sleep powder"] = new Move ("sleep powder", POWER, "grass", { target: true, affliction: "sleep" });
pokemonMoves.move["take down"] = new Move ("take down", 90, "normal", { damageSelf: 0.25 });
pokemonMoves.move["razor leaf"] = new Move ("razor leaf", 55, "grass", null);
pokemonMoves.move["sweet scent"] = { name: "sweet scent", notUsed: true };
pokemonMoves.move["growth"] = new Move ("growth", POWER, "normal", { target: false, stat: "upAttack" });
pokemonMoves.move["double-edge"] = new Move ("double-edge", 120, "normal", { damageSelf: 0.33 });
pokemonMoves.move["worry seed"] = { name: "worry seed", notUsed: true };
pokemonMoves.move["synthesis"] = new Move ("synthesis", POWER, "grass", { heal: 0.25 });
pokemonMoves.move["seed bomb"] = new Move ("seed bomb", 80, "grass", null);
pokemonMoves.move["solar beam"] = new Move ("solar beam", 120, "grass", { wait: { turns: 2, attackOn: 2 } });
pokemonMoves.move["petal dance"] = new Move ("petal dance", 120, "grass", { wait: { turns: 3, attackOn: 'all' } });
pokemonMoves.move["petal blizzard"] = new Move ("petal blizzard", 90, "grass", null);
pokemonMoves.move["scratch"] = new Move ("scratch", 40, "normal", null);
pokemonMoves.move["ember"] = new Move ("ember", 40, "fire", null);
pokemonMoves.move["smokescreen"] = { name: "smokescreen", notUsed: true };
pokemonMoves.move["dragon rage"] = new Move ("dragon rage", { hp: 40 }, "TYPE", null);
pokemonMoves.move["scary face"] = new Move ("scary face", POWER, "normal", { target: true, stat: "lowerSpeed", factor: 2 });
pokemonMoves.move["fire fang"] = new Move ("fire fang", 65, "fire", { target: true, affliction: "burn", chance: 0.1 });
pokemonMoves.move["flame burst"] = new Move ("flame burst", 70, "fire", null);
pokemonMoves.move["slash"] = new Move ("slash", 70, "normal", null);
pokemonMoves.move["flamethrower"] = new Move ("flamethrower", 90, "fire", { target: true, affliction: "burn", chance: 0.1 });
pokemonMoves.move["fire spin"] = new Move ("fire spin", 35, "fire", { target: true, special: { damage: true, duration: 5 } });
pokemonMoves.move["inferno"] = new Move ("inferno", 100, "fire", { target: true, affliction: "burn", chance: 1 });
pokemonMoves.move["flare blitz"] = new Move ("flare blitz", 120, "fire", { damageSelf: 0.33, target: true, affliction: "burn", chance: 0.1 });
pokemonMoves.move["heat wave"] = new Move ("heat wave", 95, "fire", { target: true, affliction: "burn", chance: 0.1 });
pokemonMoves.move["dragon claw"] = new Move ("dragon claw", 80, "dragon", null);
pokemonMoves.move["shadow claw"] = new Move ("shadow claw", 70, "ghost", null);
pokemonMoves.move["air slash"] = new Move ("air slash", 75, "flying", null);
pokemonMoves.move["wing attack"] = new Move ("wing attack", 60, "flying", null);
pokemonMoves.move["tail whip"] = new Move ("tail whip", POWER, "normal", { target: true, stat: "lowerDefense", factor: 1 });
pokemonMoves.move["water gun"] = new Move ("water gun", 40, "water", null);
pokemonMoves.move["withdraw"] = new Move ("withdraw", POWER, "water", { target: false, stat: "upDefense", factor: 1 });
pokemonMoves.move["bubble"] = new Move ("bubble", 40, "water", { target: true, stat: "lowerSpeed", factor: 1, chance: 0.1 });
pokemonMoves.move["bite"] = new Move ("bite", 60, "dark", null);
pokemonMoves.move["rapid spin"] = new Move ("rapid spin", 20, "normal", null);
pokemonMoves.move["protect"] = new Move ("protect", POWER, "normal", { target: false, special: { protect: 1 } });
pokemonMoves.move["water pulse"] = new Move ("water pulse", 60, "water", { target: true, affliction: "confusion", chance: 0.2 });
pokemonMoves.move["aqua tail"] = new Move ("aqua tail", 90, "water", null);
pokemonMoves.move["skull bash"] = new Move ("skull bash", 130, "normal", { target: false, stat: "upDefense", factor: 1, wait: { turns: 2, attackOn: 2 } });
pokemonMoves.move["iron defense"] = new Move ("iron defense", POWER, "steel", { target: false, stat: "upDefense", factor: 2 });
pokemonMoves.move["rain dance"] = { name: "rain dance", notUsed: true }
pokemonMoves.move["hydro pump"] = new Move ("hydro pump", 110, "water", null);
pokemonMoves.move["flash cannon"] = new Move ("flash cannon", 80, "steel", { target: true, stat: "lowerDefense", factor: 1, chance: 0.1 });
pokemonMoves.move["reflect"] = new Move ("reflect", POWER, "psychic", { target: false, special: { protect: 0.5 } });
pokemonMoves.move["magical leaf"] = new Move ("magical leaf", 60, "grass", null);
pokemonMoves.move["natural gift"] = { name: "natural gift", notUsed: true };
pokemonMoves.move["light screen"] = new Move ("reflect", POWER, "psychic", { target: false, special: { protect: 0.5 } });
pokemonMoves.move["body slam"] = new Move ("body slam", 85, "normal", { target: true, affliction: "paralyze", chance: 0.3 });
pokemonMoves.move["safeguard"] = new Move ("safeguard", POWER, "normal", { target: false, special: { statusProtect: true } });
pokemonMoves.move["aromatherapy"] = new Move ("aromatherapy", POWER, "grass", { healStatus: true });
pokemonMoves.move["leer"] = new Move ("leer", POWER, "normal", { target: true, stat: "lowerDefense", factor: 1 });
pokemonMoves.move["quick attack"] = new Move ("quick attack", 40, "normal", null);
pokemonMoves.move["flame wheel"] = new Move ("flame wheel", 60, "fire", { target: true, affliction: "burn", chance: 0.1 });
pokemonMoves.move["defense curl"] = new Move ("defense curl", POWER, "normal", { target: false, stat: "upDefense", factor: 1 });
pokemonMoves.move["flame charge"] = new Move ("flame charge", 50, "fire", { target: false, stat: "upSpeed", factor: 1 });
pokemonMoves.move["swift"] = new Move ("swift", 60, "normal", null);
pokemonMoves.move["lava plume"] = new Move ("lava plume", 80, "fire", { target: true, affliction: "burn", chance: 0.3 });
pokemonMoves.move["rollout"] = new Move ("rollout", 30, "normal", null, "still needs power multiplier");
pokemonMoves.move["eruption"] = new Move ("eruption", 150, "fire", null, "still needs reduction multiplier on hp");
pokemonMoves.move["gyro ball"] = new Move ("gyro ball", 80, "steel", null, "still needs multiplier on opponent speed");
pokemonMoves.move["rage"] = new Move ("rage", 20, "normal", null, "still needs multiplier on enemy attack for hero attack");
pokemonMoves.move["ice fang"] = new Move ("ice fang", 65, "ice", { target: true, affliction: "freeze", chance: 01 }, "still needs addition of flinch chances");
pokemonMoves.move["flail"] = { name: "flail", notUsed: true };
pokemonMoves.move["crunch"] = new Move ("crunch", 80, "dark", { target: true, stat: "lowerDefense", factor: 1, chance: 0.2 });
pokemonMoves.move["chip away"] = new Move ("chip away", 70, "normal", null, "still needs ignorance of user's stat changes");
pokemonMoves.move["screech"] = new Move ("screech", POWER, "normal", { target: true, stat: "lowerDefense", factor: 2 });
pokemonMoves.move["thrash"] = new Move ("thrash", 120, "normal", { target: true, wait: { turns: 3, attackOn: "all", afflictionOn: 3 } });
pokemonMoves.move["superpower"] = new Move ("superpower", 120, "fighting", { target: false, stat: [ "lowerAttack", "lowerDefense" ], factor: 1 });
pokemonMoves.move["agility"] = new Move ("agility", POWER, "normal", { target: false, stat: "upSpeed", factor: 2 });
pokemonMoves.move["pound"] = new Move ("pound", 40, "normal", null);
pokemonMoves.move["absorb"] = new Move ("absorb", 20, "grass", { heal: "0.5" });
pokemonMoves.move["pursuit"] = new Move ("pursuit", 40, "dark", null);
pokemonMoves.move["mega drain"] = new Move ("mega drain", 40, "grass", { heal: "0.5" });
pokemonMoves.move["slam"] = new Move ("slam", 80, "normal", null);
pokemonMoves.move["detect"] = new Move ("detect", POWER, "fighting", { target: false, special: { protect: 1 } }, "still needs chance of fail on continued use");
pokemonMoves.move["giga drain"] = new Move ("giga drain", 75, "grass", { heal: "0.5" });
pokemonMoves.move["energy ball"] = new Move ("energy ball", 90, "grass", { target: true, stat: "lowerDefense", factor: 1, chance: 0.1 });
pokemonMoves.move["fury cutter"] = new Move ("fury cutter", 40, "bug", null, "still needs power increase on each turn");
pokemonMoves.move["leaf blade"] = new Move ("leaf blade", 90, "grass", null);
pokemonMoves.move["false swipe"] = new Move ("false swipe", 40, "normal", null, "still need to stop false swipe from knocking enemy out");
pokemonMoves.move["leaf storm"] = new Move ("leaf storm", 130, "grass", { target: false, stat: "lowerAttack", factor: 2 });
pokemonMoves.move["night slash"] = new Move ("night slash", 70, "dark", null);
pokemonMoves.move["x-scissor"] = new Move ("x-scissor", 80, "bug", null);
pokemonMoves.move["focus energy"] = { name: "focus energy", notUsed: true };
pokemonMoves.move["peck"] = new Move ("peck", 35, "flying", null);
pokemonMoves.move["sand-attack"] = { name: "sand-attack", notUsed: true };
pokemonMoves.move["mirror move"] = { name: "mirror move", notUsed: true };
pokemonMoves.move["double kick"] = new Move ("double kick", 30, "fighting", null, "still needs multiple hits per turn");
pokemonMoves.move["bulk up"] = new Move ("bulk up", POWER, "fighting", { target: false, stat: [ "upAttack", "upDefense" ], factor: 1 });
pokemonMoves.move["sky uppercut"] = new Move ("sky uppercut", 85, "fighting", null, "still needs hit on fly");
pokemonMoves.move["fire punch"] = new Move ("fire punch", 75, "fire", { target: true, affliction: "burn", chance: 0.1 });
pokemonMoves.move["hi jump kick"] = new Move ("hi jump kick", 130, "fighting", null, "still needs hero damage on miss");
pokemonMoves.move["blaze kick"] = new Move ("blaze kick", 85, "fire", { target: true, affliction: "burn", chance: 0.1 });
pokemonMoves.move["brave bird"] = new Move ("brave bird", 120, "flying", { damageSelf: 0.33 });
pokemonMoves.move["mud-slap"] = new Move ("mud-slap", 20, "ground", null, "does not affect accuracy, as accuracy is not in game");
pokemonMoves.move["bide"] = { name: "bide", notUsed: true };
pokemonMoves.move["foresight"] = { name: "foresight", notUsed: true };
pokemonMoves.move["mud sport"] = { name: "mud sport" };
pokemonMoves.move["whirlpool"] = new Move ("whirlpool", 35, "water", { target: true, special: { damage: 0.125, duration: 4 } });
pokemonMoves.move["endeavor"] = { name: "endeavor", notUsed: true };
pokemonMoves.move["mud shot"] = new Move ("mud shot", 55, "ground", { target: true, stat: "lowerSpeed", factor: 1 });
pokemonMoves.move["mud bomb"] = new Move ("mud bomb", 65, "ground", null);
pokemonMoves.move["muddy water"] = new Move ("muddy water", 90, "water", null);
pokemonMoves.move["earthquake"] = new Move ("earthquake", 100, "ground", null, "still needs double power when oponent uses dig");
pokemonMoves.move["hammer arm"] = new Move ("hammer arm", 100, "fighting", { target: false, stat: "lowerSpeed", factor: 1 });
pokemonMoves.move["curse"] = new Move ("curse", POWER, "ghost", { target: false, stat: [ "upAttack", "upDefense", "lowerSpeed" ], factor: 1 });
pokemonMoves.move["wood hammer"] = new Move ("wood hammer", 120, "grass", { damageSelf: 0.33 });
pokemonMoves.move["taunt"] = { name: "taunt", notUsed: true };
pokemonMoves.move["fury swipes"] = new Move ("fury swipes", 18, "normal", null, "still needs multiple attacks in one turn");
pokemonMoves.move["nasty plot"] = new Move ("nasty plot", POWER, "dark", { target: false, stat: "upAttack", factor: 2 });
pokemonMoves.move["torment"] = { name: "torment", notUsed: false };
pokemonMoves.move["facade"] = new Move ("facade", 70, "normal", null, "still needs double power on affliction");
pokemonMoves.move["acrobatics"] = new Move ("acrobatics", 55, "flying", null);
pokemonMoves.move["slack off"] = new Move ("slack off", POWER, "normal", { target: false, heal: 0.5 });
pokemonMoves.move["mach punch"] = new Move ("mach punch", 40, "fighting", null);
pokemonMoves.move["feint"] = { name: "feint", notUsed: true };
pokemonMoves.move["close combat"] = new Move ("close combat", 120, "fighting", { target: false, stat: "lowerDefense", factor: 1 });
pokemonMoves.move["punishment"] = { name: "punishment", notUsed: true };
pokemonMoves.move["calm mind"] = new Move ("calm mind", POWER, "psychic", { target: false, stat: [ "upAttack", "upDefense" ], factor: 1 });
pokemonMoves.move["water sport"] = { name: "water sport", notUsed: true };
pokemonMoves.move["bubblebeam"] = new Move ("bubblebeam", 65, "water", { target: true, stat: "lowerSpeed", factor: 1, chance: 0.1 });
pokemonMoves.move["fury attack"] = new Move ("fury attack", 15, "normal", null, "still needs multiple attacks per turn");
pokemonMoves.move["brine"] = new Move ("brine", 65, "water", null, "still needs double power if hp is below 50%");
pokemonMoves.move["mist"] = new Move ("mist", POWER, "ice", { target: false, special: { duration: 5, statusProtect: true } });
pokemonMoves.move["drill peck"] = new Move ("drill peck", 80, "flying", null);
pokemonMoves.move["metal claw"] = new Move ("metal claw", 50, "steel", { target: false, stat: "upAttack", factor: 1, chance: 0.1 });
pokemonMoves.move["swords dance"] = new Move ("swords dance", POWER, "normal", { target: false, stat: "upAttack", factor: 2 });
pokemonMoves.move["swagger"] = new Move ("swagger", POWER, "normal", { target: false, stat: "upAttack", factor: 2, affliction: "confused" });
pokemonMoves.move["aqua jet"] = new Move ("aqua jet", 40, "water", null);
pokemonMoves.move["wrap"] = new Move ("wrap", 15, "normal", { target: true, special: { damage: 0.125, duration: 4 } });
pokemonMoves.move["leaf tornado"] = new Move ("leaf tornado", 65, "grass", null);
pokemonMoves.move["coil"] = new Move ("coil", POWER, "poison", { target: false, stat: [ "upAttack", "upDefense" ], factor: 1 });
pokemonMoves.move["wring out"] = { name: "wring out", notUsed: true };
pokemonMoves.move["gastro acid"] = { name: "gastro acid", notUsed: true };
pokemonMoves.move["odor sleuth"] = { name: "odor sleuth", notUsed: true };
pokemonMoves.move["smog"] = new Move ("smog", 30, "poison", { target: true, affliction: "poison", chance: 0.4 });
pokemonMoves.move["heat crash"] = { name: "heat crash", notUsed: true };
pokemonMoves.move["assurance"] = new Move ("assurance", 60, "dark", null, "still needs attack spike on multiple damage in turn");
pokemonMoves.move["head smash"] = new Move ("head smash", 150, "rock", { damageSelf: 0.5 });
pokemonMoves.move["roar"] = { name: "roar", notUsed: true };
pokemonMoves.move["arm thrust"] = new Move ("arm thrust", 15, "fighting", null, "still needs multiple attacks per turn");
pokemonMoves.move["razor shell"] = new Move ("razor shell", 75, "water", { target: true, stat: "lowerDefense", factor: 1, chance: 0.5 });
pokemonMoves.move["revenge"] = new Move ("revenge", 60, "fighting", null, "still needs multiplier if user was attacked first");
pokemonMoves.move["encore"] = { name: "encore", notUsed: true };
pokemonMoves.move["retaliate"] = new Move ("retaliate", 70, "normal", null, "still needs attack multiplier on teamate faint");
pokemonMoves.move["megahorn"] = new Move ("megahorn", 120, "bug", null);
pokemonMoves.move["pin missile"] = new Move ("pin missile", 25, "bug", null, "still needs multiple attack in turn");
pokemonMoves.move["pain split"] = { name: "pain split", notUsed: true };
pokemonMoves.move["needle arm"] = new Move ("needle arm", 60, "grass", null, "still needs flinching chance");
pokemonMoves.move["belly drum"] = { name: "belly drum", notUsed: true };
pokemonMoves.move["spikey shield"] = { name: "spikey shield", notUsed: true };
pokemonMoves.move["giga impact"] = new Move ("giga impact", 150, "normal", { wait: { turns: 2, attackOn: 1 } });
pokemonMoves.move["howl"] = new Move ("howl", POWER, "normal", { target: false, stat: "upAttack", factor: 1 });
pokemonMoves.move["psybeam"] = new Move ("psybeam", 65, "psychic", { target: true, affliction: "confusion", chance: 0.1 });
pokemonMoves.move["lucky chant"] = { name: "lucky chant", notUsed: true };
pokemonMoves.move["psyshock"] = new Move ("psyshock", 80, "psychic", null);
pokemonMoves.move["will-o-wisp"] = new Move ("will-o-wisp", POWER, "fire", { target: true, affliction: "burn" });
pokemonMoves.move["psychic"] = new Move ("psychic", 90, "psychic", { target: true, stat: "lowerDefense", chance: 0.1 });
pokemonMoves.move["sunny day"] = { name: "sunny day", notUsed: true };
pokemonMoves.move["magic room"] = { name: "magic room", notUsed: true };
pokemonMoves.move["fire blast"] = new Move ("fire blast", 110, "fire", { target: true, affliction: "burn", chance: 0.1 });
pokemonMoves.move["future sight"] = new Move ("future sight", 120, "psychic", { wait: { turns: 3, attackOn: 3 } }, "still needs to allow regular action during wait");
pokemonMoves.move["role play"] = { name: "role play", notUsed: true };
pokemonMoves.move["switcheroo"] = { name: "switcheroo", notUsed: true };
pokemonMoves.move["shadow ball"] = new Move ("shadow ball", 80, "ghost", { target: true, stat: "lowerDefense", chance: 0.2 });
pokemonMoves.move["mystical fire"] = new Move ("mystical fire", 75, "fire", { target: true, stat: "lowerAttack", factor: 1 });
pokemonMoves.move["lick"] = new Move ("lick", 30, "ghost", { target: true, affliction: "paralyze", chance: 0.3 });
pokemonMoves.move["round"] = new Move ("round", 60, "normal", null);
pokemonMoves.move["fling"] = { name: "fling", notUsed: true };
pokemonMoves.move["smack down"] = new Move ("smack down", 50, "rock", null, "still needs to make flying pokemon vulnerable to ground");
pokemonMoves.move["substitute"] = { name: "substitute", notUsed: true };
pokemonMoves.move["bounce"] = new Move ("bounce", 85, "flying", { wait: { turns: 2, attackOn: 2 }, target: true, affliction: "paralyze", chance: 0.3 });
pokemonMoves.move["double team"] = { name: "double team", notUsed: true };
pokemonMoves.move["mat block"] = { name: "mat block", notUsed: true };
pokemonMoves.move["shadow sneak"] = new Move ("shadow sneak", 40, "ghost", null);
pokemonMoves.move["spikes"] = { name: "spikes", notUsed: true };
pokemonMoves.move["feint attack"] = new Move ("feint attack", 60, "dark", null);
pokemonMoves.move["water shuriken"] = new Move ("water shuriken", 15, "water", null, "still needs multiple hits on each attack");
pokemonMoves.move["extrasensory"] = new Move ("extrasensory", 80, "psychic", { target: true, affliction: "flinch", chance: 0.3 });
pokemonMoves.move["haze"] = { name: "haze", notUsed: true };
pokemonMoves.move["leafage"] = new Move ("leafage", 40, "grass", null);
pokemonMoves.move["astonish"] = new Move ("astonish", 30, "ghost", { target: true, affliction: "flinch", chance: 0.3 });
pokemonMoves.move["pluck"] = new Move ("pluck", 60, "flying", null);
pokemonMoves.move["sucker punch"] = new Move ("sucker punch", 70, "dark", null, "still needs check if user is preparing an attack to work");
pokemonMoves.move["feather dance"] = new Move ("feather dance", POWER, "flying", { target: true, stat: "lowerAttack", factor: 2 });
pokemonMoves.move["u-turn"] = { name: "u-turn", notUsed: true };
pokemonMoves.move["outrage"] = new Move ("outrage", 120, "dragon", { target: false, affliction: "confusion", wait: { turns: 3, attackOn: "all", afflictionOn: 3 } });
pokemonMoves.move["throat chop"] = new Move ("throat chop", POWER, "TYPE", null);
pokemonMoves.move["cross chop"] = new Move ("cross chop", 100, "fighting", null);
pokemonMoves.move["disarming voice"] = new Move ("disarming voice", 40, "fairy", null);
pokemonMoves.move["baby-doll eyes"] = new Move ("baby-doll eyes", POWER, "fairy", { target: true, stat: "lowerAttack", factor: 1 });
pokemonMoves.move["sing"] = new Move ("sing", POWER, "normal", { target: true, affliction: "sleep", chance: 1 });
pokemonMoves.move["double slap"] = new Move ("double slap", 15, "normal", null, "still needs to attack multiple times per turn");
pokemonMoves.move["hyper voice"] = new Move ("hyper voice", 90, "normal", null);
pokemonMoves.move["moonblast"] = new Move ("moonblast", 95, "fairy", { target: true, stat: "lowerAttack", chance: 0.3, factor: 1 });
pokemonMoves.move["captivate"] = new Move ("captivate", POWER, "TYPE", { target: true, stat: "lowerAttack", factor: 2 }, "still needs check to only trigger when pokemon is opposite gender");
pokemonMoves.move["misty terrain"] = new Move ("misty terrain", POWER, "fairy", null, "still needs to protect from status conditions");
// pokemonMoves.move["NAME"] = new Move ("NAME", POWER, "TYPE", null);
