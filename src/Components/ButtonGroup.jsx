import Button from "./Button";
import "../css/ButtonGroup.css";

export default function ButtonGroup({clickHandle}) {
  const handleClick = buttonName => clickHandle(buttonName);

  return (
    <div className="component-panel">
      <div>
        <Button name="AC" clickHandle={handleClick} purple/>
        <Button name="+/-" clickHandle={handleClick} purple/>
        <Button name="%" clickHandle={handleClick} purple/>
        <Button name="/" clickHandle={handleClick} purple/>
      </div>
      <div>
        <Button name="7" clickHandle={handleClick} purple/>
        <Button name="8" clickHandle={handleClick} purple/>
        <Button name="9" clickHandle={handleClick} purple/>
        <Button name="x" clickHandle={handleClick} purple/>
      </div>
      <div>
        <Button name="4" clickHandle={handleClick} purple/>
        <Button name="5" clickHandle={handleClick} purple/>
        <Button name="6" clickHandle={handleClick} purple/>
        <Button name="-" clickHandle={handleClick} purple/>
    </div>
    <div>
        <Button name="1" clickHandle={handleClick} purple/>
        <Button name="2" clickHandle={handleClick} purple/>
        <Button name="3" clickHandle={handleClick} purple/>
        <Button name="+" clickHandle={handleClick} purple/>
    </div>
    <div>
        <Button name="0" clickHandle={handleClick} purple/>
        <Button name="." clickHandle={handleClick} purple/>
        <Button name="=" clickHandle={handleClick} salmon/>
    </div>
    </div>
  )
}