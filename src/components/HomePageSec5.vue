<script setup></script>
<template>
    <section aria-label="section 5">
        <div class="container" aria-label="content wrapper">
            <h2>Ready to make a reservation?</h2>
            <RouterLink
                aria-label="Dine booking page link"
                role="link"
                to="/booking"
            >
                book a table
            </RouterLink>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@import "../style/mixins";

section {
    padding: calc(var(--main-padding) + 4rem) 0px;
    background-image: url("/homepage/ready-bg-mobile.webp");
    background-repeat: no-repeat;
    background-size: cover;
    @media (min-width: 575.5px) {
        background-image: url("/homepage/ready-bg-mobile@2x.webp");
    }
    @media (min-width: 767.5px) {
        background-image: url("/homepage/ready-bg-tablet.webp");
    }
    @media (min-width: 991.5px) {
        background-image: url("/homepage/ready-bg-tablet@2x.webp");
    }
    @media (min-width: 1199.5px) {
        background-image: url("/homepage/ready-bg-desktop.webp");
    }
    @media (min-width: 1399.5px) {
        background-image: url("/homepage/ready-bg-desktop@2x.webp");
    }
    .container {
        @include make-flex(false, false);
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 20px;
        a {
            @include make-main-link(
                transparent,
                var(--color-white),
                var(--color-white),
                var(--color-black)
            );
        }
        h2 {
            color: var(--color-white);

            font-weight: 700;
            font-size: 2rem;
        }
        @media (min-width: 991.5px) {
            flex-direction: row;
            @include make-flex(space-between, center);
            h2 {
                font-size: 3rem;
            }
        }
    }
}
</style>
