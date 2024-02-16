const { createApp } = Vue

createApp({
    data() {
        return {
            text: "Hello World",

            img: "https://c0.klipartz.com/pngpicture/8/848/sticker-png-globe-earth-map-of-the-world-miscellaneous-globe-monochrome-world-desktop-wallpaper.png",
        }
    }
}).mount('#app')