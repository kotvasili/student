<template>
  <md-layout md-gutter>
    <md-layout md-flex="33" md-flex-small="100">
     <div class="card-layout">
      <md-card class="md-primary" md-theme="green" md-with-hover>
        <md-card-header>
          <div class="md-title">Прием заявок открыт</div>
          <div class="md-subhead">25,52,2070</div>
        </md-card-header>
        <md-card-content>Всем студентам немедленно оформить договора</md-card-content>
      </md-card>
    </div>
      <div class="card-layout">
      <md-card class="md-primary" md-theme="green" md-with-hover>
        <md-card-header>
          <div class="md-title">Группа 482472</div>
          <div class="md-subhead">25,52,2170</div>
        </md-card-header>
        <md-card-content>Вы красавчики, можете не сдевать ничего</md-card-content>
      </md-card>
    </div>
    </md-layout>
    <md-layout md-flex-small="100">
      <div class="block-content">
        <span class="md-display-2">ОghjghjghjghjghjИР</span>
      </div>
    </md-layout>
  </md-layout>
</template>

<script>

export default {
  name: 'student',
  data() {
    return {
    };
  },
  created() {
    this.$material.setCurrentTheme('student');
  },
  // mountend: () => {
  //   console.log(1);
  //   // this.$material.setCurrentTheme('student');
  // },
};

</script>
