<template>
	<section class="feedback">
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-6 col-lg-7"><h2 class="fw-bold">Остались вопросы?</h2></div>
			</div>
			<div class="col-12 col-lg-6">
					<form action="#" id="feedback">
						<h2>Оставьте заявку</h2>
						<div class="feedback__inputs d-flex">
							<div class="form-floating mb-3">
								<input type="text" class="form-control" id="feedbackName" placeholder="Имя">
								<label for="floatingInput">Имя</label>
							</div>
							<div class="form-floating mb-3">
								<input type="number" class="form-control" id="feedbackTel" placeholder="Телефон">
								<label for="floatingInput">Телефон</label>
							</div>
						</div>
						<button type="submit" class="btn btn-primary">Оставить заявку</button>
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
							<label class="form-check-label" for="flexCheckChecked">
								Нажимая на кнопку, я принимаю условия соглашения
							</label>
						</div>
					</form>
				</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "feedbackBlock"
}
</script>

<style lang="scss">
	
</style>