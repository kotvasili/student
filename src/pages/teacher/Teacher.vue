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
      </div>

    </md-layout>
  </md-layout>

  </template>

<script>

export default {
  name: 'hello',
  data() {
    return {
    };
  },
  created() {
    this.$material.setCurrentTheme('prepod');
  },
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.card-layout {
  margin: 16px 15%;
  display: flex;
  width: 100%;
}
.md-card{
  width: 100%;
}
.block-content{
  max-width: 1000px;
  margin: 0 auto;
  padding: 15px;
}
.block-content span{
  display: block;
  text-align: left;

}
.block-content .md-display-2{
   margin: 35px 0;
}
.block-content .md-body-2{
   margin: 10px 0;
}
@media (max-width: 600px) {
  .card-layout {
    margin: 15px 5%;
  }
  .block-content .md-display-2{
    font-size: 33px;
    line-height: 35px;
    margin: 25px 0;
  }
  .block-content .md-body-2{
     margin: 7px 0;
     text-align: justify;
  }
}
</style>
