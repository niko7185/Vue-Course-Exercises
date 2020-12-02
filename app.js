
Vue.createApp({
	data() {
		return {
			displayText: ""
		};
	},
	methods: {
		messageBox(){
			alert("assignment");
		},
		updateText(e){
			this.displayText = e.target.value;
		}
	}
}).mount("#assignment");

