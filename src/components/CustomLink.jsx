import React from "react";
import { useRoute, Link } from "wouter";

const CustomLink = (props) => {
  const [isActive] = useRoute(props.href);
  const activeObject = {
    color: "#3f51b5",
  };
  return (
    <Link {...props}>
      <a style={isActive ? activeObject : {}}>{props.children}</a>
    </Link>
  );
};

export default CustomLink;
