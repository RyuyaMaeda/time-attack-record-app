import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.monster.createMany({
    data: [
      { name: 'ドスランポス' },
      { name: 'バサルモス' },
      { name: 'テオテスカトル' },
    ],
  });
  await prisma.record.createMany({
    data: [
      {
        monster_id: 3,
        weapon_category: '大剣',
        weapon_name: 'ブラックミラブレイド',
        time: '08:28',
        skill: '金剛体 真打 抜刀術【技】 弱点特効 集中',
        food: '	ネコの毛づくろい上手 ネコの防御術【大】',
        handle_name: 'yosshi',
        image: '',
      },
      {
        monster_id: 3,
        weapon_category: '大剣',
        weapon_name: 'ブラックミラブレイド',
        time: '08:31',
        skill: '金剛体 真打 抜刀術【技】 弱点特効 集中',
        food: 'ネコの弱いの来い! ネコのKO術',
        handle_name: '灰猫',
        image: '',
      },
      {
        monster_id: 3,
        weapon_category: '太刀',
        weapon_name: '蛇帝刀ネポスマデュラ',
        time: '10:27',
        skill: '金剛体 真打 細菌研究家 弱点特効 集中',
        food: 'ネコの弱いの来い! ネコのKO術',
        handle_name: 'yosshi',
        image: '',
      },
      {
        monster_id: 3,
        weapon_category: '太刀',
        weapon_name: '蛇帝刀ネポスマデュラ',
        time: '10:53',
        skill: '金剛体 真打 細菌研究家 弱点特効 集中',
        food: 'ネコの弱いの来い! ネコのKO術',
        handle_name: '灰猫',
        image: '',
      },
      {
        monster_id: 3,
        weapon_category: '太刀',
        weapon_name: '蛇帝刀ネポスマデュラ',
        time: '11:05',
        skill: '金剛体 真打 細菌研究家 弱点特効 集中',
        food: 'ネコの弱いの来い! ネコのKO術',
        handle_name: 'デュース',
        image: '',
      },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
