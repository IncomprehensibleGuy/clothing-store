<template>
  <div id="sign-in-modal" class="sign-in-modal" uk-modal>
    <div class="uk-modal-dialog sign-in-modal__dialog">
      <button
        type="button"
        class="uk-modal-close-full uk-close-large sign-in-modal__close-btn"
        uk-close
      ></button>
      <div
        class="uk-flex uk-flex-center uk-flex-middle sign-in-modal__container"
      >
        <form
          v-if="signInType === 1"
          class="uk-flex uk-flex-column uk-flex-middle sign-in-modal__form"
          @submit.prevent="signIn"
        >
          <h2 class="sign-in-modal__title">Вход по номеру телефона</h2>
          <input
            v-model="tel"
            required
            type="tel"
            class="uk-input uk-form-large sign-in-modal__input"
            placeholder="Номер телефона"
            maxlength="18"
            @keyup="formatToPhone"
            @keydown="enforceFormat"
          />
          <button type="submit" class="uk-button uk-button-primary">
            Получить код
          </button>
          <button
            class="uk-button uk-button-default sign-in-modal__toggle-btn"
            @click="signInType = 2"
          >
            Войти по почте
          </button>
        </form>

        <form
          v-else-if="signInType === 2"
          class="uk-flex uk-flex-column uk-flex-stretch sign-in-modal__form"
          @submit.prevent="signIn"
        >
          <h2 class="sign-in-modal__title">Вход по почте</h2>
          <input
            v-model="email"
            required
            type="email"
            class="uk-input uk-form-large sign-in-modal__input"
            placeholder="Электронная почта"
          />
          <button type="submit" class="uk-button uk-button-primary">
            Войти
          </button>
          <button
            class="uk-button uk-button-default sign-in-modal__toggle-btn"
            @click="signInType = 1"
          >
            Войти по телефону
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignInModal',

  data() {
    return {
      signInType: 1,
      tel: '',
      email: ''
    }
  },

  methods: {
    isNumericInput(e) {
      // Allows number line & number pad
      const key = e.keyCode
      return (key >= 48 && key <= 57) || (key >= 96 && key <= 105)
    },
    isModifierKey(e) {
      const key = e.keyCode
      return (
        e.shiftKey === true ||
        key === 35 ||
        key === 36 || // Allow Shift, Home, End
        key === 8 ||
        key === 9 ||
        key === 13 ||
        key === 46 || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        // Allow Ctrl/Command + A,C,V,X,Z
        ((e.ctrlKey === true || e.metaKey === true) &&
          (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
      )
    },
    enforceFormat(e) {
      // Input must be of a valid number format or a modifier key, and not longer than ten digits
      if (!this.isNumericInput(e) && !this.isModifierKey(e)) {
        e.preventDefault()
      }
    },
    formatToPhone(e) {
      if (this.isModifierKey(e)) return

      const input = this.tel.replace(/\D/g, '').substring(0, 11) // First ten digits of input only
      const operatorCode = input.substring(1, 4)
      const middle = input.substring(4, 7)
      const last1 = input.substring(7, 9)
      const last2 = input.substring(9, 11)

      if (input.length > 8) {
        this.tel = `+7 (${operatorCode}) ${middle}-${last1}-${last2}`
      } else if (input.length > 6) {
        this.tel = `+7 (${operatorCode}) ${middle} ${last1}`
      } else if (input.length > 3) {
        this.tel = `+7 (${operatorCode}) ${middle}`
      } else if (input.length > 0) {
        this.tel = `+7 (${operatorCode}`
      }
    },
    signIn() {
      if (this.email) {
        console.log('signing in with email ', this.email)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sign-in-modal {
  &__dialog {
    margin: rem(100) auto 0;

    @include breakpoint_max(md) {
      width: 100vw;
      height: 100vh;
      margin: 0;
    }
  }

  &__close-btn {
    width: rem(30);
    top: rem(20);
    right: rem(20);
  }

  &__container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__form {
    width: rem(360);
    margin: rem(100) 0;
    padding: rem(60) rem(20);
    border: 1px solid #eee;
    text-align: center;

    @include breakpoint_max(md) {
      border: none;
    }
  }

  &__title {
    font-size: rem(25);
  }

  &__input {
    margin: rem(30) 0;
    border: 1px solid $border;
    text-align: center;
    color: #111;
  }

  &__input,
  .uk-button {
    width: 100%;
  }

  .sign-in-modal__toggle-btn {
    margin: rem(15) 0 0;
  }
}
</style>
