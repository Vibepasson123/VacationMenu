
import createCtx from '../utils/createCtx';


export type GetHotelData = () => void;

interface IHotelManagerContext {
  getHotelData: GetHotelData;
  hotelList: any;
  loading: boolean;
  error: string | null;
}
export const [useHotelManger, HotelMangerContext] = createCtx<IHotelManagerContext>('HotelManagerContext');
