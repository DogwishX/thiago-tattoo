import "./Social.css";

function Social({ number }) {
  return (
    <div className="social">
      <a
        className="social__link"
        target="_blank"
        href={`https://wa.me/${number}?text=I'm%20interested%20in%20booking%20a%20tattoo%20appointment%20with%20you`}
      >
        <img
          className="social__icon social__icon--whatsapp"
          src="images/whatsapp.png"
        ></img>
      </a>
      <a className="social__link" href="https://facebook.com" target="_blank">
        <img
          className="social__icon social__icon--facebook"
          src="images/fb.png"
        ></img>
      </a>
      <a className="social__link" href="https://instagram.com" target="_blank">
        <img
          className="social__icon social__icon--instagram"
          src="images/ig.png"
        ></img>
      </a>
    </div>
  );
}



export default Social;
