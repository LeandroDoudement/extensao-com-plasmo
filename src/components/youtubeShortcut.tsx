export const YoutubeShortcut = ({ onClick, imageSrc, altText, buttonText }) => {
  return (
    <div>
      <button
        onClick={onClick}
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
