<template>
  <div class="container">
    <div class="person-account">
      <md-layout md-gutter>
        <md-layout md-flex="33">
          <div class="person-account-wrap">
            <md-whiteframe md-elevation="6">
              <div class="person-account-icon">
                <md-icon class="md-size-4x md-grey">account_circle</md-icon>
              </div>
            </md-whiteframe>
            <div class="person-account-text">
              <p class="md-title">Учебный отдел</p>
            </div>
          </div>
        </md-layout>
        <md-layout md-vertical-align="center">
          <div class="load-btn-wrap" >
            <!-- кнопки вызова модалок -->
            <md-button class="md-raised md-primary" id="studentBtn" @click="openDialog('dialogLoad')">Загрузить список групп</md-button>
            <md-button class="md-raised md-accent" id="prepodBtn" @click="openDialog('dialogPrepod')">Загрузить список преподователей</md-button>
            <md-button class="md-raised md-warn" id="deleteBtn" @click="openDialog('dialogDelete')">Удалить список</md-button>
            <md-button class="md-raised">Редактировать данные главной страницы</md-button>


            <!-- модалки загрузки студентов-->
            <md-dialog md-open-from="#studentBtn" ref="dialogLoad">
              <md-dialog-title>Существующие данные студентов будут перезаписаны</md-dialog-title>
              <md-dialog-content>
                Если список студентов для текущей практики уже был загружен, данные будут стерты. Будьте внимательны перед загрузкой нового списка. Как правило список загружается только перед началом практики
              </md-dialog-content>
              <md-dialog-actions>
                <md-button class="md-primary" @click.native="closeDialog('dialogLoad');">Отмена</md-button>
                <md-button class="md-primary" @click.native="openDialog('loadStudentDialog');closeDialog('dialogLoad');">Загрузить</md-button>
              </md-dialog-actions>
            </md-dialog>

            <md-dialog ref="loadStudentDialog">
              <md-dialog-title>Загрузка списка студентов</md-dialog-title>
              <md-dialog-content>
                <md-input-container>
                  <label>Список студентов</label>
                  <md-file></md-file>
                </md-input-container>
              </md-dialog-content>
              <md-dialog-actions>
                <md-button class="md-primary" @click.native="closeDialog('loadStudentDialog')">Загрузить</md-button>
              </md-dialog-actions>
            </md-dialog>

            <!-- модалки загрузки преподов-->
            <md-dialog ref="dialogPrepod" md-open-from="#prepodBtn">
              <md-dialog-title>Существующие данные преподавателей будут перезаписаны</md-dialog-title>
              <md-dialog-content>
                Если список преподавателей для текущей практики уже был загружен, данные будут стерты. Будьте внимательны перед загрузкой нового списка. Как правило список загружается только перед началом практики
              </md-dialog-content>
              <md-dialog-actions>
                <md-button class="md-primary" @click.native="closeDialog('dialogPrepod');">Отмена</md-button>
                <md-button class="md-primary" @click.native="openDialog('loadPrepodDialog');closeDialog('dialogPrepod');">Загрузить</md-button>
              </md-dialog-actions>
            </md-dialog>

            <md-dialog ref="loadPrepodDialog">
              <md-dialog-title>Загрузка списка преподавателей</md-dialog-title>
              <md-dialog-content>
                <md-input-container>
                  <label>Список преподавателей</label>
                  <md-file></md-file>
                </md-input-container>
              </md-dialog-content>
              <md-dialog-actions>
                <md-button class="md-primary" @click.native="closeDialog('loadPrepodDialog')">Загрузить</md-button>
              </md-dialog-actions>
            </md-dialog>


            <!-- модалки удаления списка-->
            <md-dialog md-open-from="#deleteBtn" ref="dialogDelete">
              <md-dialog-title>Удалить список?</md-dialog-title>
              <md-dialog-content>
                При удалении списка все данные очистятся. Убедитесь, что все преподаватели сформировали свои отчеты и получили всю необходимую информацию от студентов.
              </md-dialog-content>
              <md-dialog-actions>
                <md-button class="md-primary" @click.native="closeDialog('dialogDelete');">Отмена</md-button>
                <md-button class="md-warn md-raised" @click.native="closeDialog('dialogDelete');">Удалить список</md-button>
              </md-dialog-actions>
            </md-dialog>
          </div>
        </md-layout>
      </md-layout>
    </div>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data() {
    return {
    };
  },
  created() {
    this.$material.setCurrentTheme('otdel');
  },
  methods: {
    openDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    },
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
.md-dialog{
  max-width: 750px;
}
.load-btn-wrap{
  text-align: left;
}
/*.load-btn-wrap button{
  width: 350px;
}*/
</style>
