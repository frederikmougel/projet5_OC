import { useParams } from "react-router";

const ItemLogement = () => {
  const { id } = useParams();
  console.log(id)
  
  return (
    <div>
        test
    </div>
  );
};

export default ItemLogement;
