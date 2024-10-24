import React from "react";

export default function createElementWithProps<
  Props extends React.Attributes = any
>(element: React.ReactElement) {
  return function ElementWithProps(props: Props) {
    return React.cloneElement(element, { ...props });
  };
}
