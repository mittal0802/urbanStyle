import "./directory-item.styles.scss";
import { useNavigate } from "react-router-dom";
const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();

  const onClickhandler = () => {
    navigate(`/shop/${title.toLowerCase()}`);
  };

  return (
    <div className="directory-item-container" onClick={onClickhandler}>
      <div className="background-image">
        <img src={imageUrl} alt="category" />
      </div>
      <div className="directory-item-body">
        <h3>{title}</h3>
        <p>Explore Now!</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
