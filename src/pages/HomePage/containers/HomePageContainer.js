import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  useGetCurrentEventsQuery,
  useGetUpcomingEventsQuery,
} from "../../../store/sportsEventsApi";

import { useFoundEventDetails } from "../../../hooks/useFoundEventDetails";
import {
  handleSelectValueChange,
  isHandleMadeBitChange,
} from "../../../store/getEventDetailsSlice";

import useModal from "../../../hooks/useModal";

import HomePageLayout from "../components/HomePageLayout";

const HomePageContainer = () => {
  const dispatch = useDispatch();

  const { eventDetails, eventValue, isHandleMadeBit } = useSelector(
    (state) => state.eventDetailsData
  );

  const { data: currentEventsList, isLoading } = useGetCurrentEventsQuery();

  const { data: upcomingEventsList } = useGetUpcomingEventsQuery();

  const { handleFoundEventDetails } = useFoundEventDetails();

  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  useEffect(() => {
    if (isHandleMadeBit) {
      handleModalOpen();
    }

    setTimeout(() => {
      handleModalClose();
    }, 5000);

    return () => {
      dispatch(handleSelectValueChange(""));
      dispatch(isHandleMadeBitChange(false));
    };
  }, [dispatch, isHandleMadeBit, handleModalOpen, handleModalClose]);

  return (
    <HomePageLayout
      isOpen={isModalOpen}
      isLoading={isLoading}
      eventDetails={eventDetails}
      eventValue={eventValue}
      currentEventsList={currentEventsList}
      upcomingEventsList={upcomingEventsList}
      handleFoundEventDetails={handleFoundEventDetails}
      handleClose={handleModalClose}
    />
  );
};

export default HomePageContainer;
