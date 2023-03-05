<template>
	<section class="home">
		<payment-block/>
		<withUs-block/>
		<six-steps-block/>
		<what-procedure-block/>
		<undergo-procedure/>
		<what-debts-block/>
		<helped-block/>
		<stages-block/>
		<effects-block/>
		<special-offer-block/>
		<get-out-debt-block/>
		<useful-information-block/>
		<feedback-block/>
		<v-footer/>
	</section>
</template>

<script>
import paymentBlock from '@/components/paymentBlock.vue'
import withUsBlock from '@/components/withUsBlock.vue'
import sixStepsBlock from '@/components/sixStepsBlock.vue'
import whatProcedureBlock from '@/components/whatProcedureBlock.vue'
import undergoProcedure from '@/components/undergoProcedure.vue'
import whatDebtsBlock from '@/components/whatDebtsBlock.vue'
import helpedBlock from '@/components/helpedBlock.vue'
import stagesBlock from '@/components/stagesBlock.vue'
import effectsBlock from '@/components/effectsBlock.vue'
import specialOfferBlock from '@/components/specialOfferBlock.vue'
import getOutDebtBlock from '@/components/getOutDebtBlock.vue'
import usefulInformationBlock from '@/components/usefulInformationBlock.vue'
import feedbackBlock from '@/components/feedbackBlock.vue'
import vFooter from '@/components/v-footer.vue'



export default {
   name: 'HomeView',
	components: {
		paymentBlock,
		withUsBlock,
		sixStepsBlock,
		whatProcedureBlock,
		undergoProcedure,
		whatDebtsBlock,
		helpedBlock,
		stagesBlock,
		effectsBlock,
		specialOfferBlock,
		getOutDebtBlock,
		usefulInformationBlock,
		feedbackBlock,
		vFooter,
	}

}
</script>
