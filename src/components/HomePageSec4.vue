<script setup>
import {ref} from "vue";
import PrimaryResponsiveImage from "./PrimaryResponsiveImage.vue";
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
                <article role="article" aria-label="article" :key="$currentTab">
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
</template>
<style lang="scss" scoped>
@import "../style/mixins";
section {
    @include make-global-style-sec();
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
</style>
