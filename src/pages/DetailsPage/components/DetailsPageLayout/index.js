import Select from "../../../../components/Select";
import Container from "../../../../components/Container";
import DetailsEvent from "../../../../components/DetailsEvent";
import OrderButton from "../../../../components/Buttons/Button";
import BackButton from "../../../../components/Buttons/BackButton";

import style from "./styles.module.scss";

const DetailsPageLayout = ({
  eventDetails,
  eventValue,
  handleEventChange,
  handleMakeBid,
}) => {
  return (
    <div className={style.wrapper}>
      <Container>
        <BackButton />

        <div className={style.eventWrapper}>
          <div className={style.selectArea}>
            <Select
              value={eventValue}
              label={eventValue}
              onChange={handleEventChange}
            />
          </div>

          <DetailsEvent
            title={eventDetails.title}
            place={eventDetails.place}
            date={eventDetails.date}
          />

          <div className={style.linkArea}>
            <OrderButton
              handleClick={handleMakeBid}
              title={"Сделать ставку"}
              value={!eventValue}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailsPageLayout;
