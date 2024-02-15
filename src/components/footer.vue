<script setup></script>
<template>
    <footer aria-label="footer">
        <ul role="list" class="container" aria-label="content wrapper list">
            <li role="listitem" aria-label="logo">
                <img
                    src="/logo.svg"
                    alt="logo"
                    aria-label="logo image"
                    role="img"
                />
            </li>
            <li role="listitem" aria-label="address and phones">
                <address aria-label="address of restaurant">
                    Marthwaite, Sedbergh Cumbria
                </address>
                <span aria-label="Phone Number">+00 44 123 4567 </span>
            </li>
            <li role="listitem" aria-label="open times">
                <ul role="list">
                    <li aria-label="listitem">Open Times</li>
                    <li aria-label="listitem">
                        Mon - Fri: 09:00 AM - 10:00 PM
                    </li>
                    <li aria-label="listitem">
                        Sat - Sun: 09:00 AM - 11:30 PM
                    </li>
                </ul>
            </li>
        </ul>
    </footer>
</template>
<style lang="scss" scoped>
footer {
    padding: 5rem 0px;
    background-color: var(--color-cod-gray);
    color: var(--color-white);
    img {
        width: 100px;
        height: 100%;
    }
    > ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        align-items: center;
        gap: 50px;
        text-transform: uppercase;
        font-size: 1.2rem;
        ul {
            li {
                margin-bottom: 10px;
            }
        }
    }
}
</style>
