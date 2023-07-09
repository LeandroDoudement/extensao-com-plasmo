import watchLaterIcon from "data-base64:~assets/clock-icon.png"
import historyIcon from "data-base64:~assets/history-icon.png"
import homeIcon from "data-base64:~assets/home-icon.png"
import libraryIcon from "data-base64:~assets/library-icon.png"
import shortsIcon from "data-base64:~assets/shorts-icon.png"
import subscriptionsIcon from "data-base64:~assets/subscriptions-icon.png"

function IndexPopup() {
  const handleButtonClick = (url) => {
    console.log("teste")
    chrome.tabs.create({ url })
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gap: "10px"
      }}>
      <div>
        <button onClick={() => handleButtonClick("https://www.youtube.com")}>
          <img src={homeIcon} alt="Home Icon" width={25} height={25} />
          <p>Início</p>
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleButtonClick("https://www.youtube.com/feed/subscriptions")
          }>
          <img
            src={subscriptionsIcon}
            alt="Subscriptions Icon"
            width={25}
            height={25}
          />
          <p>Inscrições</p>
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleButtonClick("https://www.youtube.com/feed/library")
          }>
          <img src={libraryIcon} alt="Library Icon" width={25} height={25} />
          <p>Biblioteca</p>
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleButtonClick("https://www.youtube.com/feed/history")
          }>
          <img src={historyIcon} alt="History Icon" width={25} height={25} />
          <p>Histórico</p>
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            handleButtonClick("https://www.youtube.com/playlist?list=WL")
          }>
          <img
            src={watchLaterIcon}
            alt="Watch Later Icon"
            width={25}
            height={25}
          />
          <p>Assistir mais tarde</p>
        </button>
      </div>
      <div>
        <button
          onClick={() => handleButtonClick("https://www.youtube.com/shorts")}>
          <img src={shortsIcon} alt="Shorts Icon" width={25} height={25} />
          <p>Shorts</p>
        </button>
      </div>
    </div>
  )
}

export default IndexPopup
