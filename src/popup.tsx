import watchLaterIcon from "data-base64:~assets/clock-icon.png"
import historyIcon from "data-base64:~assets/history-icon.png"
import homeIcon from "data-base64:~assets/home-icon.png"
import libraryIcon from "data-base64:~assets/library-icon.png"
import shortsIcon from "data-base64:~assets/shorts-icon.png"
import subscriptionsIcon from "data-base64:~assets/subscriptions-icon.png"

import { useStorage } from "@plasmohq/storage/hook"

import { YoutubeShortcut } from "~components/youtubeShortcut"
import {
  HISTORY_URL,
  HOME_URL,
  LIBRARY_URL,
  SHORTS_URL,
  SUBSCRIPTIONS_URL,
  WATCH_LATER_URL
} from "~constants"
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
      <h1>Youtube Toolbox</h1>
      <div
        style={{
          display: "flex",
          gap: "10px"
        }}>
        <YoutubeShortcut
          onClick={() => handleButtonClick(HOME_URL)}
          imageSrc={homeIcon}
          altText="Home Icon"
          buttonText="Início"
        />
        <YoutubeShortcut
          onClick={() => handleButtonClick(SUBSCRIPTIONS_URL)}
          imageSrc={subscriptionsIcon}
          altText="Subscriptions Icon"
          buttonText="Inscrições"
        />
        <YoutubeShortcut
          onClick={() => handleButtonClick(LIBRARY_URL)}
          imageSrc={libraryIcon}
          altText="Library Icon"
          buttonText="Biblioteca"
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px"
        }}>
        <YoutubeShortcut
          onClick={() => handleButtonClick(HISTORY_URL)}
          imageSrc={historyIcon}
          altText="History Icon"
          buttonText="Histórico"
        />
        <YoutubeShortcut
          onClick={() => handleButtonClick(WATCH_LATER_URL)}
          imageSrc={watchLaterIcon}
          altText="Watch Later Icon"
          buttonText="Assistir mais tarde"
        />
        <YoutubeShortcut
          onClick={() => handleButtonClick(SHORTS_URL)}
          imageSrc={shortsIcon}
          altText="Shorts Icon"
          buttonText="Shorts"
        />
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}>
          <h2>Histórico de busca</h2>
          <button
            onClick={() => remove()}
            style={{
              width: 60,
              height: 23,
              alignSelf: "center",
              border: "1px solid black",
              borderRadius: "5%"
            }}>
            <p style={{ margin: 0, textAlign: "center" }}>Limpar</p>
          </button>
        </div>
        <ul>
          {history
            ? JSON.parse(history).map((query, index) => (
                <li key={index} style={{ marginBottom: 10 }}>
                  {query}
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  )
}

export default IndexPopup
