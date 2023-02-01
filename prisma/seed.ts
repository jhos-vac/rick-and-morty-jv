import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const character1 = await prisma.character.upsert({
    where: { name: 'Rick Sanchez' },
    update: {},
    create: {
      name: 'Rick Sanchez',
      species: 'Human',
    },
  });

  const character2 = await prisma.character.upsert({
    where: { name: 'Morty Smith' },
    update: {},
    create: {
      name: 'Morty Smith',
      species: 'Human',
    },
  });

  const character3 = await prisma.character.upsert({
    where: { name: 'Summer Smith' },
    update: {},
    create: {
      name: 'Summer Smith',
      species: 'Human',
    },
  });

  const character4 = await prisma.character.upsert({
    where: { name: 'Beth Smith' },
    update: {},
    create: {
      name: 'Beth Smith',
      species: 'Human',
    },
  });

  const character5 = await prisma.character.upsert({
    where: { name: 'Jerry Smith' },
    update: {},
    create: {
      name: 'Jerry Smith',
      species: 'Human',
    },
  });

  const episode1 = await prisma.episode.upsert({
    where: { name: 'Pilot' },
    update: {},
    create: {
      name: 'Pilot',
      episode: 1,
    },
  });

  const episode2 = await prisma.episode.upsert({
    where: { name: 'The Ricklantis Mixup' },
    update: {},
    create: {
      name: 'The Ricklantis Mixup',
      episode: 28,
    },
  });

  const episode3 = await prisma.episode.upsert({
    where: { name: 'M. Night Shaym-Aliens!' },
    update: {},
    create: {
      name: 'M. Night Shaym-Aliens!',
      episode: 4,
    },
  });

  const episode4 = await prisma.episode.upsert({
    where: { name: 'Meeseeks and Destroy' },
    update: {},
    create: {
      name: 'Meeseeks and Destroy',
      episode: 5,
    },
  });

  const episode5 = await prisma.episode.upsert({
    where: { name: 'Rixty Minutes' },
    update: {},
    create: {
      name: 'Rixty Minutes',
      episode: 8,
    },
  });

  console.log(
    'CHARACTER' +
      { character1, character2, character3, character4, character5 },
  );

  console.log(
    'EPISODES' + { episode1, episode2, episode3, episode4, episode5 },
  );
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
