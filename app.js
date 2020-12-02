
Vue.createApp({
	data(){
		return {
			cssClass: "",
			hidden: false,
			color: "",
		};
	},
	computed: {
		dynamicClass() {
			
			return [this.cssClass, { hidden: this.hidden, visible: !this.hidden }]
		},
		dynamicColor() {
			return { backgroundColor: this.color }
		}
		
	}
	
}).mount("#assignment");

