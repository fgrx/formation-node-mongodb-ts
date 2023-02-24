import hikeData from "../data/hikes";
import { Hike } from "../interfaces/Hike";

const hikeRepository = {
  getHikes: (start: number, limit: number): Hike[] => {
    const hikes = hikeData as Hike[];
    return hikes.slice(start, limit);
  },

  GetHikeBySlug: (slug: string) => {
    const hikes = hikeData as Hike[];
    return hikes.find((hike) => hike.slug === slug);
  },
};

export { hikeRepository };
