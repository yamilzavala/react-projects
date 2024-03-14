import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import customFetch from "../axios/utils";
import { toast } from "react-toastify";

export const useFetchTasks = () => {
    const fetchTasks = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
          const {data} = await customFetch.get('/')
          return data;
        }
      });
   
    return {
        fetchTasks
    }
}

export const useDeleteTask = () => {
    const queryClient = useQueryClient();

    const {mutate:deleteTask, isLoadingDeleteTask} = useMutation({
        mutationKey: ['deleteTask'],
        mutationFn: async(idTask) => {
            const {data} = await customFetch.delete(`/${idTask}`)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['tasks']}) //refetch
            toast.success('Task deleted')
        },
        onError: (error) => {
            toast.error(error.response.data.msg)
        }
    })
    
    return {       
        deleteTask,
        isLoadingDeleteTask
    }
}
export const useEditTask = () => {
    const queryClient = useQueryClient();

    const {mutate:editTask} = useMutation({
        mutationKey: ['updateTask'],
        mutationFn: async ({taskId, isDone}) => {
            const {data} = await customFetch.patch(`/${taskId}`, {isDone: isDone});
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['tasks']})  //refetch
            toast.success('Task edited')
        },
        onError: (error) => {
            toast.error(error.response.data.msg)
        }
    })
    
    return {
        editTask
    }
}
export const useAddTask = () => {
    const queryClient = useQueryClient();

    const {mutate:createTask, isLoadingCreateTask} = useMutation({    
        mutationKey: ['addTask'],
        mutationFn: async (taskTitle) => {
            const {data} = await customFetch.post('/', {title: taskTitle})
            return data;
        },
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:['tasks']})  //refetch
            toast.success('task added')
        },
        onError:(error) => {
            toast.error(error.response.data.msg)
        }
    }) 
    
    return {       
        createTask,       
        isLoadingCreateTask
    }
}