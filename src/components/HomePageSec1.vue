<script setup>
import {ref} from "vue";
import PrimaryResponsiveImage from "./PrimaryResponsiveImage.vue";
const mobileWidth = ref("575.px");
const tabletWidth = ref("767.5px");
const largeTablets = ref("991.5px");
const desktops = ref("1199.5px");
</script>
<template>
    <section aria-label="section 1">
        <div class="container" aria-label="content wrapper">
            <PrimaryResponsiveImage
                src="/homepage/enjoyable-place-mobile.webp"
                alt="enjoyableplace mobile"
                :medias="[
                    {
                        maxwidth: mobileWidth,
                        srcset: '/homepage/enjoyable-place-mobile.webp',
                    },
                    {
                        maxwidth: tabletWidth,
                        srcset: '/homepage/enjoyable-place-tablet.webp',
                    },
                    {
                        maxwidth: largeTablets,
                        srcset: '/homepage/enjoyable-place-tablet@2x.webp',
                    },
                    {
                        maxwidth: desktops,
                        srcset: '/homepage/enjoyable-place-desktop@2x.webp',
                    },
                ]"
                aria="enjoyable place image"
                :otherattr="{'data-aos': 'fade-up'}"
            />
            <article role="article" aria-label="article">
                <h2 role="heading" aria-level="2">
                    Enjoyable place for all the family
                </h2>
                <p aria-label="paragraph">
                    Our relaxed surroundings make dining with us a great
                    experience for everyone. We can even arrange a tour of the
                    farm before your meal.
                </p>
            </article>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@import "../style/_mixins.scss";
section {
    @include make-global-style-sec();
    @media (min-width: 576px) {
        &::after {
            @include Make-main-section-pattern(left, top, 20%, 60%);
        }
    }
    .container {
        bottom: 9.564vw;
        @media (min-width: 991.5px) {
            bottom: 6.564vw;
        }
    }
}
</style>
