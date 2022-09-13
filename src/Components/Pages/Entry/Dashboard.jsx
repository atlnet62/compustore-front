

function Dashboard({ userInfos }) {

    console.log(userInfos)

    return (
        <main id="dashboard">
            <h2>Mon compte</h2>
            <p>E-mail : {userInfos.email}</p>

        </main>
    )
}

export default Dashboard