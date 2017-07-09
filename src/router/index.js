import Vue from 'vue';
import Router from 'vue-router';

// pages
import Hello from '../pages/hello/Hello';
import Student from '../pages/student/Student';
import Teacher from '../pages/teacher/Teacher';
import Otdel from '../pages/otdel/Otdel';

Vue.use(Router);

export default new Router({
  routes: [
      { path: '/', name: 'hello', component: Hello },
      { path: '/student', name: 'student', component: Student },
      { path: '/teacher', name: 'teacher', component: Teacher },
      { path: '/otdel', name: 'otdel', component: Otdel },
  ],
});
