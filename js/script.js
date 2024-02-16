const { createApp } = Vue

createApp({
    data() {
        return {
            text: "Hello World!",

            img: "https://upload.wikimedia.org/wikipedia/commons/8/87/World_map_without_Antarctica.svg",
        }
    }
}).mount('#app')