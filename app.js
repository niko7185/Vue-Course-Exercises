
Vue.createApp({
	data(){
		return {
			result: 0,
			timeout: 0,
		};
	},
	methods: {
		
		Increment(num) {
			this.result += num;
		}
		
	},
	computed: {
		displayResult(){
			
			if(this.result === 37)
				return 37;
			
			return this.result > 37 ? "Too much!" : "Not there yet";
		}
	},
	watch: {
		result(value) {
			
			const thisVue = this;
			
			if(this.timeout < 1){
				
				thisVue.timeout = setTimeout(() => {
					thisVue.result = 0;
					thisVue.timeout = 0;
				}, 5000);
			}
			
			console.log(thisVue.timeout);
		}
	}
	
}).mount("#assignment");

