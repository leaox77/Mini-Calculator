import "../css/Button.css"

export default function Button({clickHandle, name, purple, salmon}) {
    
    const handleClick = () => clickHandle(name)
  
    const className = [
      "component-button",
      purple ? "purple" : "",
      salmon ? "salmon" : "",
    ]

    return (
    <div className={className.join(" ").trim()}>
        <button className="btn" onClick={handleClick}>{name}</button>
    </div>
  )
}