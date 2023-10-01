import './Input.scss'
import SearchIcon from '../Vectors/Search'

type InputType = {
  placeHolder : string;
  onChange: Function;
}

const Input = ({placeHolder, onChange}:InputType) => {
  return (
    <div className='input-wrapper'>
        <input placeholder={placeHolder} onChange={(e)=>onChange(e.target.value)}/>
        <span className='curso cursor-pointer'>
          <SearchIcon/>
        </span>
    </div>
  )
}

export default Input