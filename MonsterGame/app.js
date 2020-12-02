
function getRandomValue(min, max) {
	
	let num = Math.random();
	
	return num = Math.floor(num * (max - min) + min);
}


Vue.createApp({
	
	data() {
		return {
			monsterHealth: 100,
			playerHealth: 100,
			rounds: 0,
			available: false,
			surrendered: false,
			log: []
		};
	},
	methods: {
		useAttack() {
			
			this.rounds++;
			
			const monsterDamage = getRandomValue(5, 12);
			
			this.log.unshift({actor: "Player", action: "attacks and deals", value: monsterDamage, numClass: "log--damage"});
			
			this.damageMonster(monsterDamage);
		},
		damageMonster(monsterDamage) {
			
			this.monsterHealth -= monsterDamage;
			
			if(this.monsterHealth < 0) 
			{ 
				this.monsterHealth = 0; 
				
				return;
			}
			
			this.damagePlayer();
		},
		damagePlayer() {
			
			const playerDamage = getRandomValue(8, 15);
			
			this.log.unshift({actor: "Monster", action: "attacks and deals", value: playerDamage, numClass: "log--damage"});
			
			this.playerHealth -= playerDamage;
			
			if(this.playerHealth < 0) 
			{ 
				this.playerHealth = 0; 
			}
	
		},
		specialAttack() {
			
			this.rounds = 0;
				
			const monsterDamage = getRandomValue(10, 20);
			this.log.unshift({actor: "Player", action: "attacks and deals", value: monsterDamage, numClass: "log--damage"});
			
			this.damageMonster(monsterDamage);
			
		},
		healPlayer() {
			this.rounds++;
			
			const healedValue = getRandomValue(10, 20);
			this.log.unshift({actor: "Player", action: "heals himself for", value: healedValue, numClass: "log--heal"});
			
			this.playerHealth += healedValue;
			
			if(this.playerHealth > 100) 
			{ 
				this.playerHealth = 100; 
			}
			
			this.damagePlayer();
			
		},
		startGame(){
			this.monsterHealth = 100;
			this.playerHealth = 100;
			this.rounds = 0;
			this.available = false;
			this.surrendered = false;
			this.log = [];
		}
		
	},
	computed:{
		endCondition() {
			
			return this.monsterHealth <= 0 || this.playerHealth <= 0 || this.surrendered;
		}
	},
	watch: {
		rounds(value){
			
			if(value === 3){
				this.available = true;
			}
			else {
				this.available = false;
				
				if(value > 3){ this.rounds = 1; }
			}
			
		}
	}
	
}).mount("#game");

