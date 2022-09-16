import Button from "../../UI/Elements/Button/Index"

function Dashboard({ userInfos }) {

    const editProfilHandler = () => {
        console.log("Go form edit profile");
    }

    const validAccountHandler = () => {
        console.log("Go form edit profile");
    }

    return (
        <main id="profile">
            <h2>My Account Properties</h2>
            <section id="account">
                <table>
                    <thead>
                        <tr><th colSpan="2"><h3>My information</h3></th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Alias :</td>
                            <td>{userInfos.alias}</td>
                        </tr>
                        <tr>
                            <td>Firstname :</td>
                            <td>{userInfos.firstname}</td>
                        </tr>
                        <tr>
                            <td>Lastname :</td>
                            <td>{userInfos.lastname}</td>
                        </tr>
                        <tr>
                            <td>Address :</td>
                            <td>{userInfos.address}</td>
                        </tr>
                        <tr>
                            <td>Zip-code :</td>
                            <td>{userInfos.zip_code}</td>
                        </tr>
                        <tr>
                            <td>City :</td>
                            <td>{userInfos.city}</td>
                        </tr>
                        <tr>
                            <td>Phone :</td>
                            <td>{userInfos.phone}</td>
                        </tr>
                        <tr>
                            <td>E-mail :</td>
                            <td>{userInfos.email}</td>
                        </tr>
                        <tr>
                            <td>Account validated :</td>
                            <td className={userInfos.isAccountValidated===0 ? "unValid" : "valid"} > {(userInfos.isAccountValidated===0) ? 'No' : 'Yes'}</td>
                        </tr>
                        <tr>
                            <td>Account type :</td>
                            <td className={userInfos.role_id === 1 ? "isUser" : userInfos.role_id === 2 ? "isModerator" : userInfos.role_id === 3 ? "isAdmin" : "unValid"}>{(userInfos.role_id === 1) ? 'User' : (userInfos.role_id === 2) ? 'Moderator' : (userInfos.role_id === 3) ? 'Admin' : null}</td>
                        </tr>
                        <tr>
                            <td>Actions :</td>
                            <td>
                                {(userInfos.isAccountValidated === 0 ? <Button onClickHandler={validAccountHandler}>Validate account</Button> : <Button onClickHandler={editProfilHandler}>Modify profil</Button>)}
                            </td>
                        </tr>
                    </tbody>
                </table>

            </section>
        </main>
    )
}

export default Dashboard