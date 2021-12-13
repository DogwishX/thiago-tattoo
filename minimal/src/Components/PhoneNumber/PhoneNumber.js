import "./PhoneNumber.css";

function PhoneNumber({ number, element }) {
  function displayOptions() {
    const phoneOptions = document.querySelector(".phone__options");
    phoneOptions.style = "display: flex";
  }
  function hideOptions() {
    const phoneOptions = document.querySelector(".phone__options");
    phoneOptions.style = "display: none";
  }
  return (
    <div className={`phone__${element}`}>
      <div className={`phone__action`} onClick={displayOptions}>
        +{number}
      </div>
      {/* TODO Dropdown menu, giving user option to message in whatsapp or call  */}
      <div
        className="phone__options"
        onMouseOver={displayOptions}
        onMouseLeave={hideOptions}
      >
        <a
          href={`https://wa.me/${number}?text=I'm%20interested%20in%20booking%20a%20tattoo%20appointment%20with%20you`}
          target="_blank"
        >
          WhatsApp
        </a>
        <a href={`tel: +${number}`}>Call</a>
        <a onClick={copyToClipboard}>Copy</a>
      </div>
    </div>
  );
}
export default PhoneNumber;
