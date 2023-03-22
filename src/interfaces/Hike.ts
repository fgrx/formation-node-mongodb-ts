interface Hike {
  _id?: object;
  slug?: string;
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

type HikeDifficulty = "easy" | "medium" | "hard";

export { Hike, HikeDifficulty };
