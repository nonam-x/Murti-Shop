

import { CartItemsModal } from "./cartModal";


export type Order = {
    id:string;
    userId:string;
    total:number;
    items:CartItemsModal[]
    paymentStatus: 'success' | 'failure'
}