<script setup>
let $props = defineProps({
    src: String,
    alt: String,
    medias: Array,
    aria: String,
    otherattr: Object,
});
</script>
<template>
    <picture class="image-container" aria-label="image container">
        <source
            v-for="$object in medias"
            :media="'(max-width:' + $object.maxwidth + ')'"
            :srcset="$object.srcset"
        />
        <img
            :src="src"
            :alt="alt"
            role="img"
            :aria-label="aria"
            v-bind="otherattr"
        />
    </picture>
</template>
<style scoped>
.image-container {
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
