import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { validateAccount } from "../../../services/API/user";
import Button from '../../UI/Elements/Button/Index';

function ValidateAccount() {
    const {uuid} = useParams();

    console.log(uuid);

    const navigate = useNavigate();
    const [msg, setMsg] = useState(null)


    const validateAccountHandler = async (e) => {
        e.preventDefault();
        const datas = {
            uuid : uuid,
        }
        const response = await validateAccount(datas);
        if(response.status === 200){
            setMsg(`${response.msg}, vous serez redirigé automatiquement vers la page de connexion dans 3 secondes !!`);
            setTimeout(() => {                
                navigate("/entry");
            }, 3000);
        }
    };

    return (
        <main>

        {
            msg === null ?
            <Button onClick={(e) => validateAccountHandler(e)}>
            Valider votre compte
            </Button>
            :
            <p>{msg}</p>
        }
        </main>
    );
}

export default ValidateAccount;