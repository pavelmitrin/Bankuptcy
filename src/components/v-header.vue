<template>
	<header class="header">
		<nav class="navbar navbar-expand-lg bg-light sticky-top">
			<div class="container">
				<slot name="brand"></slot>
				
				<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
					<div class="offcanvas-header">
							<slot name="brand"></slot>
							<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
					</div>
					
					<div class="offcanvas-body align-items-center text-center">
						<div class="navbar-nav flex-fill justify-content-center">

							<slot name="nav-links"></slot>

						</div>
						
						<a href="tel:+7" class="header__tel">+79999999999</a>
					</div>

				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: "headerTemplate",

}
</script>

<style lang="scss">
.header {
	z-index: 50;
	.navbar {
	}
	.navbar-expand-lg {
	}
	.bg-light {
	}
	.sticky-top {
	}
	.container {
	}
	.navbar-brand {
		img {
			// width: 30px;
			// height: 30px;

		}
	}
	.navbar-toggler, .navbar-toggler:focus, .navbar-toggler:active {
		box-shadow: none;
		border: 0;
		outline: 0;
	}
	.navbar-toggler {
	}
	.navbar-toggler-icon {
	}
	.offcanvas {
	}
	.offcanvas-end {
	}
	.offcanvas-header {
	}
	.btn-close {
	}
	.offcanvas-body {
	}
	.navbar-nav {
	}
}

</style>