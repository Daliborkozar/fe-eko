import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosAuth, axiosInstance } from "./axios";

const useGetAdmins = () => {
  const fetchData = async () => {
    try {
      // Use the Axios instance to make the GET request
      const response = await axiosAuth.get("/users");
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  };

  // Use the useQuery hook to handle caching, loading, and error states
  return useQuery(["adminData"], fetchData);
};

const useGetAllUsers= () => {
    const fetchData = async () => {
      try {
        // Use the Axios instance to make the GET request
        const response = await axiosAuth.get("/users");
        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch data");
      }
    };
  
    // Use the useQuery hook to handle caching, loading, and error states
    return useQuery(["UsersData"], fetchData);
  };

const useRegisterUser = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (data) => {
      const response = await axiosInstance.post("/register", data);
      return response.data;
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(["adminData"]);
      },
    }
  );
};

const useGetOrgUsers= (org) => {
    console.log(org)
    const fetchData = async () => {
      try {
        // Use the Axios instance to make the GET request
        const response = await axiosAuth.get(`/users`);
        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch data");
      }
    };
  
    // Use the useQuery hook to handle caching, loading, and error states
    return useQuery(["UsersData"], fetchData);
  };

export { useGetAdmins, useRegisterUser,useGetAllUsers,useGetOrgUsers };
