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
                <md-button class="md-primary" @click.native="openDialog('loadStudentDialog');closeDialog('dialogLoad');">Продолжить</md-button>
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
                <md-button class="md-primary" @click.native="openDialog('loadPrepodDialog');closeDialog('dialogPrepod');">Продолжить</md-button>
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
        <md-layout>
        <md-layout  md-flex="33">
          <div class="phone-viewport">
            <md-toolbar>
              <span class="md-title">Преподаватели</span>
            </md-toolbar>
            <md-list>
              <md-list-item>
                  <span>Солодарь Василий Александрович</span>
                  <md-list-expand>
                  <div class="group-lists">
                    <p class="md-subheading">Поток 2017</p>
                    <div class="group-lists-item">
                      <p class="md-body-2">Специальность: ИТУТС</p>
                      <md-list>
                          <md-list-item class="md-inset">482472</md-list-item>
                          <md-list-item class="md-inset">482472</md-list-item>
                          <md-list-item class="md-inset">482472</md-list-item>
                          <md-list-item class="md-inset">482472</md-list-item>
                      </md-list>
                    </div>
                    <div class="group-lists-item">
                      <p class="md-body-2">Специальность: ИТУТС</p>
                      <md-list>
                          <md-list-item class="md-inset">482472</md-list-item>
                          <md-list-item class="md-inset">482472</md-list-item>
                          <md-list-item class="md-inset">482472</md-list-item>
                          <md-list-item class="md-inset">482472</md-list-item>
                      </md-list>
                    </div>
                  </div>
                  <div class="group-lists">
                    <p class="md-subheading">Поток 2016</p>
                    <div class="group-lists-item">
                      <p class="md-body-2">Специальность: ИТУТС</p>
                      <md-list>
                          <md-list-item class="md-inset">482472</md-list-item>
                          <md-list-item class="md-inset">482472</md-list-item>
                          <md-list-item class="md-inset">482472</md-list-item>
                          <md-list-item class="md-inset">482472</md-list-item>
                      </md-list>
                    </div>
                  </div>
                  </md-list-expand>
              </md-list-item>
              <md-list-item>
                  <span>Солодарь Василий Александрович</span>
                  <md-list-expand>
                  <div class="group-lists">
                    <p class="md-subheading">Поток 2017</p>
                    <div class="group-lists-item">
                      <p class="md-body-2">Специальность: ИТУТС</p>
                      <md-list>
                          <md-list-item class="md-inset">482472</md-list-item>
                          <md-list-item class="md-inset">482472</md-list-item>
                          <md-list-item class="md-inset">482472</md-list-item>
                          <md-list-item class="md-inset">482472</md-list-item>
                      </md-list>
                    </div>
                    <div class="group-lists-item">
                      <p class="md-body-2">Специальность: ИТУТС</p>
                      <md-list>
                          <md-list-item class="md-inset">482472</md-list-item>
                          <md-list-item class="md-inset">482472</md-list-item>
                          <md-list-item class="md-inset">482472</md-list-item>
                          <md-list-item class="md-inset">482472</md-list-item>
                      </md-list>
                    </div>
                  </div>
                  <div class="group-lists">
                    <p class="md-subheading">Поток 2016</p>
                    <div class="group-lists-item">
                      <p class="md-body-2">Специальность: ИТУТС</p>
                      <md-list>
                          <md-list-item class="md-inset">482472</md-list-item>
                          <md-list-item class="md-inset">482472</md-list-item>
                          <md-list-item class="md-inset">482472</md-list-item>
                          <md-list-item class="md-inset">482472</md-list-item>
                      </md-list>
                    </div>
                  </div>
                  </md-list-expand>
              </md-list-item>
              </md-list>
          </div>
        </md-layout>
        <md-layout md-vertical-align="start" md-flex="66">
          <div class="groups-odtel-list">
            <md-toolbar>
              <span class="md-title">Группы</span>
            </md-toolbar>
            <md-table-card>
            <md-list>
              <md-list-item>
                  <md-toolbar md-theme="white">
                    <h1 class="md-title">Поток 2016</h1>
                  </md-toolbar>
                  <md-list-expand>
                    <div class="groups-odtel-elem">
                    <md-table v-once>
                      <md-table-header>
                        <md-table-row>
                          <md-table-head>№ группы</md-table-head>
                          <md-table-head md-numeric>Специальность</md-table-head>
                          <md-table-head md-numeric>Ответственный преподователь</md-table-head>
                          <md-table-head md-numeric>Число студентов</md-table-head>
                          <md-table-head md-numeric>Число отчетов получено</md-table-head>
                        </md-table-row>
                      </md-table-header>

                      <md-table-body>
                        <md-table-row v-for="(row, index) in 5" :key="index">
                          <md-table-cell>468623</md-table-cell>
                          <md-table-cell>ИТУТС</md-table-cell>
                          <md-table-cell>Солодарь Василий Александрович</md-table-cell>
                          <md-table-cell>14</md-table-cell>
                          <md-table-cell>10/14</md-table-cell>
                        </md-table-row>
                      </md-table-body>
                    </md-table>
                    </div>
                </md-list-expand>
              </md-list-item>
              <md-list-item>
                  <md-toolbar md-theme="white">
                    <h1 class="md-title">Поток 2017</h1>
                  </md-toolbar>
                  <md-list-expand>

                    <md-table v-once>
                      <md-table-header>
                        <md-table-row>
                          <md-table-head>№ группы</md-table-head>
                          <md-table-head md-numeric>Специальность</md-table-head>
                          <md-table-head md-numeric>Ответственный преподователь</md-table-head>
                          <md-table-head md-numeric>Число студентов</md-table-head>
                          <md-table-head md-numeric>Число отчетов получено</md-table-head>
                        </md-table-row>
                      </md-table-header>

                      <md-table-body>
                        <md-table-row v-for="(row, index) in 10" :key="index">
                          <md-table-cell>468623</md-table-cell>
                          <md-table-cell>ИТУТС</md-table-cell>
                          <md-table-cell>Солодарь Василий Александрович</md-table-cell>
                          <md-table-cell>14</md-table-cell>
                          <md-table-cell>10/14</md-table-cell>
                        </md-table-row>
                      </md-table-body>
                    </md-table>
                </md-list-expand>
              </md-list-item>
              <md-list-item>
                  <md-toolbar md-theme="white">
                    <h1 class="md-title">Поток 2018</h1>
                  </md-toolbar>
                  <md-list-expand>
                   <md-list>
                    <md-list-item class="md-inset">
                    <md-table v-once>
                      <md-table-header>
                        <md-table-row>
                          <md-table-head>№ группы</md-table-head>
                          <md-table-head md-numeric>Специальность</md-table-head>
                          <md-table-head md-numeric>Ответственный преподователь</md-table-head>
                          <md-table-head md-numeric>Число студентов</md-table-head>
                          <md-table-head md-numeric>Число отчетов получено</md-table-head>
                        </md-table-row>
                      </md-table-header>

                      <md-table-body>
                        <md-table-row v-for="(row, index) in 5" :key="index">
                          <md-table-cell>468623</md-table-cell>
                          <md-table-cell>ИТУТС</md-table-cell>
                          <md-table-cell>Солодарь Василий Александрович</md-table-cell>
                          <md-table-cell>14</md-table-cell>
                          <md-table-cell>10/14</md-table-cell>
                        </md-table-row>
                      </md-table-body>
                    </md-table>
                    </md-list-item>
                   </md-list>
                </md-list-expand>
              </md-list-item>
            </md-list>
             </md-table-card>
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
.phone-viewport{
  width: 400px;
}
.group-lists{
  background-color: #fff;
  text-align: left;
}
.group-lists > p{
  background-color: #fff;
  margin-top: 0;
  padding-top: 20px;

}
.group-lists p{
  padding-left: 30px;
  margin-bottom: 5px;
}
.group-lists .group-lists-item p{
  padding-left: 30px;
  margin-bottom: 5px;
  margin-top: 5px;
}
.groups-odtel-list{
  width: 100%;
}
.groups-odtel-list .md-toolbar{
  width: 100%;
}
.groups-odtel-list .md-list-item-expand{
  min-height: 62px;
}
.groups-odtel-list .md-list-item-container{
 padding-left: 0 !important;
 padding-right: 0 !important;
}
.groups-odtel-list .md-table{
   width: 100% !important;
   text-align: left !important;
}
.groups-odtel-list .md-list-item .md-icon{
   margin-right: 15px;
}.groups-odtel-list .md-table-head-container{
   text-align: left;
}
.groups-odtel-list .md-table{
   background-color: #fff;
}
</style>
