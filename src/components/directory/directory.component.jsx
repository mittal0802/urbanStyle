import {
  DirectoryContainer,
  DirectoryTitle,
  DirectoryItems,
} from "./directory.styles";
import DirectoryItem from "../directory-item/directory-item.component";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      <DirectoryTitle>
        <h1>SHOP BY CATEGORY</h1>
      </DirectoryTitle>
      <DirectoryItems>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoryItems>
    </DirectoryContainer>
  );
};

export default Directory;
