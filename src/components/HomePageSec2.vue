<script setup>
import {ref} from "vue";
import PrimaryResponsiveImage from "../components/PrimaryResponsiveImage.vue";
const mobileWidth = ref("575.px");
const tabletWidth = ref("767.5px");
const largeTablets = ref("991.5px");
const desktops = ref("1199.5px");
</script>
<template>
    <section aria-label="section 2">
        <div class="container" aria-label="content wrapper">
            <PrimaryResponsiveImage
                src="/homepage/locally-sourced-mobile.webp"
                alt="enjoyableplace mobile"
                :medias="[
                    {
                        maxwidth: mobileWidth,
                        srcset: '/homepage/locally-sourced-mobile.webp',
                    },
                    {
                        maxwidth: tabletWidth,
                        srcset: '/homepage/locally-sourced-tablet.webp',
                    },
                    {
                        maxwidth: largeTablets,
                        srcset: '/homepage/locally-sourced-tablet@2x.webp',
                    },
                    {
                        maxwidth: desktops,
                        srcset: '/homepage/locally-sourced-desktop@2x.webp',
                    },
                ]"
                aria="enjoyable place image"
                :otherattr="{'data-aos': 'fade-up'}"
            />
            <article role="article" aria-label="article">
                <h2 role="heading" aria-level="2">
                    The most locally sourced food
                </h2>
                <p aria-label="paragraph">
                    All our ingredients come directly from our farm or local
                    fishery. So you can be sure that you’re eating the freshest,
                    most sustainable food.
                </p>
            </article>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@import "../style/mixins";
section {
    padding-bottom: var(--main-padding);
    @include make-global-style-sec();
    @media (min-width: 576px) {
        &::after {
            @include Make-main-section-pattern(right, bottom, 0%, 70%);
        }
    }
    picture {
        @include make-image-pattern(
            "/patterns/pattern-lines.svg",
            150px,
            80px,
            bottom,
            100px,
            right,
            -15px,
            50%,
            -15px
        );
    }
    .container {
        bottom: 0;
        @media (min-width: 991.5px) {
            bottom: -10.564vw;
            .image-container {
                order: 1;
            }
        }
    }
}
</style>
