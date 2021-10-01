import Card from "../Card";
import './style.css';

const List = ({data = []}: any) => {
  return (
    <ul className="list">
      {
        data.map((el: any, id: any) => (
          <li key={id}>
            <Card />
          </li>
        ))
      }
    </ul>
  );
};

export default List;