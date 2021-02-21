import { LanceConfig } from "../../Interfaces/Lance";

import { darLance, lstLances } from '../../Services/Leilao/Leilao';
import { AlertSuccess, AlertError } from "../../Services/SweetAlerts/Alerts";

export async function darLanceController(props:LanceConfig){
    try{

        const valid = await darLance(props)
            .then((response) => {
                AlertSuccess(response.message);
                return true;
            })
            .catch((err) => {
                AlertError(err.message);
                return false;
            });
        return valid
    }catch(err){
        AlertError(err.message);
    }
}
export async function ListarLancesControllers(ID_PRODUTO:number){
    try{

        const response = await lstLances(ID_PRODUTO)
            .then((response) => {
                return response;
            })
            .catch((err) => {
                AlertError(err.message);
            });
        return response;
    }catch(err){
        AlertError(err.message);
    }
}