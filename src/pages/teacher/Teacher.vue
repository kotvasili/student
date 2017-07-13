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
              <p class="md-title">Шведова О.А</p>
            </div>
          </div>
        </md-layout>
        <md-layout>
        </md-layout>
      </md-layout>
      </div>
    <div class="teacher-groups">
      <md-table-card>
        <md-toolbar class="groups-group">
          <h1 class="md-title">Группы специальности: ИТУТС</h1>
        </md-toolbar>
        <div class="teacher-groups-inner">
          <div class="group-wrap">
            <md-toolbar>
              <p class="md-subheading">482472</p>
              <div class="group-wrap-starosta">
                <div>
                  <md-avatar>
                    <md-icon class="md-primary">account_circle</md-icon>
                  </md-avatar>
                  <span>Солодарь Василий Александрович</span>
                  <md-button class="md-icon-button md-list-action">
                    <md-icon class="md-primary">chat_bubble</md-icon>
                    <md-tooltip md-direction="right">Написать старосте</md-tooltip>
                  </md-button>
                </div>
              </div>
            </md-toolbar>
          </div>
          <md-table>
            <md-table-header>
              <md-table-row>
                <md-table-head>
                  ФИО
                </md-table-head>
                <md-table-head>№ зач</md-table-head>
                <md-table-head>Город</md-table-head>
                <md-table-head>Телефон</md-table-head>
                <md-table-head>E-mail</md-table-head>
                <md-table-head>Предприятие</md-table-head>
                <md-table-head>ФИО руководителя</md-table-head>
                <md-table-head>Должность руководителя</md-table-head>
                <md-table-head>Статус договора</md-table-head>
              </md-table-row>
            </md-table-header>
            <md-table-body>
              <md-table-row v-for="(row, rowIndex) in nutrition" :key="rowIndex" :md-item="row" md-auto-select md-selection>
                <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex">
                  {{ column }}
                </md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
           <md-divider class="md-inset"></md-divider>
        </div>
        <div class="teacher-groups-inner">
          <div class="group-wrap">
            <md-toolbar>
              <p class="md-subheading">482471</p>
              <div class="group-wrap-starosta">
                <div>
                  <md-avatar>
                    <md-icon class="md-primary">account_circle</md-icon>
                  </md-avatar>
                  <span>Солодарь Василий Александрович</span>
                  <md-button class="md-icon-button md-list-action">
                    <md-icon class="md-primary">chat_bubble</md-icon>
                  </md-button>
                </div>
              </div>
            </md-toolbar>
          </div>
          <md-table>
            <md-table-header>
              <md-table-row>
                <md-table-head>
                  ФИО
                </md-table-head>
                <md-table-head>№ зач</md-table-head>
                <md-table-head>Город</md-table-head>
                <md-table-head>Телефон</md-table-head>
                <md-table-head>E-mail</md-table-head>
                <md-table-head>Предприятие</md-table-head>
                <md-table-head>ФИО руководителя</md-table-head>
                <md-table-head>Должность руководителя</md-table-head>
                <md-table-head>Статус договора</md-table-head>
              </md-table-row>
            </md-table-header>
            <md-table-body>
              <md-table-row v-for="(row, rowIndex) in nutrition" :key="rowIndex" :md-item="row" md-auto-select md-selection>
                <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex">
                  {{ column }}
                </md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
          <md-divider class="md-inset"></md-divider>
        </div>
        <div class="teacher-groups-inner">
          <div class="group-wrap">
            <md-toolbar>
              <p class="md-subheading">482473</p>
              <div class="group-wrap-starosta">
                <div>
                  <md-avatar>
                    <md-icon class="md-primary">account_circle</md-icon>
                  </md-avatar>
                  <span>Солодарь Василий Александрович</span>
                  <md-button class="md-icon-button md-list-action">
                    <md-icon class="md-primary">chat_bubble</md-icon>
                  </md-button>
                </div>
              </div>
            </md-toolbar>
          </div>
          <md-table>
            <md-table-header>
              <md-table-row>
                <md-table-head>
                  ФИО
                </md-table-head>
                <md-table-head>№ зач</md-table-head>
                <md-table-head>Город</md-table-head>
                <md-table-head>Телефон</md-table-head>
                <md-table-head>E-mail</md-table-head>
                <md-table-head>Предприятие</md-table-head>
                <md-table-head>ФИО руководителя</md-table-head>
                <md-table-head>Должность руководителя</md-table-head>
                <md-table-head>Статус договора</md-table-head>
              </md-table-row>
            </md-table-header>
            <md-table-body>
              <md-table-row v-for="(row, rowIndex) in nutrition" :key="rowIndex" :md-item="row" md-auto-select md-selection>
                <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex">
                  {{ column }}
                </md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
          <md-divider class="md-inset"></md-divider>
        </div>
        <div class="groups-otchet">
          <md-button class="md-raised md-primary">Сформировать отчет по специальности</md-button>
        </div>
      </md-table-card>
    </div>
    <div class="teacher-groups">
      <md-table-card>
        <md-toolbar class="groups-group">
          <h1 class="md-title">Группы специальности: ПОИТ</h1>
        </md-toolbar>
        <div class="teacher-groups-inner">
          <div class="group-wrap">
            <md-toolbar>
              <p class="md-subheading">482472</p>
              <div class="group-wrap-starosta">
                <div>
                  <md-avatar>
                    <md-icon class="md-primary">account_circle</md-icon>
                  </md-avatar>
                  <span>Солодарь Василий Александрович</span>
                  <md-button class="md-icon-button md-list-action">
                    <md-icon class="md-primary">chat_bubble</md-icon>
                    <md-tooltip md-direction="right">Написать старосте</md-tooltip>
                  </md-button>
                </div>
              </div>
            </md-toolbar>
          </div>
          <md-table>
            <md-table-header>
              <md-table-row>
                <md-table-head>
                  ФИО
                </md-table-head>
                <md-table-head>№ зач</md-table-head>
                <md-table-head>Город</md-table-head>
                <md-table-head>Телефон</md-table-head>
                <md-table-head>E-mail</md-table-head>
                <md-table-head>Предприятие</md-table-head>
                <md-table-head>ФИО руководителя</md-table-head>
                <md-table-head>Должность руководителя</md-table-head>
                <md-table-head>Статус договора</md-table-head>
              </md-table-row>
            </md-table-header>
            <md-table-body>
              <md-table-row v-for="(row, rowIndex) in nutrition" :key="rowIndex" :md-item="row" md-auto-select md-selection>
                <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex">
                  {{ column }}
                </md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
           <md-divider class="md-inset"></md-divider>
        </div>
        <div class="teacher-groups-inner">
          <div class="group-wrap">
            <md-toolbar>
              <p class="md-subheading">482471</p>
              <div class="group-wrap-starosta">
                <div>
                  <md-avatar>
                    <md-icon class="md-primary">account_circle</md-icon>
                  </md-avatar>
                  <span>Солодарь Василий Александрович</span>
                  <md-button class="md-icon-button md-list-action">
                    <md-icon class="md-primary">chat_bubble</md-icon>
                  </md-button>
                </div>
              </div>
            </md-toolbar>
          </div>
          <md-table>
            <md-table-header>
              <md-table-row>
                <md-table-head>
                  ФИО
                </md-table-head>
                <md-table-head>№ зач</md-table-head>
                <md-table-head>Город</md-table-head>
                <md-table-head>Телефон</md-table-head>
                <md-table-head>E-mail</md-table-head>
                <md-table-head>Предприятие</md-table-head>
                <md-table-head>ФИО руководителя</md-table-head>
                <md-table-head>Должность руководителя</md-table-head>
                <md-table-head>Статус договора</md-table-head>
              </md-table-row>
            </md-table-header>
            <md-table-body>
              <md-table-row v-for="(row, rowIndex) in nutrition" :key="rowIndex" :md-item="row" md-auto-select md-selection>
                <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex">
                  {{ column }}
                </md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
          <md-divider class="md-inset"></md-divider>
        </div>
        <div class="teacher-groups-inner">
          <div class="group-wrap">
            <md-toolbar>
              <p class="md-subheading">482473</p>
              <div class="group-wrap-starosta">
                <div>
                  <md-avatar>
                    <md-icon class="md-primary">account_circle</md-icon>
                  </md-avatar>
                  <span>Солодарь Василий Александрович</span>
                  <md-button class="md-icon-button md-list-action">
                    <md-icon class="md-primary">chat_bubble</md-icon>
                  </md-button>
                </div>
              </div>
            </md-toolbar>
          </div>
          <md-table>
            <md-table-header>
              <md-table-row>
                <md-table-head>
                  ФИО
                </md-table-head>
                <md-table-head>№ зач</md-table-head>
                <md-table-head>Город</md-table-head>
                <md-table-head>Телефон</md-table-head>
                <md-table-head>E-mail</md-table-head>
                <md-table-head>Предприятие</md-table-head>
                <md-table-head>ФИО руководителя</md-table-head>
                <md-table-head>Должность руководителя</md-table-head>
                <md-table-head>Статус договора</md-table-head>
              </md-table-row>
            </md-table-header>
            <md-table-body>
              <md-table-row v-for="(row, rowIndex) in nutrition" :key="rowIndex" :md-item="row" md-auto-select md-selection>
                <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex">
                  {{ column }}
                </md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
          <md-divider class="md-inset"></md-divider>
        </div>
        <div class="groups-otchet">
          <md-button class="md-raised md-primary">Сформировать отчет по специальности</md-button>
        </div>
      </md-table-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data: () => ({
    nutrition: [
      {
        dessert: 'Кузнецова Екатерина Владимировна',
        zach: '465782-20',
        type: 'Минск',
        calories: '+356(00)000-00-00',
        fat: 'nagibator99@mail.com',
        fat2: 'ООО Белаз',
        comment: 'Прокопоненко В.А.',
        comment2: 'Главный наладчик наладочного оборудования отдела уборки прилегающей территории',
        status: true,
      },
      {
        dessert: 'Зуй Александр Михайлович',
        zach: '465782-20',
        type: 'Минск',
        calories: '+356(00)000-00-00',
        fat: 'nagibator99@mail.com',
        fat2: 'Департамент Охраны МВД РБ',
        comment: 'Прокопоненко В.А.',
        comment2: 'Главный наладчик наладочного оборудования отдела уборки прилегающей территории',
        status: true,
      },
      {
        dessert: 'Ивашко Игорь Викторович',
        zach: '465782-20',
        type: 'Минск',
        calories: '+356(00)000-00-00',
        fat: 'nagibator99@mail.com',
        fat2: 'ООО Белаз',
        comment: 'Прокопоненко В.А.',
        comment2: 'Главный наладчик наладочного оборудования отдела уборки прилегающей территории',
        status: true,
      },
      {
        dessert: 'Костюк Дмитрий Васильевич',
        zach: '465782-20',
        type: 'Минск',
        calories: '+356(00)000-00-00',
        fat: 'nagibator99@mail.com',
        fat2: 'ООО Белаз',
        comment: 'Прокопоненко В.А.',
        comment2: 'Главный наладчик наладочного оборудования отдела уборки прилегающей территории',
        status: true,
      },
      {
        dessert: 'Кот Екатерина Александровна',
        zach: '465782-20',
        type: 'Минск',
        calories: '+356(00)000-00-00',
        fat: 'nagibator99@mail.com',
        fat2: 'ООО Пиу-Пиу Мазафака',
        comment: 'Прокопоненко В.А.',
        comment2: 'Слесарь',
        status: true,
      },
      {
        dessert: 'Кузнецова Екатерина Владимировна',
        zach: '465782-20',
        type: 'Воложинский район, Деревня Недеревня',
        calories: '+356(00)000-00-00',
        fat: 'nagibator99@mail.com',
        fat2: 'ООО Белаз',
        comment: 'Прокопоненко В.А.',
        comment2: 'Главный наладчик наладочного оборудования отдела уборки прилегающей территории',
        status: true,
      },
      {
        dessert: 'Куцанов Руслан Иванович',
        zach: '465782-20',
        type: 'Минск',
        calories: '+356(00)000-00-00',
        fat: 'зкштусс_щиьуищыr99@mail.com',
        fat2: 'ООО Белаз',
        comment: 'Прокопоненко В.А.',
        comment2: 'Главный наладчик наладочного оборудования отдела уборки прилегающей территории',
        status: true,
      },
    ],
  }),
  created() {
    this.$material.setCurrentTheme('prepod');
  },
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .teacher-groups:nth-child(n + 3){
    margin:40px 0;
  }
  .teacher-groups .md-subheading{
    text-align: center;
    width: 100%;
  }
  .teacher-groups .md-table-card.md-theme-prepod .groups-group{
    background-color: #2196f3;
    color: rgba(255, 255, 255, .87);
  }
  .teacher-groups .md-table{
    box-sizing: border-box;
  }
  .teacher-groups .md-table .md-table-selection{
    width: 56px;
  }
  .teacher-groups .md-table-cell.md-table-selection.md-has-action .md-table-cell-container{
    padding-left: 18px !important;
  }
  .teacher-groups .md-table-cell-container{
      padding: 6px 16px 6px 2px !important;
      text-align: left;
  }
  .teacher-groups .md-table-head-container{
      text-align: left;
  }
  .teacher-groups .md-table-head-text{
    padding-left: 0 !important;
  }
  .teacher-groups .md-table-cell:nth-child(2){
    max-width: 140px;
    min-width: 110px;
    word-wrap: break-word;
  }
  .teacher-groups .md-table-cell:nth-child(3){
    min-width: 90px;
  }
  .teacher-groups .md-table-cell:nth-child(4){
    max-width: 150px;
  }  
  .teacher-groups .md-table-cell:nth-child(5){
    max-width: 150px;
    min-width: 130px;
  }
  .teacher-groups .md-table-cell:nth-child(6){
    max-width: 150px;
    min-width: 130px;
    word-wrap: break-word;
  }
  .groups-otchet{
    margin: 20px auto;
  }
  .teacher-groups-inner:not(:first-child){
    margin-top: 30px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to{
    opacity: 0
  }
</style>
