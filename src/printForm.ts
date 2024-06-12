import close from "./assets/icon/close.svg";

export const printForm = (): string => {
  return `
        <div class="popup-form">
        <div class="popup-form__wrapper">
          <button class="popup-form__close" type="button" data-close>
            <img src="${close}" alt="close" />
          </button>
          <form class="form">
            <h2 class="form__title">Войти в систему</h2>
            <div class="form__elements">
              <div class="inputs">
                <div class="inputs__field">
                  <input type="email" placeholder="Email/Телефон" />
                  <input type="password" placeholder="Пароль" />
                </div>
                <label class="checkbox">
                  <input type="checkbox" />
                  <span>Запомнить пароль</span>
                </label>
              </div>
              <span class="recover">Восстановить</span>
              <div class="buttons">
                <button class="signin">
                  <span>Войти</span>
                </button>
                <button class="signup">
                  <span>Зарегестрироваться</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
	`;
};
