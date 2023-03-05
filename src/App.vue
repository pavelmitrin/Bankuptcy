<template>
	<v-header >
		<template v-slot:brand>
			<router-link to="/" class="navbar-brand img-fluid"><img src="" alt="Логотип"></router-link>
		</template>

		<template v-slot:nav-links>
			<router-link to="/" class="nav-link">Главная</router-link>
			<router-link to="/about" class="nav-link">О компании</router-link>
			<router-link to="/reviews" class="nav-link">Отзывы</router-link>
			<router-link to="/contacts" class="nav-link">Контакты</router-link>
		</template>

	</v-header>
	<main class="main">
		<router-view/>
	</main>
</template>

<script>
import vHeader from '@/components/v-header.vue'

export default {
	components: {
		vHeader,
	},
}
</script>

<style lang="scss">



</style>
