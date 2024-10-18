// import {
//   useQuery,
//   useMutation,
//   useQueryClient,
//   MutationFunction,
// } from '@tanstack/react-query'
// import { getGetSticky } from '../apis/sticky.ts'

// export function useFruits() {
//   const query = useQuery({ queryKey: ['sticky'], queryFn: getSticky })
//   return {
//     ...query,

//   }
// }

// export function useFruitsMutation<TData = unknown, TVariables = unknown>(
//   mutationFn: MutationFunction<TData, TVariables>
// ) {
//   const queryClient = useQueryClient()
//   const mutation = useMutation({
//     mutationFn,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['sticky'] })
//     },
//   })

//   return mutation
// }
