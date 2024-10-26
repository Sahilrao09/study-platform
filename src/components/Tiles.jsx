import "../css/tiles.css";

const Tiles = ({ propsData }) => {
  return (
    <div className="subject-container">
      {propsData.map((item, index) => (
        <div className="items" key={index}>
          <div>Subject - {item.name}</div>
          <div>Total Classes - {item.totalClasses}</div>
          <div>Total Topics - {item.totalTopics}</div>
        </div>
      ))}
    </div>
  );
};
export default Tiles;
