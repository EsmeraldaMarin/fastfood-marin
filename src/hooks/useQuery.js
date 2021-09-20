import { useLocation } from "react-router";

export const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}

/*
import useQuery from '../hooks/useQuery

let query = useQuery();
<Child name = {query.get('name')}/>

//AGREGAR QUERY

query.append('param', param)

*/