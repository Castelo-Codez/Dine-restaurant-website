<script setup>
import {RouterLink} from "vue-router";
import {ref} from "vue";
import PrimaryResponsiveImage from "../components/PrimaryResponsiveImage.vue";
const mobileWidth = ref("575.px");
const tabletWidth = ref("767.5px");
const largeTablets = ref("991.5px");
const desktops = ref("1199.5px");
</script>
<template>
    <header role="banner" aria-label="header">
        <div class="wrapper container" aria-label="content wrapper">
            <RouterLink role="link" aria-label="Dine Home page link" to="/">
                <img
                    src="/logo.svg"
                    alt="logo"
                    aria-hidden="true"
                    role="img"
                    width="100px"
                    height="100%"
                />
            </RouterLink>
            <article role="article" aria-label="article">
                <h2
                    role="heading"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    aria-level="2"
                >
                    Exquisite dining since 1989
                </h2>
                <p aria-label="paragraph">
                    Experience our seasonal menu in beautiful country
                    surroundings. Eat the freshest produce from the comfort of
                    our farmhouse.
                </p>
                <RouterLink
                    aria-label="Dine booking page link"
                    role="link"
                    to="/booking"
                >
                    book a table
                </RouterLink>
            </article>
        </div>
    </header>
    <main role="main" aria-label="main content">
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
                        experience for everyone. We can even arrange a tour of
                        the farm before your meal.
                    </p>
                </article>
            </div>
        </section>
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
                        fishery. So you can be sure that you’re eating the
                        freshest, most sustainable food.
                    </p>
                </article>
            </div>
        </section>
        <section aria-label="section 3">
            <div class="container"></div>
        </section>
    </main>
</template>
<style lang="scss" scoped>
@import "../style/mixins";

header {
    min-height: 88vh;
    padding: 14em 0px var(--main-padding);
    background-image: url("/homepage/hero-bg-mobile.webp");
    background-repeat: no-repeat;
    background-color: var(--color-cod-gray);
    background-position: center 23%;
    background-size: cover;
    position: relative;
    z-index: 1;
    @media (min-width: 991.5px) {
        padding: var(--main-padding) 0px 13rem;
        background-image: url("/homepage/hero-bg-desktop.webp");
        background-position: 100% center;
        &::after {
            content: "";
            position: absolute;
            width: 30%;
            height: 100%;
            left: 0;
            background-color: var(--color-black);
            top: 0;
            z-index: -1;
        }
    }
    > .container {
        > a {
            @include make-flex(center, false);
            @media (min-width: 991.5px) {
                @include make-flex(flex-start, false);
            }
            img {
                aspect-ratio: auto 100px / 100%;
            }
        }
        article {
            padding-top: 50px;
            > *:not(:last-child) {
                margin-bottom: 40px;
            }
            text-align: center;

            @include Make-main-article(
                3rem,
                5rem,
                var(--color-white),
                300,
                false,
                1.22rem,
                1.4555rem,
                var(--color-white),
                true,
                transparent,
                var(--color-white),
                var(--color-white),
                var(--color-black)
            );
            @media (min-width: 991.5px) {
                padding-top: 100px;
                text-align: left;
                @include desktop-h2-p-width(40%);
            }
        }
    }
}
main {
    section {
        position: relative;
        @media (min-width: 576px) {
            &:first-child {
                &::after {
                    @include Make-main-section-pattern(left, top, 20%, 60%);
                }
            }
            &:last-child {
                &::after {
                    @include Make-main-section-pattern(right, bottom, 0%, 70%);
                }
            }
        }
        .container {
            @include make-flex(false, center);
            flex-direction: column;
            row-gap: 5rem;
            @media (min-width: 991.5px) {
                flex-direction: row;
                column-gap: 10rem;
                > * {
                    flex: 50%;
                }
            }
            position: relative;
            z-index: 10000;

            article {
                @include make-flex(false, center);
                flex-direction: column;
                text-align: center;
                row-gap: 20px;
                @media (min-width: 991.5px) {
                    padding-top: 100px;
                    text-align: left;
                    @include make-flex(center, none);
                }
                @include Make-main-article(
                    2rem,
                    3rem,
                    var(--color-cod-gray),
                    700,
                    true,
                    1.22rem,
                    1.2555rem,
                    var(--color-cod-gray),
                    false
                );
                & {
                    @media (min-width: 991.5px) {
                        padding-top: 100px;
                        text-align: left;
                        @include desktop-h2-p-width(70%);
                    }
                }
            }
        }
        &:nth-child(1) {
            .container {
                bottom: 10.564vw;
                @media (min-width: 991.5px) {
                    bottom: 7.964vw;
                }
            }
        }
        &:nth-child(2) {
            .container {
                bottom: 0;
                @media (min-width: 991.5px) {
                    bottom: 0;
                    .image-container {
                        order: 1;
                    }
                }
            }
        }
    }
}
</style>
