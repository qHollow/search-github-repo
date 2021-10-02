import Card from "../Card";
import './style.css';


const List = ({data = {}}: any) => {
  const items = data?.search?.edges;
  return (
    <ul className="list">
      {
        items?.map((el: any) => (
            <li className="list__item" key={el.cursor}>
              <Card item={el}/>
            </li>
        ))
      }
    </ul>
  );
};

export default List;