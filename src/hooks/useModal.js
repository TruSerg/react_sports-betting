import { useState, useCallback } from "react";

const useModal = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback((event, reason) => {
    setOpen(false);
  }, []);

  return { isOpen, handleOpen, handleClose };
};

export default useModal;
