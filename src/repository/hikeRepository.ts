import hikeData from "../data/hikes";
import { Hike } from "../interfaces/Hike";

const hikeRepository = {
  getHikes: (start: number, limit: number): Hike[] => {
    const hikes = hikeData as Hike[];
    const end = start + limit;

    return hikes.slice(start, end);
  },

  GetHikeBySlug: (slug: string) => {
    const hikes = hikeData as Hike[];
    return hikes.find((hike) => hike.slug === slug);
  },

  getNumberOfHikes: (): number => {
    return hikeData.length;
  },
};

export { hikeRepository };
