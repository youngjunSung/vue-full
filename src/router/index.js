import Vue from 'vue'
import Router from 'vue-router'
import Condeal from '@/components/contents/Condeal'
import Deal from '@/components/contents/Deal'
import Structure from '@/components/contents/Structure'
import Scenario from '@/components/contents/Scenario'
import Partners from '@/components/contents/Partners'
import Team from '@/components/contents/Team'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Condeal',
			component: Condeal
		},
		{
			path: '/condeal',
			name: 'Condeal',
			component: Condeal
		},
		{
			path: '/deal',
			name: 'Deal',
			component: Deal
		},
		{
			path: '/structure',
			name: 'Structure',
			component: Structure
		},
		{
			path: '/scenario',
			name: 'Scenario',
			component: Scenario
		},
		{
			path: '/partners',
			name: 'Partners',
			component: Partners
		},
		{
			path: '/team',
			name: 'Team',
			component: Team
		}
	]
})
