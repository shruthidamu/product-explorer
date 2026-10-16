import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals"
import { User } from "../models/users"
import { UserService } from "../services/user.service"
import { inject } from "@angular/core"

interface UserState {
    users: User[],
    loading: boolean,
    error: string | null
}

export const UsersStore = signalStore(
    {providedIn: 'root'},

    withState<UserState>({
        users: [],
        loading: false,
        error: null
    }),

    withMethods((store, userService = inject(UserService)) => ({
        loadUsers() {
            patchState(store, {
                loading: true,
                error: null
            })
            userService.getUsers().subscribe({
                next: (users) => {
                    patchState(store, {
                        users,
                        loading: false
                    })
                },
                error: () => {
                    patchState(store, {
                        error: "Failed to load users",
                        loading: false
                    })  
                }
            })
        }
    }))
)