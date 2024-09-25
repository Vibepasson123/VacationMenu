
import createCtx from '../utils/createCtx';


export type GetHotelData = () => void;

interface IHotelManagerContext {
  getHotelData: GetHotelData;
  hotelList: any;
  loading: boolean;
  error: string | null;
  searchText?: string | null,
  suggestions?: string[],
  handleSearchChange: (string:string) => void;
}
export const [useHotelManger, HotelMangerContext] = createCtx<IHotelManagerContext>('HotelManagerContext');
