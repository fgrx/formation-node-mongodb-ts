import { Hike } from "../interfaces/Hike";
import { hikeModel } from "../db/models/hikeModel";

interface SearchQuery {
  difficulty?: string;
  distance?: string;
  isLoop?: boolean;
}

const hikeRepository = {
  getHikes: async (start: number, limit: number): Promise<Hike[]> =>
    await hikeModel.find().skip(start).limit(limit),

  searchHikes: async (searchQuery: SearchQuery): Promise<Hike[]> =>
    await hikeModel.find(searchQuery),

  GetHikeBySlug: async (slug: string): Promise<Hike | null> =>
    await hikeModel.findOne({ slug }),

  getNumberOfHikes: async (): Promise<number> => await hikeModel.find().count(),
};

export { hikeRepository };
