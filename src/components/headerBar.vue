<template>
  <md-whiteframe>
    <md-toolbar class="header-row">
      <span class="md-title">ИИТ БГУИР</span>
      <md-button @click.native="goTo('/student')">Студент</md-button>
      <md-button @click.native="goTo('/teacher')">Преподователь</md-button>
      <md-button @click.native="goTo('/otdel')">Уч. отдел</md-button>
      <md-button v-if="isLoggedIn" class="md-raised login-btn" id="loginBtn" @click.native="openDialog('loginDialog')">Вход</md-button>
      <md-button v-else-if="!isLoggedIn" class="md-raised login-btn" id="loginBtn" @click.native="openDialog('loginDialog')">Вход</md-button>
    </md-toolbar>
    <md-dialog md-open-from="#loginBtn" md-close-to="#loginBtn" ref="loginDialog">
      <md-dialog-title>Вход в личный кабинет</md-dialog-title>
      <md-dialog-content>
        <md-input-container :class="{ 'md-input-invalid': !person.name }">
            <label>Логин</label>
            <md-input v-model="person.name" required></md-input>
            <span class="md-error"></span>
        </md-input-container>
        <md-input-container >
            <label>Пароль</label>
            <md-input v-model="person.password" required></md-input>
            <span class="md-error"></span>
        </md-input-container>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click.native="closeDialog('loginDialog')">Отмена</md-button>
        <md-button class="md-primary" @click.native="closeDialog('loginDialog')">Вход</md-button>
      </md-dialog-actions>
    </md-dialog>
  </md-whiteframe>
</template>

<script>


export default {
  data() {
    return {
      person: {
        name: 'Вася',
      },
      isLoggedIn: true,
    };
  },
  methods: {
    openDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    },
    goTo(path) {
      this.$router.push(path);
    },
  },

};
</script>


<style>
.header-row button:first-of-type{
  margin-left: auto;

}
</style>
