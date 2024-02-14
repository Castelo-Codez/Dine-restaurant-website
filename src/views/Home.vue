<script setup>
import {RouterLink} from "vue-router";
import {ref} from "vue";
import PrimaryResponsiveImage from "../components/PrimaryResponsiveImage.vue";
const mobileWidth = ref("575.px");
const tabletWidth = ref("767.5px");
const largeTablets = ref("991.5px");
const desktops = ref("1199.5px");
const $tabs = [
    {
        id: 1,
        title: "Family Gathering",
        content:
            "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
        path: "family-gathering",
    },
    {
        id: 2,
        title: "Special Events",
        content:
            "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
        path: "special-events",
    },
    {
        id: 3,
        title: "Social Events",
        content:
            "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
        path: "social-events",
    },
];
const $currentTab = ref($tabs[0]);

function $getCurrentTab(id) {
    $currentTab.value = $tabs.find((el) => el.id == id);
}
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
            <div class="container" aria-label="content wrapper">
                <article role="article" aria-label="article">
                    <h2 role="heading" aria-level="2">
                        A few highlights from our menu
                    </h2>
                    <p>
                        We cater for all dietary requirements, but here’s a
                        glimpse at some of our diner’s favourites. Our menu is
                        revamped every season.
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
                                Our locally sourced salmon served with a
                                refreshing buckwheat summer salad.
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
                                Our prime beef served to your taste with a
                                delicious choice of seasonal sides.
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
                                Creamy mousse combined with summer fruits and
                                dark chocolate shavings.
                            </p>
                        </article>
                    </li>
                </ul>
            </div>
        </section>
        <section aria-label="section 4">
            <div class="container" aria-label="content wrapper">
                <PrimaryResponsiveImage
                    :src="`/homepage/${$currentTab.path}-mobile.webp`"
                    :alt="`${$currentTab.title}`"
                    :medias="[
                        {
                            maxwidth: mobileWidth,
                            srcset: `/homepage/${$currentTab.path}-mobile.webp`,
                        },
                        {
                            maxwidth: tabletWidth,
                            srcset: `/homepage/${$currentTab.path}-tablet.webp`,
                        },
                        {
                            maxwidth: largeTablets,
                            srcset: `/homepage/${$currentTab.path}-tablet@2x.webp`,
                        },
                        {
                            maxwidth: desktops,
                            srcset: `/homepage/${$currentTab.path}-desktop.webp`,
                        },
                    ]"
                />
                <div
                    class="left-side"
                    aria-label="container of article and switcher btns"
                >
                    <article
                        role="article"
                        aria-label="article"
                        :key="$currentTab"
                    >
                        <h2 role="heading" aria-level="2">
                            {{ $currentTab.title }}
                        </h2>

                        <p aria-label="paragraph">
                            {{ $currentTab.content }}
                        </p>

                        <RouterLink
                            aria-label="Dine booking page link"
                            role="link"
                            to="/booking"
                        >
                            book a table
                        </RouterLink>
                    </article>
                    <ul role="list" aria-label="switchers list">
                        <li role="listitem" v-for="tab in $tabs">
                            <button
                                :aria-label="`${tab.title} tab`"
                                role="button"
                                type="button"
                                @click="$getCurrentTab(tab.id)"
                                :class="{active: $currentTab.id === tab.id}"
                            >
                                {{ tab.title }}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
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
            &:nth-child(2) {
                &::after {
                    @include Make-main-section-pattern(right, bottom, 0%, 70%);
                }
            }
        }
        &:nth-child(2) {
            padding-bottom: var(--main-padding);
        }
        &:nth-child(3) {
            padding: var(--main-padding) 0px;
            background-color: var(--color-black);
        }
        &:nth-child(2) {
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

            > article {
                @include make-flex(false, center);
                flex-direction: column;
                text-align: center;
                row-gap: 20px;
                @media (min-width: 991.5px) {
                    text-align: left;
                    @include make-flex(center, none);
                }
                @include Make-main-article(
                    2rem,
                    3vw,
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
                        text-align: left;
                        @include desktop-h2-p-width(70%);
                    }
                }
            }
        }
        &:nth-child(3) {
            --main-padding-spac: 200px;
            .container {
                align-items: flex-start;
                > article {
                    @media (min-width: 991.5px) {
                        padding-top: var(--main-padding-spac);
                    }
                    h2,
                    p {
                        color: var(--color-white);
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
        &:nth-child(1) {
            .container {
                bottom: 9.564vw;
                @media (min-width: 991.5px) {
                    bottom: 6.564vw;
                }
            }
        }
        &:nth-child(2) {
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
    }
    section {
        &:nth-child(4) {
            padding: 5rem 0px;
            .container {
                padding-bottom: 20px;
                .image-container {
                    @include make-image-pattern(
                        "/patterns/pattern-lines.svg",
                        150px,
                        80px,
                        top,
                        0,
                        left,
                        -2rem,
                        0,
                        -2rem
                    );
                }
                article {
                    @include Make-main-article(
                        1.8rem,
                        2rem,
                        var(--color-dark-gray),
                        800,
                        false,
                        1.22rem,
                        1.1555rem,
                        var(--color-black),
                        true,
                        var(--color-black),
                        var(--color-white),
                        var(--color-white),
                        var(--color-black)
                    );

                    p {
                        min-height: 10rem;
                    }
                    @include make-flex(false, center);
                    flex-direction: column;
                    text-align: center;
                    row-gap: 20px;
                    @media (min-width: 991.5px) {
                        align-items: flex-start;
                        text-align: left;
                        @include desktop-h2-p-width(70%);
                    }
                    h2 {
                        text-transform: capitalize;
                    }
                    h2,
                    p {
                        animation: fade var(--main-transition) linear;
                        @keyframes fade {
                            0% {
                                opacity: 0;
                                transform: translateX(30px);
                                visibility: hidden;
                            }
                            100% {
                                opacity: 1;
                                transform: translateX(0);
                                visibility: visible;
                            }
                        }
                    }
                    > a {
                        &:hover {
                            border: 1px solid var(--color-black);
                        }
                    }
                }
                .left-side {
                    @include make-flex(false, false);
                    flex-direction: column;
                    row-gap: 50px;
                    ul {
                        order: -1;
                        width: 100%;
                        @include make-flex(false, center);
                        flex-direction: column;
                        row-gap: 20px;
                        @media (min-width: 575.5px) {
                            flex-direction: row;
                            justify-content: space-between;
                        }
                        @media (min-width: 991.5px) {
                            flex-direction: column;
                            align-items: flex-start;
                            order: 2;
                        }
                        li {
                            button {
                                background: no-repeat;
                                border: none;
                                font-weight: 400;
                                color: var(--color-dark-blue-shaodw);
                                font-size: 18px;
                                text-transform: uppercase;
                                cursor: pointer;
                                transition: var(--main-transition);
                                position: relative;
                                &::after {
                                    content: "";
                                    position: absolute;
                                    width: 0%;
                                    background-color: var(--color-black);
                                    height: 1px;
                                    bottom: -10px;
                                    transition: var(--main-transition);
                                    left: 50%;
                                    z-index: -1;
                                    transform: translateX(-50%);
                                    @media (min-width: 991.5px) {
                                        left: -130%;
                                        top: 50%;
                                        transform: translateY(-50%);
                                    }
                                }
                                &.active {
                                    color: var(--color-cod-gray);
                                    &::after {
                                        width: 80%;
                                    }
                                }
                                &:hover {
                                    color: var(--color-cod-gray);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
