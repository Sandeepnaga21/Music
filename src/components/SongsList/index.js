import './index.css'

const SongsList = props => {
  const {songDetails, onClickDeleteBtn} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const onClickDelete = () => {
    onClickDeleteBtn(id)
  }

  return (
    <li className="style">
      <div className="result">
        <img className="img" src={imageUrl} alt="track" />
        <div className="combine">
          <p className="head" key="name">
            {name}
          </p>
          <p className="para" key="genre">
            {genre}
          </p>
        </div>
        <div className="divide">
          <p className="duration">{duration}</p>
          <button
            data-testid="delete"
            type="button"
            onClick={onClickDelete}
            value={id}
          >
            delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default SongsList
