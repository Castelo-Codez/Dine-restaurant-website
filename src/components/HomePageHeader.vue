<script setup>
import {RouterLink} from "vue-router";
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
</template>
<style lang="scss" scoped>
@import "../style/mixins";
header {
    @include make-header(70vh, true, "home");
    > .container {
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
</style>
