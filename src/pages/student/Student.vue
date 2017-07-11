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
              <p class="md-title">Солодарь В.А</p>
              <p class="md-subheading">Номер зачетки: 566532-10</p>
              <p class="md-subheading">Группа: 482472</p>
            </div>
          </div>
        </md-layout>
        <md-layout>
          <div class="person-account-file">
            <p class="md-title">Статус договора:</p>
            <div class="person-account-file-inner">
             <md-layout md-gutter>
              <md-layout md-flex="15">
                <md-icon class="md-size-2x md-accent md-warn">assignment_late</md-icon>
              </md-layout>
              <md-layout>
                <span class="md-body-2 md-warn">Ваш договор не получен. Отправьте договор в ближайшее время</span>
              </md-layout>
            </md-layout>
            </div>
          </div>
        </md-layout>
      </md-layout>
      </div>
      <div class="personal-form">  
        <form novalidate @submit.stop.prevent="submit">
          <md-stepper>
            <md-step md-button-continue="Далее" md-label="Город" md-button-back="Назад" >
              <p class="md-headline">Введите ваш город проживания</p>
              <md-input-container>
                <label>Город</label>
                <md-input type="text"></md-input>
              </md-input-container>
            </md-step>
            <md-step md-label="Телефон" md-button-back="Назад" md-button-continue="Далее">
              <p class="md-headline">Введите ваш телефон</p>
              <md-input-container>
                <label>Телефон</label>
                <md-input type="tel"></md-input>
              </md-input-container>
            </md-step>     
            <md-step md-label="E-mail" md-button-back="Назад" md-button-continue="Далее">
              <p class="md-headline">Введите ваш E-mail</p>
              <md-input-container>
                <label>E-mail</label>
                <md-input type="email"></md-input>
              </md-input-container>
            </md-step>      
            <md-step md-label="Предприятие" md-button-back="Назад" md-button-continue="Далее">
              <p class="md-headline">Введите полное (юридическое) название предприятия</p>
              <md-input-container>
                <label>Название предприятия</label>
                <md-input type="text"></md-input>
              </md-input-container>
            </md-step>      
            <md-step md-label="ФИО руководителя" md-button-back="Назад" md-button-continue="Далее">
              <p class="md-headline">Введите ФИО руководителя от предприятия</p>
              <md-input-container>
                <label>ФИО руководителя</label>
                <md-input type="text"></md-input>
              </md-input-container>
            </md-step>      
            <md-step md-label="Должность" md-button-back="Назад" md-button-continue="Далее">
              <p class="md-headline">Введите должность своего руководителя</p>
              <md-input-container>
                <label>Должность</label>
                <md-input type="text"></md-input>
              </md-input-container>
            </md-step>
            <md-step md-button-back="Назад" :md-continue="false">
              <p class="md-headline">Отправить данные</p>
              <p class="md-body-1">Данные будут переданы преподавателю для оформления соответствующих документов.</p>
              <p class="md-body-1">Перед отправкой убедитесь в правильности введенных данных</p>
              <md-button class="md-raised md-primary submit-btn">Отправить данные</md-button>
            </md-step>
          </md-stepper>
        </form>
      </div>
    <div class="student-info">
      <div class="student-info-text">
        <md-layout md-gutter>
          <md-layout md-flex="50">
            <p class="md-title">Вы успешно заполнили свои данные</p>
          </md-layout>
          <md-layout md-align="end" md-vertical-align="end">
            <div class="btn-wrap">
               <md-button class="md-raised md-primary">Редактировать</md-button>
            </div>
          </md-layout>
        </md-layout>
      </div>
      <md-table v-once>
        <md-table-header>
          <md-table-row>
            <md-table-head>Город проживания</md-table-head>
            <md-table-head>Телефон</md-table-head>
            <md-table-head>Название предприятия</md-table-head>
            <md-table-head>ФИО руководителя</md-table-head>
            <md-table-head>Должность</md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row>
            <md-table-cell>Зябки, Минская обл</md-table-cell>
            <md-table-cell>+375259469724</md-table-cell>
            <md-table-cell>ООО "Невысокие технологии"</md-table-cell>
            <md-table-cell>Карулесевич В.А</md-table-cell>
            <md-table-cell>Начальник Начальника Зама по работе с кадрами под кадрами</md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </div>
  </div>
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

<style>

  .md-input-container{
    display: block;
    max-width: 410px;
    margin: 20px auto;
  }
  .person-account-icon{
    width: 100%;
    text-align: center;
  }
  .person-account-text{
    padding-left: 25px;
    text-align: left;
/*    width: calc(100% - 96px);*/
  }
  .person-account-text p{
    margin: 0 0 5px;
    text-align: left;
  }
  .person-account-wrap .md-whiteframe{
    width: 96px;
  } 
  .person-account-wrap{
    font-size: 0;
    width: 100%;
    box-sizing: border-box;
    text-align: left;
    margin: 20px 0 40px;
  } 
  .person-account-wrap *{
    box-sizing: border-box;
  }
  .person-account-wrap .md-whiteframe,.person-account-wrap .person-account-text{
    display: inline-block;
    vertical-align: middle;
  }
  .submit-btn + .md-step-actions .md-raised{
    display: none;
  }
  .md-table-cell{
    text-align: left;
  }
  .personal-form{
    margin: 40px 0;
  }
  .person-account-file{
    width: 100%;  
    max-width:  400px;
    text-align: left;
  }  
  .person-account-file .md-title{
    margin: 20px 0 5px;
  }
  .person-account-file-inner{
    margin-left: -12px;
  }  
  .person-account-file-inner .md-body-2.md-warn{
    color: #ff5722;
  }
</style>
