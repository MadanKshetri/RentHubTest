import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type authStoreState= {
    user:string,
    token:string
}
type authStoreActions = {
    setUser: (user:authStoreState['user'])=>void
    setToken: (token:authStoreState['token'])=>void
}

type authStore = authStoreActions & authStoreState

export  const useAuth = create<authStore>()
    (persist<authStore>((set) => ({
        token: '',
        user:'',
        setUser: (user)=>set({user}),
        setToken: (token)=>set({token})
    }), {
    name:"auth-store",
    storage: createJSONStorage(() => AsyncStorage),
}));