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
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}>
      <div
        style={{
          display: "flex",
          gap: "10px"
        }}>
        <div>
          <button
            onClick={() => handleButtonClick("https://www.youtube.com")}
            style={{ width: 100, height: 100 }}>
            <img src={homeIcon} alt="Home Icon" width={25} height={25} />
            <p>Início</p>
          </button>
        </div>
        <div>
          <button
            onClick={() =>
              handleButtonClick("https://www.youtube.com/feed/subscriptions")
            }
            style={{ width: 100, height: 100 }}>
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
            }
            style={{ width: 100, height: 100 }}>
            <img src={libraryIcon} alt="Library Icon" width={25} height={25} />
            <p>Biblioteca</p>
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px"
        }}>
        <div>
          <button
            onClick={() =>
              handleButtonClick("https://www.youtube.com/feed/history")
            }
            style={{ width: 100, height: 100 }}>
            <img src={historyIcon} alt="History Icon" width={25} height={25} />
            <p>Histórico</p>
          </button>
        </div>
        <div>
          <button
            onClick={() =>
              handleButtonClick("https://www.youtube.com/playlist?list=WL")
            }
            style={{ width: 100, height: 100 }}>
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
            onClick={() => handleButtonClick("https://www.youtube.com/shorts")}
            style={{ width: 100, height: 100 }}>
            <img src={shortsIcon} alt="Shorts Icon" width={25} height={25} />
            <p>Shorts</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default IndexPopup
