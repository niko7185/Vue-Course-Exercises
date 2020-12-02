
Vue.createApp({
	data(){
		return {
			name: "Nikolaj",
			age: 20,
			imageUrl: "https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0",
		};
	},
	methods: {
		
		inFiveYears() {
			return this.age + 5;
		},
		randomNumber(){
			
			return Math.random();
		}
	}
	
}).mount("#assignment");

