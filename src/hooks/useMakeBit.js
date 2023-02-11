import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ROUTES } from "../routes/routeNames";

import {
  handleSelectValueChange,
  isHandleMadeBitChange,
} from "../store/getEventDetailsSlice";

const useMakeBit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEventChange = useCallback(
    (e) => {
      dispatch(handleSelectValueChange(e.target.value));
    },
    [dispatch]
  );

  const handleMakeBid = useCallback(() => {
    navigate(ROUTES.HOME_PAGE);

    dispatch(isHandleMadeBitChange(true));
  }, [navigate, dispatch]);

  return { handleMakeBid, handleEventChange };
};

export default useMakeBit;
