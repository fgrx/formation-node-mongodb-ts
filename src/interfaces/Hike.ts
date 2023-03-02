interface Hike {
  slug: string;
  title: string;
  duration: number;
  image?: string;
  description: string;
  distance: number;
  start: string;
  postCode: number;
  difficulty: HikeDifficulty;
  isTop?: boolean;
  isValid?: boolean;
  date?: Date;
  isLoop: boolean;
}

type HikeDifficulty = "easy" | "average" | "hard";

export { Hike, HikeDifficulty };
