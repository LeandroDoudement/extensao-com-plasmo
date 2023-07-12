import watchLaterIcon from "data-base64:~assets/clock-icon.png"
import historyIcon from "data-base64:~assets/history-icon.png"
import homeIcon from "data-base64:~assets/home-icon.png"
import libraryIcon from "data-base64:~assets/library-icon.png"
import newTabIcon from "data-base64:~assets/new-tab-icon.png"
import shortsIcon from "data-base64:~assets/shorts-icon.png"
import subscriptionsIcon from "data-base64:~assets/subscriptions-icon.png"
import trashIcon from "data-base64:~assets/trash-icon.png"

import { useStorage } from "@plasmohq/storage/hook"

import { ShortcutButton } from "~components/shortcutButton"
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
  const [history, _, { remove }] = useStorage(HISTORY_KEY)

  return (
    <div
      className="popup"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}>
      <div
        style={{
          background: "#b60c0c",
          padding: "5px 10px"
        }}>
        <h1
          style={{
            color: "#fff",
            font: "bold sans-serif"
          }}>
          Youtube Toolbox
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px"
        }}>
        <ShortcutButton
          url={HOME_URL}
          imageSrc={homeIcon}
          altText="Home Icon"
          buttonText="Início"
        />
        <ShortcutButton
          url={SUBSCRIPTIONS_URL}
          imageSrc={subscriptionsIcon}
          altText="Subscriptions Icon"
          buttonText="Inscrições"
        />
        <ShortcutButton
          url={LIBRARY_URL}
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
        <ShortcutButton
          url={HISTORY_URL}
          imageSrc={historyIcon}
          altText="History Icon"
          buttonText="Histórico"
        />
        <ShortcutButton
          url={WATCH_LATER_URL}
          imageSrc={watchLaterIcon}
          altText="Watch Later Icon"
          buttonText="Assistir mais tarde"
        />
        <ShortcutButton
          url={SHORTS_URL}
          imageSrc={shortsIcon}
          altText="Shorts Icon"
          buttonText="Shorts"
        />
      </div>
      {!!history?.length && (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#b60c0c"
            }}>
            <h2
              style={{
                padding: "0 5px",
                color: "#fff"
              }}>
              Histórico de busca
            </h2>

            <button
              onClick={() => remove()}
              style={{
                display: "flex",
                border: "none",
                cursor: "pointer",
                borderRadius: "5%",
                alignItems: "center",
                width: 100,
                height: 30,
                gap: "10px",
                marginRight: "10px"
              }}>
              <img src={trashIcon} alt="Trash Icon" width={20} height={20} />
              <p style={{ margin: 0, textAlign: "center" }}>Limpar</p>
            </button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
              flexDirection: "column",
              gap: "5px",
              marginTop: "5px"
            }}>
            {history
              ? JSON.parse(history).map(
                  (searchQuery: string, index: number) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        textAlign: "center",
                        width: "100%",
                        padding: "10px 10px",
                        background: "#efefef",
                        fontSize: "14px",
                        color: "#333333",
                        cursor: "pointer"
                      }}>
                      <a
                        onClick={(event) => {
                          event.preventDefault()
                          chrome.tabs.create({
                            url: `https://www.youtube.com/results?search_query=${searchQuery}`
                          })
                        }}>
                        {searchQuery}
                      </a>
                      <img
                        src={newTabIcon}
                        alt="Trash Icon"
                        width={20}
                        height={20}
                      />
                    </div>
                  )
                )
              : null}
          </div>
        </div>
      )}
    </div>
  )
}

export default IndexPopup
