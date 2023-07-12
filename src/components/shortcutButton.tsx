const handleButtonClick = (url: string) => {
  chrome.tabs.create({ url })
}

interface ShortcutButtonProps {
  url: string
  imageSrc: string
  altText: string
  buttonText: string
}

export const ShortcutButton = ({
  url,
  imageSrc,
  altText,
  buttonText
}: ShortcutButtonProps) => {
  return (
    <button
      onClick={() => handleButtonClick(url)}
      style={{
        width: 100,
        height: 100,
        border: "none",
        cursor: "pointer",
        borderRadius: "5%"
      }}>
      <div>
        <img src={imageSrc} alt={altText} width={25} height={25} />
        <p
          style={{
            fontWeight: 500,
            color: "#333333"
          }}>
          {buttonText}
        </p>
      </div>
    </button>
  )
}
