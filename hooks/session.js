"use client";

// react query
import { useQuery } from "@tanstack/react-query";
// services
import { fetchSession } from "@/services/queries";

const useSession = () => {
  const {
    data: session,
    isLoading,
    isError,
    Error,
  } = useQuery({
    queryKey: ["session"],
    queryFn: fetchSession,
  });

  return {
    session,
    isLoading,
    isError,
    Error,
  };
};

export default useSession;
