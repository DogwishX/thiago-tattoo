import "./PhoneNumber.css";

function PhoneNumber({ number, element, children }) {
  function copyToClipboard({ currentTarget }) {
    navigator.clipboard.writeText(currentTarget.dataset.number);
    hideOptions();
    triggerCopyNotification();
  }

  function triggerCopyNotification() {
    const notification = document.querySelector(".copy-notification");
    notification.classList.toggle("copy-notification--visible");
    setTimeout(
      () => notification.classList.toggle("copy-notification--visible"),
      2000
    );
  }

  function displayOptions({ pageX, pageY }) {
    const phoneOptions = document.querySelector(".phone__options");
    phoneOptions.style = `display: flex; top: ${pageY - 5}px; left: ${pageX - 5}px`;
    console.log(pageX, pageY)
  }
  function hideOptions() {
    const phoneOptions = document.querySelector(".phone__options");
    phoneOptions.style = "display: none";
  }
  return (
    <div className={`phone__${element}`}>
      <div className={`phone__action`} onClick={displayOptions}>
        {children}
      </div>
      {/* TODO Dropdown menu, giving user option to message in whatsapp or call  */}
      <div
        className="phone__options"
        // onMouseOver={displayOptions}
        onMouseLeave={hideOptions}
      >
        <a
          href={`https://wa.me/${number}?text=I'm%20interested%20in%20booking%20a%20tattoo%20appointment%20with%20you`}
          target="_blank"
        >
          WhatsApp
        </a>
        <a href={`tel: +${number}`}>Call</a>
        <a onClick={copyToClipboard} data-number={`+${number}`}>
          Copy
        </a>
      </div>
      <div className="copy-notification">Copied number successfully!</div>
    </div>
  );
}
export default PhoneNumber;


