import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Error from "../Components/Pages/NotFound";
import Loading from "../Components/UI/Elements/Loading";

import { checkToken } from "../services/API/user.js";
import { getProducts } from "../services/API/products.js";
import { loadProducts } from "../store/slices/product.slice";
import {signin, signout} from '../store/slices/user.slice';

function HOC({ child, isAuthRequired }) {
    const navigate = useNavigate();

    const [fetchError, setFetchError] = useState(false);

    const dispatch = useDispatch();
    const { list, userInfos, isLogged } = useSelector((state) => ({ ...state.products, ...state.user }));

    useEffect(() => {
        if (!list.length) {
            async function fetchData() {
                const response = await getProducts();
                if (response.code) {
                    setFetchError(true);
                    return;
                }
                dispatch(loadProducts(response.data.products));
            }
            fetchData();
        } 
    }, []);

    useEffect(() => {
        async function checkAuth(){
            const TOKEN = localStorage.getItem("uat");

            if(isAuthRequired && !TOKEN){
                dispatch(signout());
                navigate("/");
            }

            if(!isLogged) {
                if(isAuthRequired) navigate("/");
                if(TOKEN !== null){
                    const response = await checkToken(TOKEN);
                    console.log(response);
                    if(response.status === 200){
                        dispatch(signin(response.data.result));
                    }
                }
            }
        }
        checkAuth();
    },[])

    const Child = child;

    if (fetchError) {
        return <Error />;
    }

    return (
        <>
            {!list.length ? (
                <Loading />
            ) : (
                    <Child products={list} userInfos={userInfos}/>
            )}
        </>
    );
}

export default HOC;