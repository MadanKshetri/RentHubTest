import { useMutation } from "@tanstack/react-query";
import { signUpFetch } from "../fetch/authFetcher";

export const useSignupMutation = () => {
	return useMutation({
		mutationFn: signUpFetch,
	});
};
