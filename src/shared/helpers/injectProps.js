import React from "react";

/**
 *
 * @param {React.ReactNode} children
 * @param {Object<string, any>} props -
 * @returns {React.ReactNode}
 */
export default function injectProps(children, props) {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    const injected = typeof props === "function" ? props(child) : props;

    const newChildren = child.props.children
      ? injectProps(child.props.children, props)
      : child.props.children;

    return React.cloneElement(child, injected, newChildren);
  });
}
