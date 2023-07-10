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
    <div>
      <button
        onClick={() => handleButtonClick(url)}
        style={{
          width: 100,
          height: 100,
          border: "1px solid black",
          borderRadius: "5%"
        }}>
        <img src={imageSrc} alt={altText} width={25} height={25} />
        <p>{buttonText}</p>
      </button>
    </div>
  )
}
