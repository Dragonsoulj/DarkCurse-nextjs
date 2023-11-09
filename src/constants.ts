import type {
  BonusPointsItem,
  Fortification,
  OffensiveUpgradeType,
  PlayerBonus,
  SentryUpgradeType,
  SpyUpgradeType,
  Unit,
  UnitUpgradeType,
  Weapon,
} from './types/typings';

export const Fortifications: Fortification[] = [
  {
    name: 'Manor',
    level: 1,
    levelRequirement: 0,
    hitpoints: 50,
    costPerRepairPoint: 5,
    goldPerTurn: 1000,
    defenseBonusPercentage: 5,
    cost: 0,
  },
  {
    name: 'Village',
    level: 2,
    levelRequirement: 5,
    hitpoints: 100,
    costPerRepairPoint: 15,
    goldPerTurn: 2000,
    defenseBonusPercentage: 10,
    cost: 100000,
  },
  {
    name: 'Town',
    level: 3,
    levelRequirement: 10,
    hitpoints: 200,
    costPerRepairPoint: 35,
    goldPerTurn: 3000,
    defenseBonusPercentage: 15,
    cost: 250000,
  },
  {
    name: 'Outpost',
    level: 4,
    levelRequirement: 15,
    hitpoints: 300,
    costPerRepairPoint: 75,
    goldPerTurn: 4000,
    defenseBonusPercentage: 20,
    cost: 500000,
  },
  {
    name: 'Outpost Level 2',
    level: 5,
    levelRequirement: 20,
    hitpoints: 500,
    costPerRepairPoint: 125,
    goldPerTurn: 5000,
    defenseBonusPercentage: 25,
    cost: 1000000,
  },
  {
    name: 'Outpost Level 3',
    level: 6,
    levelRequirement: 25,
    hitpoints: 750,
    costPerRepairPoint: 225,
    goldPerTurn: 6000,
    defenseBonusPercentage: 30,
    cost: 2000000,
  },
  {
    name: 'Stronghold',
    level: 7,
    levelRequirement: 30,
    hitpoints: 1000,
    costPerRepairPoint: 325,
    goldPerTurn: 7000,
    defenseBonusPercentage: 35,
    cost: 3000000,
  },
  {
    name: 'Stronghold Level 2',
    level: 8,
    levelRequirement: 35,
    hitpoints: 1500,
    costPerRepairPoint: 450,
    goldPerTurn: 8000,
    defenseBonusPercentage: 40,
    cost: 4000000,
  },
  {
    name: 'Stronghold Level 3',
    level: 9,
    levelRequirement: 40,
    hitpoints: 2000,
    costPerRepairPoint: 550,
    goldPerTurn: 9000,
    defenseBonusPercentage: 45,
    cost: 5000000,
  },
  {
    name: 'Fortress',
    level: 10,
    levelRequirement: 45,
    hitpoints: 2500,
    costPerRepairPoint: 675,
    goldPerTurn: 10000,
    defenseBonusPercentage: 50,
    cost: 7500000,
  },
  {
    name: 'Fortress Level 2',
    level: 11,
    levelRequirement: 50,
    hitpoints: 3000,
    costPerRepairPoint: 750,
    goldPerTurn: 11000,
    defenseBonusPercentage: 55,
    cost: 10000000,
  },
  {
    name: 'Fortress Level 3',
    level: 12,
    levelRequirement: 55,
    hitpoints: 3500,
    costPerRepairPoint: 875,
    goldPerTurn: 12000,
    defenseBonusPercentage: 60,
    cost: 15000000,
  },
  {
    name: 'Citadel',
    level: 13,
    levelRequirement: 60,
    hitpoints: 4000,
    costPerRepairPoint: 1150,
    goldPerTurn: 13000,
    defenseBonusPercentage: 65,
    cost: 20000000,
  },
  {
    name: 'Citadel Level 2',
    level: 14,
    levelRequirement: 65,
    hitpoints: 4500,
    costPerRepairPoint: 1550,
    goldPerTurn: 14000,
    defenseBonusPercentage: 70,
    cost: 30000000,
  },
  {
    name: 'Citadel Level 3',
    level: 15,
    levelRequirement: 70,
    hitpoints: 5000,
    costPerRepairPoint: 1850,
    goldPerTurn: 15000,
    defenseBonusPercentage: 75,
    cost: 40000000,
  },
  {
    name: 'Castle',
    level: 16,
    levelRequirement: 75,
    hitpoints: 5500,
    costPerRepairPoint: 2100,
    goldPerTurn: 16000,
    defenseBonusPercentage: 80,
    cost: 50000000,
  },
  {
    name: 'Castle Level 2',
    level: 17,
    levelRequirement: 80,
    hitpoints: 6000,
    costPerRepairPoint: 2900,
    goldPerTurn: 17000,
    defenseBonusPercentage: 85,
    cost: 75000000,
  },
  {
    name: 'Castle Level 3',
    level: 18,
    levelRequirement: 85,
    hitpoints: 6500,
    costPerRepairPoint: 3600,
    goldPerTurn: 18000,
    defenseBonusPercentage: 90,
    cost: 100000000,
  },
  {
    name: 'Kingdom',
    level: 19,
    levelRequirement: 90,
    hitpoints: 7000,
    costPerRepairPoint: 5000,
    goldPerTurn: 19000,
    defenseBonusPercentage: 95,
    cost: 150000000,
  },
  {
    name: 'Kingdom Level 2',
    level: 20,
    levelRequirement: 95,
    hitpoints: 7500,
    costPerRepairPoint: 6750,
    goldPerTurn: 20000,
    defenseBonusPercentage: 100,
    cost: 200000000,
  },
  {
    name: 'Kingdom Level 3',
    level: 21,
    levelRequirement: 100,
    hitpoints: 8000,
    costPerRepairPoint: 7500,
    goldPerTurn: 21000,
    defenseBonusPercentage: 105,
    cost: 250000000,
  },
  {
    name: 'Empire',
    level: 22,
    levelRequirement: 105,
    hitpoints: 8500,
    costPerRepairPoint: 8250,
    goldPerTurn: 22000,
    defenseBonusPercentage: 110,
    cost: 300000000,
  },
  {
    name: 'Empire Level 2',
    level: 23,
    levelRequirement: 110,
    hitpoints: 9000,
    costPerRepairPoint: 9000,
    goldPerTurn: 23000,
    defenseBonusPercentage: 115,
    cost: 350000000,
  },
  {
    name: 'Empire Level 3',
    level: 24,
    levelRequirement: 115,
    hitpoints: 9500,
    costPerRepairPoint: 9750,
    goldPerTurn: 24000,
    defenseBonusPercentage: 120,
    cost: 400000000,
  },
];

export const EconomyUpgrades = {
  0: {
    name: "Farm",
    fortLevel: 1,
    goldPerWorker: 50,
    depositsPerDay: 3,
    goldTransferRec: 0,
    goldTransferTx: 0,
    cost: 0
  },
  1: {
    name: "Produce Market",
    fortLevel: 3,
    goldPerWorker: 55,
    depositsPerDay: 4,
    goldTransferRec: 0,
    goldTransferTx: 0,
    cost: 500000
  },
  2: {
    name: "Livestock Market",
    fortLevel: 7,
    goldPerWorker: 60,
    depositsPerDay: 5,
    goldTransferRec: 0,
    goldTransferTx: 0,
    cost: 2000000
  },
  3: {
    name: "Coal Mine",
    fortLevel: 11, //Fortress Level 2
    goldPerWorker: 65,
    depositsPerDay: 6,
    goldTransferRec: 50000,
    goldTransferTx: 150000,
    cost: 5000000
  },
  4: {
    name: "Tavern",
    fortLevel: 15, //Citadel Level 3
    goldPerWorker: 70,
    depositsPerDay: 7,
    goldTransferRec: 100000,
    goldTransferTx: 300000,
    cost: 15000000
  },
  5: {
    name: "Copper Mine",
    fortLevel: 19, //Kingdom
    goldPerWorker: 75,
    depositsPerDay: 8,
    goldTransferRec: 250000,
    goldTransferTx: 600000,
    cost: 37500000
  },
  6: {
    name: "Meat Market",
    fortLevel: 23, //Empire Level 2
    goldPerWorker: 80,
    depositsPerDay: 9,
    goldTransferRec: 500000,
    goldTransferTx: 1250000,
    cost: 100000000
  }
}

export const BattleUpgrades: UnitUpgradeType[] = [
  {
    type: 'OFFENSE',
    name: 'Steeds',
    StructureUpgradeLevelRequired: 1,
    level: 1,
    bonus: 200,
    cost: 100000,
    unitsCovered: 1,
  },
  {
    type: 'OFFENSE',
    name: 'War Elephant',
    StructureUpgradeLevelRequired: 1,
    level: 2,
    bonus: 1000,
    cost: 5000000,
    unitsCovered: 1,
  },
  {
    type: 'DEFENSE',
    name: 'Guard Tower',
    StructureUpgradeLevelRequired: 1,
    level: 1,
    bonus: 200,
    cost: 100000,
    unitsCovered: 5,
  },
];

export const OffenseiveUpgrades: OffensiveUpgradeType[] = [
  {
    name: 'Dagger Training',
    fortLevelRequirement: 1,
    offenseBonusPercentage: 0,
    cost: 0,
    level: 1,
  },
  {
    name: 'Hand To Hand Combat',
    fortLevelRequirement: 2,
    offenseBonusPercentage: 5,
    cost: 100000,
    level: 2,
  },
  {
    name: 'Mastery',
    fortLevelRequirement: 3,
    offenseBonusPercentage: 10,
    cost: 250000,
    level: 3,
  },
  {
    name: 'Ladders',
    fortLevelRequirement: 4,
    offenseBonusPercentage: 15,
    cost: 500000,
    level: 4,
  },
  {
    name: 'Hatchet Training',
    fortLevelRequirement: 5,
    offenseBonusPercentage: 20,
    cost: 1000000,
    level: 5,
  },
  {
    name: 'Battle Upgrades Level 1',
    fortLevelRequirement: 6,
    offenseBonusPercentage: 25,
    cost: 2000000,
    level: 6,
  },
  {
    name: 'Hatchet Mastery',
    fortLevelRequirement: 7,
    offenseBonusPercentage: 30,
    cost: 3000000,
    level: 7,
  },
  {
    name: 'Mounted Combat Training',
    fortLevelRequirement: 8,
    offenseBonusPercentage: 35,
    cost: 4000000,
    level: 8,
  },
  {
    name: 'Quarterstaff Training',
    fortLevelRequirement: 9,
    offenseBonusPercentage: 40,
    cost: 5000000,
    level: 9,
  },
  {
    name: 'Sapping',
    fortLevelRequirement: 10,
    offenseBonusPercentage: 45,
    cost: 7500000,
    level: 10,
  },
  {
    name: 'Quarterstaff Mastery',
    fortLevelRequirement: 11,
    offenseBonusPercentage: 50,
    cost: 10000000,
    level: 11,
  },
  {
    name: 'Battering Rams',
    fortLevelRequirement: 12,
    offenseBonusPercentage: 55,
    cost: 15000000,
    level: 12,
  },
  {
    name: 'Mace Training',
    fortLevelRequirement: 13,
    offenseBonusPercentage: 60,
    cost: 20000000,
    level: 13,
  },
  {
    name: 'Pole Mace',
    fortLevelRequirement: 14,
    offenseBonusPercentage: 65,
    cost: 30000000,
    level: 14,
  },
  {
    name: 'Mace Mastery',
    fortLevelRequirement: 15,
    offenseBonusPercentage: 70,
    cost: 40000000,
    level: 15,
  },
  {
    name: 'Battle Upgrades Level 2',
    fortLevelRequirement: 75,
    offenseBonusPercentage: 50000000,
    cost: 0,
    level: 16,
  },
  {
    name: 'Short Sword Training',
    fortLevelRequirement: 17,
    offenseBonusPercentage: 80,
    cost: 75000000,
    level: 17,
  },
  {
    name: 'War Commanders',
    fortLevelRequirement: 18,
    offenseBonusPercentage: 85,
    cost: 100000000,
    level: 18,
  },
  {
    name: 'Short Sword Mastery',
    fortLevelRequirement: 19,
    offenseBonusPercentage: 90,
    cost: 150000000,
    level: 19,
  },
  {
    name: 'Wyrm',
    fortLevelRequirement: 20,
    offenseBonusPercentage: 95,
    cost: 200000000,
    level: 20,
  },
  {
    name: 'Morning Star Training',
    fortLevelRequirement: 21,
    offenseBonusPercentage: 100,
    cost: 250000000,
    level: 21,
  },
  {
    name: 'Ballistas',
    fortLevelRequirement: 22,
    offenseBonusPercentage: 105,
    cost: 300000000,
    level: 22,
  },
];

export const SpyUpgrades: SpyUpgradeType[] = [
  {
    name: 'Sling Training',
    fortLevelRequirement: 1,
    offenseBonusPercentage: 0,
    maxInfiltrations: 0,
    maxAssassinations: 0,
    cost: 0,
  },
  {
    name: 'Rope Training',
    fortLevelRequirement: 2,
    offenseBonusPercentage: 5,
    maxInfiltrations: 0,
    maxAssassinations: 0,
    cost: 50000,
  },
  {
    name: 'Basic Stealth Training',
    fortLevelRequirement: 3,
    offenseBonusPercentage: 10,
    maxInfiltrations: 0,
    maxAssassinations: 0,
    cost: 125000,
  },
  {
    name: 'Basic Disguise Kit Usage',
    fortLevelRequirement: 4,
    offenseBonusPercentage: 15,
    maxInfiltrations: 0,
    maxAssassinations: 0,
    cost: 250000,
  },
  {
    name: 'Brass Knuckles Training',
    fortLevelRequirement: 5,
    offenseBonusPercentage: 20,
    maxInfiltrations: 0,
    maxAssassinations: 0,
    cost: 500000,
  },
  {
    name: 'Informants',
    fortLevelRequirement: 6,
    offenseBonusPercentage: 25,
    maxInfiltrations: 0,
    maxAssassinations: 0,
    cost: 1000000,
  },
  {
    name: 'Infiltration Training',
    fortLevelRequirement: 7,
    offenseBonusPercentage: 30,
    maxInfiltrations: 1,
    maxAssassinations: 0,
    cost: 1500000,
  },
  {
    name: 'Grappling Hook Training',
    fortLevelRequirement: 8,
    offenseBonusPercentage: 35,
    maxInfiltrations: 2,
    maxAssassinations: 0,
    cost: 2000000,
  },
  {
    name: 'Cudgel Training',
    fortLevelRequirement: 9,
    offenseBonusPercentage: 40,
    maxInfiltrations: 3,
    maxAssassinations: 0,
    cost: 2500000,
  },
  {
    name: 'Informant Detection',
    fortLevelRequirement: 10,
    offenseBonusPercentage: 45,
    maxInfiltrations: 4,
    maxAssassinations: 0,
    cost: 3750000,
  },
  {
    name: 'Stealth Training',
    fortLevelRequirement: 11,
    offenseBonusPercentage: 50,
    maxInfiltrations: 5,
    maxAssassinations: 0,
    cost: 5000000,
  },
  {
    name: 'Poison Usage',
    fortLevelRequirement: 12,
    offenseBonusPercentage: 55,
    maxInfiltrations: 6,
    maxAssassinations: 0,
    cost: 7500000,
  },
  {
    name: 'Knife Training',
    fortLevelRequirement: 13,
    offenseBonusPercentage: 60,
    maxInfiltrations: 7,
    maxAssassinations: 0,
    cost: 10000000,
  },
  {
    name: 'Languages',
    fortLevelRequirement: 14,
    offenseBonusPercentage: 65,
    maxInfiltrations: 8,
    maxAssassinations: 0,
    cost: 15000000,
  },
  {
    name: 'Languages',
    fortLevelRequirement: 15,
    offenseBonusPercentage: 70,
    maxInfiltrations: 9,
    maxAssassinations: 0,
    cost: 20000000,
  },
  {
    name: 'Lockpicks Usage',
    fortLevelRequirement: 16,
    offenseBonusPercentage: 75,
    maxInfiltrations: 10,
    maxAssassinations: 50,
    cost: 20000000,
  },
  {
    name: 'Hatchet Training',
    fortLevelRequirement: 17,
    offenseBonusPercentage: 80,
    maxInfiltrations: 11,
    maxAssassinations: 70,
    cost: 37500000,
  },
  {
    name: 'Translation',
    fortLevelRequirement: 18,
    offenseBonusPercentage: 85,
    maxInfiltrations: 12,
    maxAssassinations: 90,
    cost: 50000000,
  },
  {
    name: 'Camouflage Training',
    fortLevelRequirement: 19,
    offenseBonusPercentage: 90,
    maxInfiltrations: 13,
    maxAssassinations: 110,
    cost: 75000000,
  },
  {
    name: 'Tripwire Setting',
    fortLevelRequirement: 20,
    offenseBonusPercentage: 95,
    maxInfiltrations: 14,
    maxAssassinations: 130,
    cost: 100000000,
  },
  {
    name: 'Dart Gun Training',
    fortLevelRequirement: 21,
    offenseBonusPercentage: 100,
    maxInfiltrations: 15,
    maxAssassinations: 150,
    cost: 125000000,
  },
  {
    name: 'Forging',
    fortLevelRequirement: 22,
    offenseBonusPercentage: 105,
    maxInfiltrations: 16,
    maxAssassinations: 170,
    cost: 150000000,
  },
];

export const SentryUpgrades: SentryUpgradeType[] = [
  {
    name: 'Sling Training',
    fortLevelRequirement: 1,
    defenseBonusPercentage: 0,
    cost: 0,
  },
  {
    name: 'Observation Training',
    fortLevelRequirement: 2,
    defenseBonusPercentage: 5,
    cost: 50000,
  },
  {
    name: 'Sling Mastery',
    fortLevelRequirement: 3,
    defenseBonusPercentage: 10,
    cost: 125000,
  },
  {
    name: 'Detection Training',
    fortLevelRequirement: 4,
    defenseBonusPercentage: 15,
    cost: 250000,
  },
  {
    name: 'Dagger Training',
    fortLevelRequirement: 5,
    defenseBonusPercentage: 20,
    cost: 500000,
  },
  {
    name: 'Informants',
    fortLevelRequirement: 6,
    defenseBonusPercentage: 25,
    cost: 1000000,
  },
  {
    name: 'Dagger Mastery',
    fortLevelRequirement: 7,
    defenseBonusPercentage: 30,
    cost: 1500000,
  },
  {
    name: 'Stealth Training',
    fortLevelRequirement: 8,
    defenseBonusPercentage: 35,
    cost: 2000000,
  },
  {
    name: 'Hatchet Training',
    fortLevelRequirement: 9,
    defenseBonusPercentage: 40,
    cost: 2500000,
  },
  {
    name: 'Informant Detection',
    fortLevelRequirement: 10,
    defenseBonusPercentage: 45,
    cost: 3750000,
  },
  {
    name: 'Hatchet Mastery',
    fortLevelRequirement: 11,
    defenseBonusPercentage: 50,
    cost: 5000000,
  },
  {
    name: 'Poison Detection',
    fortLevelRequirement: 12,
    defenseBonusPercentage: 55,
    cost: 7500000,
  },
  {
    name: 'Quarterstaff Training',
    fortLevelRequirement: 13,
    defenseBonusPercentage: 60,
    cost: 10000000,
  },
  {
    name: 'Languages',
    fortLevelRequirement: 14,
    defenseBonusPercentage: 65,
    cost: 15000000,
  },
  {
    name: 'Quarterstaff Mastery',
    fortLevelRequirement: 15,
    defenseBonusPercentage: 70,
    cost: 20000000,
  },
  {
    name: 'Stealth Detection',
    fortLevelRequirement: 16,
    defenseBonusPercentage: 75,
    cost: 25000000,
  },
  {
    name: 'Spear Training',
    fortLevelRequirement: 17,
    defenseBonusPercentage: 80,
    cost: 37500000,
  },
  {
    name: 'Translation',
    fortLevelRequirement: 18,
    defenseBonusPercentage: 85,
    cost: 50000000,
  },
  {
    name: 'Spear Mastery',
    fortLevelRequirement: 19,
    defenseBonusPercentage: 90,
    cost: 75000000,
  },
  {
    name: 'Tripwire Detection',
    fortLevelRequirement: 20,
    defenseBonusPercentage: 95,
    cost: 100000000,
  },
  {
    name: 'Mace Training',
    fortLevelRequirement: 21,
    defenseBonusPercentage: 100,
    cost: 125000000,
  },
  {
    name: 'Forgery Detection',
    fortLevelRequirement: 22,
    defenseBonusPercentage: 105,
    cost: 150000000,
  },
];

export const ArmoryUpgrades = {
  1: {
    name: 'Leather Armory 1',
    fortLevel: 5,
    cost: 500000,
  },
  2: {
    name: 'Leather Armory 2',
    fortLevel: 10, // Stronghold Level 3
    cost: 2000000,
  },
  3: {
    name: 'Chainmail Armory 1',
    fortLevel: 13, // Citadel
    cost: 5000000,
  },
  4: {
    name: 'Chainmail Armory 2',
    fortLevel: 17, // Castle Level 2
    cost: 15000000,
  },
  5: {
    name: 'Chainmail Armory 3',
    fortLevel: 21, // Kingdom Level 3
    cost: 37500000,
  },
};

export const HouseUpgrades = {
  0: {
    name: 'Housing Level 0',
    fortLevel: 0,
    citizensDaily: 1,
    cost: 0,
  },
  1: {
    name: 'Housing Level 1',
    fortLevel: 1,
    citizensDaily: 10,
    cost: 500000,
  },
  2: {
    name: 'Housing Level 2',
    fortLevel: 6, // Outpost Level 3
    citizensDaily: 20,
    cost: 1000000,
  },
  3: {
    name: 'Housing Level 3',
    fortLevel: 10, // Fortress
    citizensDaily: 30,
    cost: 1500000,
  },
  4: {
    name: 'Housing Level 4',
    fortLevel: 14, // Citadel Level 2
    citizensDaily: 40,
    cost: 2500000,
  },
  5: {
    name: 'Housing Level 5',
    fortLevel: 18, // Castle Level 3
    citizensDaily: 50,
    cost: 3500000,
  },
  6: {
    name: 'Housing Level 6',
    fortLevel: 22, // Empire
    citizensDaily: 60,
    cost: 5000000,
  },
};

export const Levels = {
  1: 0,
  2: 6000,
  3: 13000,
  4: 19000,
  5: 23000,
  6: 34000,
  7: 43000,
  8: 53000,
  9: 64000,
  10: 76000,
  11: 89000,
  12: 103000,
  13: 118000,
  14: 134000,
  15: 151000,
  16: 169000,
};

export const WeaponTypes: Weapon[] = [
  {
    name: 'Dagger',
    usage: 'OFFENSE',
    level: 1,
    bonus: 25,
    cost: 12500,
    type: 'WEAPON',
    race: 'ALL',
  },
  {
    name: 'Hatchet',
    usage: 'OFFENSE',
    level: 2,
    bonus: 50,
    cost: 25000,
    type: 'WEAPON',
    race: 'ALL',
  },
  {
    name: 'Quarterstaff',
    usage: 'OFFENSE',
    level: 3,
    bonus: 100,
    cost: 50000,
    type: 'WEAPON',
    race: 'ALL',
  },
  {
    name: 'Mace',
    usage: 'OFFENSE',
    level: 4,
    bonus: 225,
    cost: 100000,
    type: 'WEAPON',
    race: 'ALL',
  },
  {
    name: 'Battle Axe',
    usage: 'OFFENSE',
    level: 5,
    bonus: 700,
    cost: 200000,
    type: 'WEAPON',
    race: 'ALL',
  },
  {
    name: 'Short Sword',
    usage: 'OFFENSE',
    level: 6,
    bonus: 1000,
    cost: 500000,
    type: 'WEAPON',
    race: 'ALL',
  },
  {
    name: 'Long Sword',
    usage: 'OFFENSE',
    level: 6,
    bonus: 1500,
    cost: 750000,
    type: 'WEAPON',
    race: 'HUMAN',
  },
  {
    name: 'Padded Hood',
    usage: 'OFFENSE',
    level: 1,
    bonus: 6,
    cost: 3000,
    type: 'HELM',
    race: 'ALL',
  },
  {
    name: 'Leather Hood',
    usage: 'OFFENSE',
    level: 2,
    bonus: 12,
    cost: 6000,
    type: 'HELM',
    race: 'ALL',
  },
  {
    name: 'Studded Leather Hood',
    usage: 'OFFENSE',
    level: 3,
    bonus: 25,
    cost: 12500,
    type: 'HELM',
    race: 'ALL',
  },
  {
    name: 'Padded Armor',
    usage: 'OFFENSE',
    level: 1,
    bonus: 19,
    cost: 9500,
    type: 'ARMOR',
    race: 'ALL',
  },
  {
    name: 'Leather Armor',
    usage: 'OFFENSE',
    level: 2,
    bonus: 38,
    cost: 19000,
    type: 'ARMOR',
    race: 'ALL',
  },
  {
    name: 'Studded Leather Armor',
    usage: 'OFFENSE',
    level: 3,
    bonus: 75,
    cost: 37500,
    type: 'ARMOR',
    race: 'ALL',
  },
  {
    name: 'Padded Armor',
    usage: 'OFFENSE',
    level: 1,
    bonus: 6,
    cost: 3000,
    type: 'BOOTS',
    race: 'ALL',
  },
  {
    name: 'Leather Armor',
    usage: 'OFFENSE',
    level: 2,
    bonus: 12,
    cost: 6000,
    type: 'BOOTS',
    race: 'ALL',
  },
  {
    name: 'Studded Leather Armor',
    usage: 'OFFENSE',
    level: 3,
    bonus: 25,
    cost: 12500,
    type: 'BOOTS',
    race: 'ALL',
  },
  {
    name: 'Padded Bracers',
    usage: 'OFFENSE',
    level: 1,
    bonus: 3,
    cost: 1500,
    type: 'BRACERS',
    race: 'ALL',
  },
  {
    name: 'Leather Bracers',
    usage: 'OFFENSE',
    level: 2,
    bonus: 5,
    cost: 2500,
    type: 'BRACERS',
    race: 'ALL',
  },
  {
    name: 'Studded Leather Bracers',
    usage: 'OFFENSE',
    level: 3,
    bonus: 10,
    cost: 5000,
    type: 'BRACERS',
    race: 'ALL',
  },
  {
    name: 'Small Wooden Shield',
    usage: 'OFFENSE',
    level: 1,
    bonus: 12,
    cost: 6000,
    type: 'SHIELD',
    race: 'ALL',
  },
  {
    name: 'Medium Wooden Shield',
    usage: 'OFFENSE',
    level: 2,
    bonus: 25,
    cost: 12500,
    type: 'SHIELD',
    race: 'ALL',
  },
  {
    name: 'Large Wooden Shield',
    usage: 'OFFENSE',
    level: 3,
    bonus: 50,
    cost: 25000,
    type: 'SHIELD',
    race: 'ALL',
  },
  {
    name: 'Sling',
    usage: 'DEFENSE',
    level: 1,
    bonus: 25,
    cost: 12500,
    type: 'WEAPON',
    race: 'ALL',
  },
  {
    name: 'Hatchet',
    usage: 'DEFENSE',
    level: 2,
    bonus: 50,
    cost: 2500,
    type: 'WEAPON',
    race: 'ALL',
  },
  {
    name: 'Spear',
    usage: 'DEFENSE',
    level: 3,
    bonus: 100,
    cost: 50000,
    type: 'WEAPON',
    race: 'ALL',
  },
  {
    name: 'Padded Hood',
    usage: 'DEFENSE',
    level: 1,
    bonus: 6,
    cost: 3000,
    type: 'HELM',
    race: 'ALL',
  },
  {
    name: 'Leather Hood',
    usage: 'DEFENSE',
    level: 2,
    bonus: 12,
    cost: 6000,
    type: 'HELM',
    race: 'ALL',
  },
  {
    name: 'Studded Leather Hood',
    usage: 'DEFENSE',
    level: 3,
    bonus: 25,
    cost: 12500,
    type: 'HELM',
    race: 'ALL',
  },
  {
    name: 'Padded Armor',
    usage: 'DEFENSE',
    level: 1,
    bonus: 19,
    cost: 9500,
    type: 'ARMOR',
    race: 'ALL',
  },
  {
    name: 'Leather Armor',
    usage: 'DEFENSE',
    level: 2,
    bonus: 38,
    cost: 19000,
    type: 'ARMOR',
    race: 'ALL',
  },
  {
    name: 'Studded Leather Armor',
    usage: 'DEFENSE',
    level: 3,
    bonus: 75,
    cost: 37500,
    type: 'ARMOR',
    race: 'ALL',
  },
  {
    name: 'Padded Armor',
    usage: 'DEFENSE',
    level: 1,
    bonus: 6,
    cost: 3000,
    type: 'BOOTS',
    race: 'ALL',
  },
  {
    name: 'Leather Armor',
    usage: 'DEFENSE',
    level: 2,
    bonus: 12,
    cost: 6000,
    type: 'BOOTS',
    race: 'ALL',
  },
  {
    name: 'Studded Leather Armor',
    usage: 'DEFENSE',
    level: 3,
    bonus: 25,
    cost: 12500,
    type: 'BOOTS',
    race: 'ALL',
  },
  {
    name: 'Padded Bracers',
    usage: 'DEFENSE',
    level: 1,
    bonus: 3,
    cost: 1500,
    type: 'BRACERS',
    race: 'ALL',
  },
  {
    name: 'Leather Bracers',
    usage: 'DEFENSE',
    level: 2,
    bonus: 5,
    cost: 2500,
    type: 'BRACERS',
    race: 'ALL',
  },
  {
    name: 'Studded Leather Bracers',
    usage: 'DEFENSE',
    level: 3,
    bonus: 10,
    cost: 5000,
    type: 'BRACERS',
    race: 'ALL',
  },
  {
    name: 'Small Wooden Shield',
    usage: 'DEFENSE',
    level: 1,
    bonus: 12,
    cost: 6000,
    type: 'SHIELD',
    race: 'ALL',
  },
  {
    name: 'Medium Wooden Shield',
    usage: 'DEFENSE',
    level: 2,
    bonus: 25,
    cost: 12500,
    type: 'SHIELD',
    race: 'ALL',
  },
  {
    name: 'Large Wooden Shield',
    usage: 'DEFENSE',
    level: 3,
    bonus: 50,
    cost: 25000,
    type: 'SHIELD',
    race: 'ALL',
  },
];

export const UnitTypes: Unit[] = [
  {
    name: 'Citizen',
    type: 'CITIZEN',
    level: 1,
    bonus: 0,
    cost: 0,
    fortLevel: 1,
    hp: 10,
  },
  {
    name: 'Worker',
    type: 'WORKER',
    level: 1,
    bonus: 65,
    cost: 2000,
    fortLevel: 1,
    hp: 20,
  },
  {
    name: 'Soldier',
    type: 'OFFENSE',
    level: 1,
    bonus: 3,
    cost: 1500,
    fortLevel: 1,
    hp: 10,
  },
  {
    name: 'Knight',
    type: 'OFFENSE',
    level: 2,
    bonus: 20,
    cost: 10000,
    fortLevel: 4,
    hp: 20,
  },
  {
    name: 'Berserker',
    type: 'OFFENSE',
    level: 3,
    bonus: 50,
    cost: 25000,
    fortLevel: 7,
    hp: 30,
  },
  {
    name: 'Guard',
    type: 'DEFENSE',
    level: 1,
    bonus: 3,
    cost: 1500,
    fortLevel: 1,
    hp: 10,
  },
  {
    name: 'Archer',
    type: 'DEFENSE',
    level: 2,
    bonus: 20,
    cost: 10000,
    fortLevel: 4,
    hp: 20,
  },
  {
    name: 'Royal Guard',
    type: 'DEFENSE',
    level: 3,
    bonus: 50,
    cost: 25000,
    fortLevel: 7,
    hp: 30
  },
  { name: 'Spy', type: 'SPY', level: 1, bonus: 3, cost: 1500, fortLevel: 1 },
  {
    name: 'Infiltrator',
    type: 'SPY',
    level: 2,
    bonus: 20,
    cost: 10000,
    fortLevel: 4,
    hp: 20,
  },
  {
    name: 'Assassin',
    type: 'SPY',
    level: 3,
    bonus: 50,
    cost: 25000,
    fortLevel: 7,
    hp: 30,
  },
  {
    name: 'Sentry',
    type: 'SENTRY',
    level: 1,
    bonus: 3,
    cost: 1500,
    fortLevel: 1,
    hp: 10,
  },
  {
    name: 'Sentinel',
    type: 'SENTRY',
    level: 2,
    bonus: 20,
    cost: 10000,
    fortLevel: 4,
    hp: 20,
  },
  {
    name: 'Inquisitor',
    type: 'SENTRY',
    level: 3,
    bonus: 50,
    cost: 25000,
    fortLevel: 7,
    hp: 30,
  },
];

export const Bonuses: PlayerBonus[] = [
  { race: 'HUMAN', bonusType: 'OFFENSE', bonusAmount: 5 },
  { race: 'GOBLIN', bonusType: 'DEFENSE', bonusAmount: 5 },
  { race: 'UNDEAD', bonusType: 'OFFENSE', bonusAmount: 5 },
  { race: 'ELF', bonusType: 'DEFENSE', bonusAmount: 5 },
  { race: 'FIGHTER', bonusType: 'OFFENSE', bonusAmount: 5 },
  { race: 'CLERIC', bonusType: 'DEFENSE', bonusAmount: 5 },
  { race: 'THIEF', bonusType: 'INCOME', bonusAmount: 5 },
  { race: 'ASSASSIN', bonusType: 'INTEL', bonusAmount: 5 },
];

export const DefaultLevelBonus: BonusPointsItem[] = [
  {
    type: 'OFFENSE',
    level: 0,
  },
  { type: 'DEFENSE', level: 0 },
  { type: 'INTEL', level: 0 },
  { type: 'PRICES', level: 0 },
  { type: 'INCOME', level: 0 },
];
