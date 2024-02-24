import { postRequest,getRequest } from "./api";
import { GetRoutine} from "./endpoints";
export const getAllRoutine = () => getRequest(GetRoutine);


