
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
                    Reservations
                </h2>
                <p aria-label="paragraph">
                    We can’t wait to host you. If you have any special
                    requirements please feel free to call on the phone number
                    below. We’ll be happy to accommodate you.
                </p>
            </article>
        </div>
    </header>
    <div class="pattern">
        
    </div>
</template>
<style scoped lang="scss">
@import "../style/mixins";
header {
    @include make-header(60vh, false, booking);
    padding-bottom: 11rem;
    @media (min-width: 575.5px) {
        padding-bottom: var(--main-padding);
    }
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
.pattern {
    position: relative;
    height: 300px;
    &::after {
        @include Make-main-section-pattern(left, top, 0, 70%);
    }

}
</style>
