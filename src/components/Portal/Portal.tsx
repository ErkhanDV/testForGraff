import React, { ReactNode } from "react";

import { createPortal } from "react-dom";

interface IPortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

const Portal = ({ children, element = document.body }: IPortalProps) => {
  return createPortal(children, element);
};

export default Portal;
