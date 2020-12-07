
<template>
    <the-header></the-header>
    <the-tabs :tabIndex="currentTabIndex"></the-tabs>
    <keep-alive>
        <component :is="activeComponent" :resource-list="resources" @data-modified="modifyResource"></component>
    </keep-alive>
    
</template>

<script>
import TheHeader from './Components/TheHeader.vue';
import TheTabs from './Components/TheTabs.vue';
import TheResources from './Components/TheResources.vue';
import ResourceForm from './Components/ResourceForm.vue';

export default {
    components: {
        TheHeader,
        TheTabs,
        TheResources,
        ResourceForm,
    },
    data() {
        return {
            resources: [
                {
                    id: "00001",
                    title: "Official Guide",
                    description: "The official Vue.js documentation.",
                    link: "https://vuejs.org/",
                },
                {
                    id: "10001",
                    title: "Google",
                    description: "Learn to google...",
                    link: "https://google.com/",
                }
            ],
            currentTabIndex: 1,
        };
    },
    computed: {
        activeComponent() {
            let component = "";
            
            switch (this.currentTabIndex) {
                case 1:
                    component = "the-resources";
                    break;
                case 2:
                    component = "resource-form";
                    break;
                    
            }

            return component;
        }
    },
    provide() {
        return {
            changeTab: this.changeTab
        }
    },
    methods: {
        changeTab(tabIndex){
                this.currentTabIndex = tabIndex;
                
            },
        modifyResource(resource) {
            
            switch (resource.action) {
                case "add":
                    this.resources.push(resource);

                    this.currentTabIndex = 1;
                    break;
            
                case "remove":
                    this.resources = this.resources.filter(r => r.id != resource.id);
                    break;
            }

        },
    }
}
</script>

<style>

    html {
      font-family: sans-serif;
    }

    body {
      margin: 0;
    }
</style>
