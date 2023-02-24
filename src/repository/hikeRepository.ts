import hikeData from "../data/hikes";
import { Hike } from "../interfaces/Hike";

const hikeService = {
  getHikes: (start: number, limit: number): Hike[] => {
    const hikes = hikeData as Hike[];
    return hikes.slice(start, limit);
  },
};

export { hikeService };
