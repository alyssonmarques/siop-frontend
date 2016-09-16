<template>
	<card titulo="TabPanel">
		
		<mdl-tabs :selected.sync="selected">
			<mdl-tab tab="Tab 1">
				<p>Tab content</p>
			</mdl-tab>
			<mdl-tab tab="Tab 2">
				<p>Tab content 2</p>
			</mdl-tab>
		</mdl-tabs>
		
	</card>
</template>

<script>
import { MdlTabs, MdlTab } from 'vue-mdl'
export default {
	components: { MdlTabs, MdlTab  
	}
}
</script>
