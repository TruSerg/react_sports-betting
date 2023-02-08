import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  useGetCurrentEventsQuery,
  useGetUpcomingEventsQuery,
} from "../../../store/sportsEventsApi";

import { useFoundEventDetails } from "../../../hooks/useFoundEventDetails";
import { handleSelectValueChange } from "../../../store/getEventDetailsSlice";

import useModal from "../../../hooks/useModal";

import HomePageLayout from "../components/HomePageLayout";

const HomePageContainer = () => {
  const dispatch = useDispatch();

  const { eventDetails, eventValue } = useSelector(
    (state) => state.eventDetailsData
  );

  const { data: currentEventsList, isLoading } = useGetCurrentEventsQuery();

  const { data: upcomingEventsList } = useGetUpcomingEventsQuery();

  const { handleFoundEventDetails } = useFoundEventDetails();

  const { isOpen, handleOpen, handleClose } = useModal();

  useEffect(() => {
    if (eventValue) {
      handleOpen();
    }

    setTimeout(() => {
      handleClose();
    }, 3000);

    return () => {
      dispatch(handleSelectValueChange(""));
    };
  }, [dispatch, eventValue, handleOpen, handleClose]);

  return (
    <HomePageLayout
      isOpen={isOpen}
      isLoading={isLoading}
      eventDetails={eventDetails}
      eventValue={eventValue}
      currentEventsList={currentEventsList}
      upcomingEventsList={upcomingEventsList}
      handleFoundEventDetails={handleFoundEventDetails}
      handleOpen={handleOpen}
      handleClose={handleClose}
    />
  );
};

export default HomePageContainer;
