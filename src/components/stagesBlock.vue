<template>
	<section class="stages">
		<div class="container">
			<div class="row"><div class="col-12 text-center"><h2 class="fw-bold">Стадии процедуры банкротства физического лица</h2></div></div>
			<div class="accordion accordion-flush" id="stagesAccordion">
				<div class="accordion-item">
					<h2 class="accordion-header" id="flush-headingOne">
						<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
						Подготовка
						</button>
					</h2>
					<div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#stagesAccordion">
						<div class="accordion-body">
							<p>Включает в себя:</p>
							<p>Сбор документов, и проведение мероприятий, необходимых для подготовки нашим юристом заявления о признании физического лица банкротом.</p>
							<p>Юристы Центра подскажут, какие документы от Вас понадобятся и где их получить, а так же полностью сопроводят Вас на подготовительной стадии.</p>
							<p>Наши юристы подготовят, проверят и подадут в суд заявление о признании физлица банкротом.</p>
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="flush-headingTwo">
						<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
						Рассмотрение судом заявления о признании банкротом
						</button>
					</h2>
					<div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#stagesAccordion">
						<div class="accordion-body">
							<p>На этой стадии, суд изучает поступившее заявление и, как правило, в течение 30 дней принимает РЕШЕНИЕ О ПРИЗНАНИИ ГРАЖДАНИНА БАНКРОТОМ, и назначает ему финансового (арбитражного) управляющего.</p>
							<p>После вынесения решения, для должника наступают первые положительные юридические последствия, среди которых:</p>
							<ul>
								<li>Прекращение всех исполнительных производств, находящихся в работе у службы судебных приставов и снятие ареста с имущества;</li>
								<li>Прекращение звонков со стороны коллекторских компаний и сотрудников банков;</li>
								<li>Запрет кредиторам подавать на должника в суд о взыскании долга;</li>
								<li>Прекращение начисления процентов, штрафов и пени.</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="flush-headingThree">
						<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
						Проведение работы по делу финансовым (арбитражным) управляющим
						</button>
					</h2>
					<div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#stagesAccordion">
						<div class="accordion-body">
							<p>На этой стадии дело переходит на проверку к финансовому (арбитражному) управляющему.</p>
							<p>Управляющий проведет проверку долгового, финансового и имущественного положения должника.</p>
							<p>Работа финансового (арбитражного) управляющего оформляется в единый письменный отчёт и подается в суд.</p>
							<p>В отчёте управляющего делается вывод об освобождении физлица от долгов.</p>
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="flush-headingFour">
						<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
						Освобождение гражданина от долгов
						</button>
					</h2>
					<div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#stagesAccordion">
						<div class="accordion-body">
							<p>На этом этапе происходит рассмотрение судом отчёта финансового (арбитражного) управляющего о результатах дела и соответствия его требованиям закона.</p>
							<p>После изучения и проверки данных документов управляющего, суд выносит определение о завершении процедуры банкротства и полном освобождении гражданина от долгов.</p>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "stagesBlock"
}
</script>

<style lang="scss">
	
</style>