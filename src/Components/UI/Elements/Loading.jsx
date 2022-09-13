import image from './../../../assets/images/spinner.svg';

function Loading() {
  return (
    <main id="loading">
        <img className="loading" src={image} alt="Loading..." />
    </main>
  )
}

export default Loading