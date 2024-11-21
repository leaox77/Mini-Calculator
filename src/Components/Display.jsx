import '../css/Display.css';

export default function Display({value}) {
  return (
    <div className="component-display">
      <div className="display__total">
        {value}
      </div>
    </div>
  )
}