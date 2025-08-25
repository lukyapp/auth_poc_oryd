// import {
//     redirect as tanstackRedirect
// } from "@tanstack/react-router";

export const redirect = (to: string) => {
  console.log(`Redirecting to ${to}`);
  window.location.replace(to);
  // tanstackRedirect({
  //     to,
  //     replace: true
  // })
};
