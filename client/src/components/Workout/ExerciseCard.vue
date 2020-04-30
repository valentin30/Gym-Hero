<template>
    <div class="component-body">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="info">
            <slot name="info"></slot>
        </div>
    </div>
</template>

<style scoped>
.component-body {
    border-top: 1px solid #555;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    padding-left: 1rem;
}
.header {
    flex-grow: 1;
    display: flex;
    justify-content: start;
    align-items: center;
}
.info {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.info p{
    min-width: 30px;
    text-align: center;
}
p {
    margin: 0;
    margin-top: 0.2rem;
}
</style>
