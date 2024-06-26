import { UnitTypes, ItemTypes } from "@/constants";
import UserModel from "@/models/Users";
import { ItemType } from "@/types/typings";
import mtRand from "./mtrand";

/**
 * Calculates the strength of a user's units.
 * @param user - The user whose units' killing strength will be calculated.
 * @param unitType - Either OFFENSE or DEFENSE.
 * @param isAttacker - Whether the user is the attacker or defender
 * @returns The total killing strength of the user's units.
 */
export function calculateStrength(user: UserModel, unitType: 'OFFENSE' | 'DEFENSE'): number {
  let strength = 0;
  const unitMultiplier = unitType === 'OFFENSE' ? (1 + parseInt(user.attackBonus.toString(), 10) / 100) :
    (1 + parseInt(user.defenseBonus.toString(), 10) / 100);

  user.units.filter((u) => u.type === unitType).forEach((unit) => {
    const unitInfo = UnitTypes.find(
      (unitType) => unitType.type === unit.type && unitType.fortLevel <= user.getLevelForUnit(unit.type)
    );
    if (unitInfo) {
      strength += (unitInfo.bonus || 0) * unit.quantity;
    }

    const itemCounts: Record<ItemType, number> = { WEAPON: 0, HELM: 0, BOOTS: 0, BRACERS: 0, SHIELD: 0, ARMOR: 0 };

    user.items.filter((item) => item.usage === unit.type).forEach((item) => {
      itemCounts[item.type] = itemCounts[item.type] || 0;

      const itemInfo = ItemTypes.find(
        (w) => w.level === item.level && w.usage === unit.type && w.type === item.type
      );
      if (itemInfo) {
        const usableQuantity = Math.min(item.quantity, unit.quantity - itemCounts[item.type]);
        strength += itemInfo.bonus * usableQuantity;
        itemCounts[item.type] += usableQuantity;
      }
    });
  });

  strength *= unitMultiplier;
  return Math.ceil(strength);
}

/**
 * Computes the amplification factor based on the target population.
 * @param targetPop The target population.
 * @returns The amplification factor.
 */
export function computeAmpFactor(targetPop: number): number {
  let ampFactor = 0.4;

  const breakpoints = [
    { limit: 1000, factor: 1.6 },
    { limit: 5000, factor: 1.5 },
    { limit: 10000, factor: 1.35 },
    { limit: 50000, factor: 1.2 },
    { limit: 100000, factor: 0.95 },
    { limit: 150000, factor: 0.75 },
  ];

  for (const bp of breakpoints) {
    if (targetPop <= bp.limit) {
      ampFactor *= bp.factor;
      break;
    }
  }

  return ampFactor;
}

/**
 * Computes the attack turns based on the user's population.
 * @param user The user whose attack turns will be computed.
 * @returns The number of attack turns.
 */
export function calculateLoot(attacker: UserModel, defender: UserModel, turns: number): bigint {
  const uniformFactor = mtRand(90, 99) / 100;
  const turnFactor = mtRand(100 + turns * 10, 100 + turns * 20) / 100;
  const levelDifferenceFactor = 1 + Math.min(0.5, (defender.level - attacker.level) * 0.05);
  const lootFactor = uniformFactor * turnFactor * levelDifferenceFactor;

  let maxGoldLoot = BigInt(100000); // Example global max gold per attack
  let defenderGold = BigInt(defender.gold);
  let calculatedLoot = Number(defenderGold) * lootFactor;
  let loot = BigInt(Math.floor(calculatedLoot));
  let maxUserGoldLoot = defenderGold * BigInt(75) / BigInt(100);

  return loot > maxUserGoldLoot ? maxUserGoldLoot : loot;
}


/**
 * Computes the attack turns based on the user's population.
 * @param user The user whose attack turns will be computed.
 * @returns The number of attack turns.
 */
export const computeUnitFactor = (unitsA: number, unitsB: number): number => {
  const factor = unitsA / unitsB;
  if (factor >= 4) return 4;
  if (factor <= 0.1) return 0.1;
  return factor;
}
