import { printForm } from "./printForm";

export const dynamicContent = (
  popupWrap: HTMLElement,
  call: () => void
): void => {
  popupWrap.insertAdjacentHTML("beforeend", printForm());
  call();
};
