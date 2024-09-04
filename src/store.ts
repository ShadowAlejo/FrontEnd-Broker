// src/store.ts
import { reactive } from 'vue';

interface State {
  isLoggedIn: boolean;
  userRole: string;
}

export const state: State = reactive({
  isLoggedIn: false,
  userRole: ''
});
