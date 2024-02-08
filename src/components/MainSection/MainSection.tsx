import Card from "../Shared/Card/Card";
import { CardList } from "./MainSectionCardList";

const MainSection = () => {
  const myCardList = CardList;
  return (
    <div className="flex justify-center items-center gap-2 max-sm:flex-col flex-wrap">
      {myCardList &&
        myCardList.map((data, index) => {
          return (
            <div key={index}>
              <Card
                imageSrc={data.icon}
                imageAlt={data.icon}
                cardTitle={data.title}
                cardDes={data.description}
              />
            </div>
          );
        })}
    </div>
  );
};

export default MainSection;
