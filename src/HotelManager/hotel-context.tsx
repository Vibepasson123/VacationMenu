
import createCtx from '../utils/createCtx';
import { SearchParams } from './hotel-provider';


export type GetHotelData = () => void;

interface IHotelManagerContext {
  getHotelData: () => Promise<void>;
  hotelList: any[];
  loading: boolean;
  error: string | null;
  searchText: string;
  suggestions: string[];
  addToFavorites: (id: number) => void;
  favorites: number[];
  handleSearchChange: (params: SearchParams) => void;
}
export const [useHotelManger, HotelMangerContext] = createCtx<IHotelManagerContext>('HotelManagerContext');
