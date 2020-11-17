import { mount } from '@vue/test-utils'
import PanelList from '@/components/PanelList.vue'
import store from '@/store/index'

describe('test panellist', () => {
  test('no panel candidate', () => {
    const wrapper = mount(PanelList, { provide: {'vuex-store': store} })
    const panelcandidates = wrapper.find('[data-testid="panelcandidates"]')
    expect(panelcandidates.text()).toBe('Add Panel!')
  })
})