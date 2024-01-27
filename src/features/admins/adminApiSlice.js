import { apiSlice } from "../../redux/apiSlice";


export const adminsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAdmins: builder.query({
            query: () => '/admin',
            providesTags: apiSlice.cacher.providesList("getAdmins"),
        }),
        createAdmin: builder.mutation({
            query: (adminData) => ({
                url: '/register',
                method: 'POST',
                body: adminData,
            }),
            // Use onSuccess to invalidate cache for getAdmins
            onSuccess: (response, variables, api) => {
                // Invalidate the cache for getAdmins
                api.invalidateTags("getAdmins");
            },
        }),
    })
});

export const {
    useGetAdminsQuery,
    useCreateAdminMutation
} = adminsApiSlice;
