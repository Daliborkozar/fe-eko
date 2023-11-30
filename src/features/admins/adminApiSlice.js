import { apiSlice } from "../../redux/apiSlice"

export const adminsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAdmins: builder.query({
            query: () => '/admin',
        
        })
    })
})

export const {
    useGetAdminsQuery
} = adminsApiSlice 