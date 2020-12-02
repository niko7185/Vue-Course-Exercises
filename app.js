
Vue.createApp({
	data(){
		return {
			tasks: [],
			newTask: "",
			hide: false
		};
	},
	methods: {
		addTask(){
			if(this.newTask === ""){ return; }
			
			this.tasks.push(this.newTask);
		}
	},
	computed: {
		btnText() {
			return this.hide ? "Show" : "Hide";
		}
	}
	
}).mount("#assignment");

