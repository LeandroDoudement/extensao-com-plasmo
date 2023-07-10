import watchLaterIcon from "data-base64:~assets/clock-icon.png"
import historyIcon from "data-base64:~assets/history-icon.png"
import homeIcon from "data-base64:~assets/home-icon.png"
import libraryIcon from "data-base64:~assets/library-icon.png"
import shortsIcon from "data-base64:~assets/shorts-icon.png"
import subscriptionsIcon from "data-base64:~assets/subscriptions-icon.png"

import { useStorage } from "@plasmohq/storage/hook"

import { HISTORY_KEY } from "~constants"

function IndexPopup() {
  const handleButtonClick = (url) => {
    chrome.tabs.create({ url })
  }

  const [history, _, { remove }] = useStorage(HISTORY_KEY)

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
            style={{ width: 100, height: 100 }}
            onClick={() => handleButtonClick("https://www.youtube.com")}>
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
      <div>
        <button onClick={() => remove()} style={{ width: 100, height: 100 }}>
          <p>Limpar histórico</p>
        </button>
      </div>
      <div>
        <h2>Histórico de busca</h2>
        <ul>
          {history
            ? JSON.parse(history).map((query, index) => (
                <li key={index}>{query}</li>
              ))
            : null}
        </ul>
      </div>
    </div>
  )
}

export default IndexPopup
