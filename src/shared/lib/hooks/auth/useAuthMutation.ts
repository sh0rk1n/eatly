import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserDto } from "entities/User";

type AuthMutationFunction<T> = (data: T) => Promise<any>;

export const useAuthMutation = <T>(
  func: AuthMutationFunction<T>,
  key: string,
) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { reset } = useForm<UserDto>();

  return useMutation({
    mutationKey: [key],
    mutationFn: async (data: T) => func(data),
    onSuccess: async () => {
      navigate("/");
      reset();
      await queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      console.warn("Ошибка QUERY", error);
    },
  });
};
