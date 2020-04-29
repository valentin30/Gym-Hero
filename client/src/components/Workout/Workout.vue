<template>
    <div class="body">
        <div class="img-header">
            <p>Workout</p>
            <img src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2370&h=1241&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2010%2F07%2F28170650%2Ffb-interval-training-workouts.jpg" alt="">
        </div>
        <div class="workout">
            <Header>Workout</Header>
            <ExerciseHeader />
        </div>
        {{ $store.getters.exercises }}
        <router-link class="route" tag="div" to="/workout/add-exercise"
            ><p>+</p>
            <p>Add Exercise</p></router-link
        >
    </div>
</template>

<script>
import Header from '../General/Header'
import ExerciseHeader from './ExerciseHeader'
export default {
    components: {
        Header,
        ExerciseHeader,
    },
}
</script>

<style scoped>
img{
    width: 100%;
    border-radius: 20px;
}

.img-header p {
    color: white;
    position: relative;
    z-index: 2;
    font-size: 2rem;
    font-weight: bold;

}

.body {
    padding: 0.5rem;
    border-radius: 4px;
}
.workout {
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4px;
}
/* .route {
    display: flex;
    padding-left: 0.9rem;
    border-top: 1px solid #555;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
} */
</style>
