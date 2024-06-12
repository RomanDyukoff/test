import { dynamicContent } from "./dynamicContent";

interface IHandlePopup {
  openBtn: HTMLButtonElement | null;
  popup: HTMLDialogElement | null;
}

export function handlePopup() {
  const elements: IHandlePopup = {
    openBtn: document.querySelector(".button"),
    popup: document.querySelector(".popup"),
  };

  const { openBtn, popup } = elements;

  if (!openBtn || !popup) {
    console.error("Open button or popup not found");
    return;
  }

  const content: HTMLElement | null = popup.querySelector(".popup__wrapper");

  const openPopup = (): void => {
    if (content) {
      content.innerHTML = "";
      dynamicContent(content, addCloseButtonListener);
    }
    popup.showModal();
    document.addEventListener("click", clickOutsideHandler);
    openBtn.removeEventListener("click", openPopup);
  };

  const closePopup = (): void => {
    popup.close();
    document.removeEventListener("click", clickOutsideHandler);
    openBtn.addEventListener("click", openPopup);
  };

  const clickOutsideHandler = (e: MouseEvent): void => {
    const target = e.target as HTMLElement;

    if (target.contains(popup) && !target.contains(openBtn)) {
      closePopup();
    }
  };

  const addCloseButtonListener = (): void => {
    const closeBtn: HTMLElement | null = popup.querySelector("[data-close]");
    if (closeBtn) {
      closeBtn.addEventListener("click", closePopup);
    }
  };

  openBtn.addEventListener("click", openPopup);
}
