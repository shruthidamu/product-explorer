import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Product } from "../models/product";

interface WishlistState {
    items: Product[]
}

export const wishlistStore = signalStore(
    {providedIn: 'root'},
    
    withState<WishlistState>({
        items: []
    }),
    withMethods((store) => ({
        addToWishlist(prod: Product){
            const exists = store.items().some(
                item => item.id === prod.id
            )
            if(!exists) {
                patchState(store, {
                    items: [...store.items(), prod]
                })  
            }
        },
        removeFromWishlist(prodID: Product['id']) {
            patchState(store, {
                items: store.items().filter((item) => {
                    return item.id !== prodID
                })
            })
        }
    }))
)