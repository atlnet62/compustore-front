function NoteFound(props) {
    console.log(props);

    return (
        <main id="noteFound">
            {props.message !== "" ? <p>{props.message}</p> : <p>NoteFound</p>}
        </main>
    );
}

export default NoteFound;
