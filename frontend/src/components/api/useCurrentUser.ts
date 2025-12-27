import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "../app/hook";
import { setAuthState, logout } from "../features/User/login/loginSlice";
import axiosClient from "./axiosClient";

export const useCurrentUser = () => {
    const dispatch = useAppDispatch();

    return useQuery({
        queryKey: ["currentUser"],
        queryFn: async () => {
            try {
                const res = await axiosClient.get(
                    "/api/users/profile",
                    { withCredentials: true }
                );

                const user = res.data.user;

                dispatch(setAuthState(user));

                return user;
            } catch (error) {
                // Perform "onError" logic here
                dispatch(logout());
                throw error; // must rethrow so React Query knows it failed
            }
        },
        staleTime: 5 * 60 * 1000,
        retry: false
    });
};
