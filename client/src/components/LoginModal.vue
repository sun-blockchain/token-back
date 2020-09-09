<script>
export default {
  name: 'modal',

  methods: {
    close() {
      this.$emit('close');
    },
    signIn() {
      this.$emit('signIn');
    }
  }
};
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header">
          <slot name="header">
            <button type="button" class="btn-close" @click="close">
              x
            </button>
          </slot>
        </header>
        <section class="modal-body">
          <slot name="body">
            You must login MathWallet first !
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn-green" @click="signIn">
              Sign in
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #376df9;
  justify-content: flex-end;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: center;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  color: #000;
  font-family: 'Heebo', sans-serif;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 5px 20px;
  cursor: pointer;
  font-weight: bold;
  color: #376df9;
  background: transparent;
}

.btn-green {
  color: white;
  background: #376df9;
  border: 1px solid #4aae9b;
  border-radius: 2px;
  margin: 5px;
  font-family: 'Heebo', sans-serif;
  cursor: pointer;
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
