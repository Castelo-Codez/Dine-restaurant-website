<script setup>
import {ref} from "vue";
import PrimaryResponsiveImage from "./PrimaryResponsiveImage.vue";
const mobileWidth = ref("575.px");
const tabletWidth = ref("767.5px");
const largeTablets = ref("991.5px");
const desktops = ref("1199.5px");
</script>
<template>
    <section aria-label="section 3">
        <div class="container" aria-label="content wrapper">
            <article role="article" aria-label="article">
                <h2 role="heading" aria-level="2">
                    A few highlights from our menu
                </h2>
                <p>
                    We cater for all dietary requirements, but here’s a glimpse
                    at some of our diner’s favourites. Our menu is revamped
                    every season.
                </p>
            </article>
            <ul role="menu" aria-label="menu">
                <li
                    role="menuitem"
                    aria-label="Seared Salmon Fillet Meal
"
                >
                    <PrimaryResponsiveImage
                        src="/homepage/salmon-mobile.webp"
                        alt="salmon Image"
                        :medias="[
                            {
                                maxwidth: mobileWidth,
                                srcset: '/homepage/salmon-mobile.webp',
                            },
                            {
                                maxwidth: tabletWidth,
                                srcset: '/homepage/salmon-desktop-tablet.webp',
                            },
                            {
                                maxwidth: largeTablets,
                                srcset: '/homepage/salmon-desktop-tablet@2x.webp',
                            },
                        ]"
                    />
                    <article role="article">
                        <h2 role="heading" aria-level="2">
                            Seared Salmon Fillet
                        </h2>
                        <p aria-label="Meal details">
                            Our locally sourced salmon served with a refreshing
                            buckwheat summer salad.
                        </p>
                    </article>
                </li>
                <li role="menuitem" aria-label="Rosemary Filet Mignon Meal">
                    <PrimaryResponsiveImage
                        src="/homepage/beef-mobile.webp"
                        alt="salmon Image"
                        :medias="[
                            {
                                maxwidth: mobileWidth,
                                srcset: '/homepage/beef-mobile.webp',
                            },
                            {
                                maxwidth: tabletWidth,
                                srcset: '/homepage/beef-desktop-tablet.webp',
                            },
                            {
                                maxwidth: largeTablets,
                                srcset: '/homepage/beef-desktop-tablet@2x.webp',
                            },
                        ]"
                    />
                    <article role="article">
                        <h2 role="heading" aria-level="2">
                            Rosemary Filet Mignon
                        </h2>
                        <p aria-label="Meal details">
                            Our prime beef served to your taste with a delicious
                            choice of seasonal sides.
                        </p>
                    </article>
                </li>
                <li
                    role="menuitem"
                    aria-label="Summer Fruit Chocolate Mousse Meal"
                >
                    <PrimaryResponsiveImage
                        src="/homepage/chocolate-mobile.webp"
                        alt="salmon Image"
                        :medias="[
                            {
                                maxwidth: mobileWidth,
                                srcset: '/homepage/chocolate-mobile.webp',
                            },
                            {
                                maxwidth: tabletWidth,
                                srcset: '/homepage/chocolate-desktop-tablet.webp',
                            },
                            {
                                maxwidth: largeTablets,
                                srcset: '/homepage/chocolate-desktop-tablet@2x.webp',
                            },
                        ]"
                    />

                    <article role="article">
                        <h2 role="heading" aria-level="2">
                            Summer Fruit Chocolate Mousse
                        </h2>
                        <p aria-label="Meal details">
                            Creamy mousse combined with summer fruits and dark
                            chocolate shavings.
                        </p>
                    </article>
                </li>
            </ul>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@import "../style/mixins";

section {
    padding: var(--main-padding) 0px;
    background-color: var(--color-black);
    @include make-global-style-sec();
    --main-padding-spac: 200px;
    .container {
        align-items: flex-start;
        > article {
            @media (min-width: 991.5px) {
                padding-top: var(--main-padding-spac);
            }
            h2 {
                color: var(--color-white);
                & + p {
                    color: var(--color-white);
                }
            }
        }
        ul {
            width: 100%;
            @media (min-width: 991.5px) {
                padding-top: var(--main-padding-spac);
            }

            article {
                @include Make-main-article(
                    1rem,
                    1.1456rem,
                    var(--color-white),
                    700,
                    false,
                    0.9rem,
                    1.05rem,
                    var(--color-white),
                    false
                );

                padding-top: 0;
                @include make-flex(false, false);
                flex-direction: column;
                text-align: center;
                row-gap: 8px;
                h2 {
                    margin: 0;
                }
                @media (min-width: 576.5px) {
                    text-align: left;
                }
            }
            li {
                margin-bottom: 2rem;
                border-bottom: 1px solid var(--color-dark-gray);
                padding-bottom: 18px;
                @include make-flex(false, center);
                flex-direction: column;
                row-gap: 20px;
                column-gap: 40px;
                @media (min-width: 575.5px) {
                    flex-direction: row;

                    > * {
                        &:nth-child(1) {
                            flex-basis: 40%;
                        }
                    }
                }
            }
        }
    }
}
</style>
