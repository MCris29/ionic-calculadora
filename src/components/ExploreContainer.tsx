import "./ExploreContainer.css";
import Calculator from "./Calculator";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <Calculator />
    </div>
  );
};

export default ExploreContainer;
