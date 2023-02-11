import Container from "../../../../components/Container";
import Event from "../../../../components/Event";
import Loader from "../../../../components/Loader";
import Modal from "../../../../components/Modal";

import style from "./styles.module.scss";

const HomePageLayout = ({
  isLoading,
  isOpen,
  eventDetails,
  eventValue,
  currentEventsList,
  upcomingEventsList,
  handleFoundEventDetails,
  handleClose,
}) => {
  return (
    <div className={style.wrapper}>
      {isOpen && (
        <Modal
          handleClose={handleClose}
          title={`Спасибо, ваша ставка ${
            eventDetails.title
          } ${eventValue.toLowerCase()} принята!`}
        />
      )}

      <Container>
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <div className={style.eventsWrapper}>
                <h2 className={style.title}>Текущие события</h2>
                <ul className={style.eventsList}>
                  {currentEventsList?.map(({ id, title, place, date }) => (
                    <Event
                      key={id}
                      title={title}
                      date={date}
                      place={place}
                      handleDetails={() =>
                        handleFoundEventDetails(id, currentEventsList)
                      }
                    />
                  ))}
                </ul>
              </div>

              <div className={style.eventsWrapper}>
                <h2 className={style.title}>Предстоящие события</h2>
                <ul className={style.eventsList}>
                  {upcomingEventsList?.map(({ id, title, place, date }) => (
                    <Event
                      key={id}
                      title={title}
                      date={date}
                      place={place}
                      handleDetails={() =>
                        handleFoundEventDetails(id, upcomingEventsList)
                      }
                    />
                  ))}
                </ul>
              </div>
            </>
          )}
        </>
      </Container>
    </div>
  );
};

export default HomePageLayout;
