import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

import BaseCard from './Components/Bases/BaseCard.vue';
import BaseButton from './Components/Bases/BaseButton.vue';
import MessageBox from './Components/Bases/MessageBox.vue';

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("message-box", MessageBox);

app.mount('#app');
