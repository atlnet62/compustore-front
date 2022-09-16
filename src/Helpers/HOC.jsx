import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Error from "../Components/Pages/Error";
import Loading from "../Components/UI/Elements/Loading";

import { checkToken } from "../services/API/user.js";
import { getProducts } from "../services/API/products.js";
import { getCategories} from "../services/API/category.js";

import { loadProducts } from "../store/slices/product.slice";
import { signin, signout } from '../store/slices/user.slice';
import { loadCategories } from "../store/slices/category.slice";

function HOC({ child, isAuthRequired, formType }) {
    const navigate = useNavigate();

    const [fetchError, setFetchError] = useState(false);

    const dispatch = useDispatch();
    const { productList, categoryList, userInfos, isLogged } = useSelector((state) => ({ ...state.products, ...state.categories, ...state.user }));

    useEffect(() => {
        if (!categoryList.length) {
            async function fetchData() {
                const response = await getCategories();
                if (response.code) {
                    setFetchError(true);
                    return;
                }
                dispatch(loadCategories(response.data.categories));
            }
            fetchData();
        } 
    }, []);


    useEffect(() => {
        if (!productList.length) {
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
            {!productList.length || !categoryList.length ? (
                <Loading />
            ) : (
                    <Child categories={categoryList} products={productList} userInfos={userInfos} formType={formType} />
            )}
        </>
    );
}

export default HOC;