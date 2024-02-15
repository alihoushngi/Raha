import Card from "../Shared/Card/Card";
import { CardList } from "./MainSectionCardList";

const MainSection = () => {
  const myCardList = CardList;
  return (
    <div className="flex justify-center items-center gap-2 max-sm:flex-col flex-wrap relative z-50">
      {myCardList &&
        myCardList.map((data, index) => {
          return (
            <div key={index}>
              <a href={data.link} target="_blank">
                <Card
                  imageSrc={data.icon}
                  imageAlt={data.icon}
                  cardTitle={data.title}
                  cardDes={data.description}
                />
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default MainSection;
