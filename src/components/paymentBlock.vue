<template>
	<section class="payment">
		<div class="container">
			<div class="row">
				<div class="col-12"><h5 class="fw-bold">Оплата после положительного результата!</h5></div>
			</div>
			<div class="row">
				<div class="col-12 col-md-6 col-lg-7"><h1 class="fw-bold payment__title">Банкротство физических лиц</h1></div>
			</div>
			<div class="row">
				<div class="col-12 col-lg-6">
					<h5>Наши преимущества</h5>
					
					<div class="accordion accordion-flush" id="benefits">
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingOne">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
									Страховка списания по договору
								</button>
							</h2>
							<div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									Уникальное предложение от нашей компании «Страховка списания долгов». Мы гарантируем наш результат и подтверждаем это документально.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingTwo">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
								Только хорошие отзывы
								</button>
							</h2>
							<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									Клиенты довольны нашей работой. Многие из них обращаются именно по рекомендации - нам доверяют!
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingThree">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
								Гарантия освобождения от долгов
								</button>
							</h2>
							<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									Ваше дело будет вести один юрист, который несёт персональную ответственность за положительный результат.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingFour">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
								Рассрочка до 24 месяцев
								</button>
							</h2>
							<div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									Комфортные условия рассрочки от 2450 руб./мес. Вам не придется тратить на банкротство последние деньги.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-lg-6">
					<form action="#" id="request">
						<h2>Оставьте заявку</h2>
						<div class="request__inputs">
							<div class="form-floating mb-3">
								<input type="text" class="form-control" id="requestName" placeholder="Имя">
								<label for="floatingInput">Имя</label>
							</div>
							<div class="form-floating mb-3">
								<input type="number" class="form-control" id="requestTel" placeholder="Телефон">
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
		</div>
	</section>
</template>

<script>
export default {
	name: "paymentBlock"
}
</script>

<style lang="scss">
	
</style>